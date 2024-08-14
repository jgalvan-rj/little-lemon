import PropTypes from "prop-types";
import { useState } from "react";
import { validateEmail, validatePhone } from "../helpers/utils";
import { TextField } from "./Form/TextField";
import { RadioGroup } from "../components/Form/RadioGroup";
import { Radio } from "../components/Form/Radio";
import { DateField } from "../components/Form/DateField";
import { Select } from "../components/Form/Select";

const Seating = Object.freeze({
  Indoor: { value: "Indoor" },
  Outdoor: { value: "Outdoor" },
});

const ReservationTimes = Object.freeze([
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
]);

const NumberOfGuests = Object.freeze([1, 2, 3, 4, 5, 6]);

const isRequired = (value, errorText = "Required") => {
  return !value ? errorText : null;
};

const validateDate = (date) => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today ? "Date must be greater than today" : null;
};

const validateTime = (time) => {
  return !ReservationTimes.includes(time) ? "Invalid time" : null;
};

const validateSeating = (seating) => {
  return seating !== Seating.Indoor.value && seating !== Seating.Outdoor.value
    ? "Invalid seating option"
    : null;
};

const validateNumberOfGuests = (guests) => {
  return !NumberOfGuests.includes(Number(guests))
    ? "Invalid number of guests"
    : null;
};

const ReserveTableSchema = {
  firstName: (e) => isRequired(e) || validateEmail(e),
  lastName: (e) => isRequired(e),
  email: (e) => isRequired(e) || (!validateEmail(e) && "Invalid email"),
  phone: (e) => isRequired(e) || (!validatePhone(e) && "Invalid phone number"),
  seating: (e) => isRequired(e) || validateSeating(e),
  date: (e) => isRequired(e) || validateDate(e),
  time: (e) => isRequired(e) || validateTime(e),
  numberOfGuests: (e) => isRequired(e) || validateNumberOfGuests(e),
};

export const Reservation = ({ values, setValues, onSubmit }) => {
  const [touched, setTouched] = useState({});
  const [error, setError] = useState({});

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setTouched({ ...touched, [event.target.name]: true });
    setError({
      ...error,
      [event.target.name]: ReserveTableSchema[event.target.name](
        event.target.value
      ),
    });
  };

  const validateProperty = (property) => {
    let errorValue = ReserveTableSchema[property](values[property]);
    return !!errorValue;
  };

  const getIsFormValid = () => {
    let isValid = true;
    let touchedFields = { ...touched };
    let errorFields = { ...error };
    for (const property in values) {
      if (validateProperty(property)) {
        touchedFields = { ...touchedFields, [property]: true };
        errorFields = {
          ...errorFields,
          [property]: ReserveTableSchema[property](values[property]),
        };
        isValid = false;
      }
    }
    setTouched(touchedFields);
    setError(errorFields);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (getIsFormValid()) {
      onSubmit(event);
    }
  };

  return (
    <section className="reservation">
      <img src="/greek salad.jpg" alt="Greek Salad" className="res-image" />
      <h2 className="black">Please Provide Your Reservation Details</h2>
      <form onSubmit={handleSubmit} noValidate className="reservation-form">
        <TextField
          className="reservation-field"
          name="firstName"
          label="First Name"
          placeholder="First name"
          value={values.firstName}
          required
          onChange={handleChange}
          error={error.firstName && touched.firstName}
          helperText={touched.firstName && error.firstName}
        />
        <TextField
          className="reservation-field"
          name="lastName"
          label="Last Name"
          placeholder="Last name"
          value={values.lastName}
          required
          onChange={handleChange}
          error={error.lastName && touched.lastName}
          helperText={touched.lastName && error.lastName}
        />
        <TextField
          className="reservation-field"
          name="email"
          label="Email"
          placeholder="Email"
          value={values.email}
          required
          onChange={handleChange}
          error={error.email && touched.email}
          helperText={touched.email && error.email}
        />
        <TextField
          className="reservation-field"
          name="phone"
          label="Phone"
          placeholder="Phone"
          value={values.phone}
          required
          onChange={handleChange}
          error={error.phone && touched.phone}
          helperText={touched.phone && error.phone}
        />
        <RadioGroup
          className="reservation-field"
          label="Seating"
          required
          error={error.seating && touched.seating}
          helperText={touched.seating && error.seating}
          name="seating"
          onChange={handleChange}
          value={values.seating}
        >
          <Radio value={Seating.Indoor.value} label={Seating.Indoor.value} />
          <Radio value={Seating.Outdoor.value} label={Seating.Outdoor.value} />
        </RadioGroup>
        <DateField
          className="reservation-field"
          name="date"
          label="Date"
          placeholder="Date"
          value={
            values.date ? new Date(values.date).toISOString().split("T")[0] : ""
          }
          required
          onChange={handleChange}
          error={error.date && touched.date}
          helperText={touched.date && error.date}
          minDate={new Date().toISOString().split("T")[0]}
        />
        <Select
          className="reservation-field"
          name="time"
          label="Time"
          placeholder="Select Time"
          value={values.time}
          required
          onChange={handleChange}
          error={error.time && touched.time}
          helperText={touched.time && error.time}
          options={ReservationTimes.map((time) => ({
            label: time,
            value: time,
          }))}
          displayEmpty
        />
        <Select
          className="reservation-field"
          name="numberOfGuests"
          label="Number of Guests"
          placeholder="Select Number of Guests"
          value={values.numberOfGuests}
          required
          onChange={handleChange}
          error={error.numberOfGuests && touched.numberOfGuests}
          helperText={touched.numberOfGuests && error.numberOfGuests}
          options={NumberOfGuests.map((guests) => ({
            label: guests,
            value: guests,
          }))}
          displayEmpty
        />
        <button type="submit" className="reserve-button">
          Reserve Table
        </button>
      </form>
    </section>
  );
};

Reservation.propTypes = {
  values: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
