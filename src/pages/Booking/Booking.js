import { useReducer, useState } from "react";
import { BookingForm } from "./BookingForm";
import { ConfirmedBooking } from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "../../helpers/fakeApi";

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  return fetchAPI(new Date(action));
}

export const Booking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    seating: "",
    occasion: "",
    date: new Date(),
    time: "",
    numberOfGuests: 0,
  });
  const [confirmed, setConfirmed] = useState(false);
  const submitForm = (event) => {
    if (submitAPI(values)) {
      setConfirmed(!confirmed);
    }
  };
  return (
    <main>
      {!confirmed ? (
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatch}
          values={values}
          setValues={setValues}
          onSubmit={submitForm}
        />
      ) : (
        <ConfirmedBooking values={values} onEdit={submitForm} />
      )}
    </main>
  );
};
