import { useState } from "react";
import { Reservation } from "../components/Reservation";
import { ReservationConfirmed } from "../components/ReservationConfirmed";

export const Booking = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    seating: "",
    date: "",
    time: "",
    numberOfGuests: 0,
  });
  const [confirmed, setConfirmed] = useState(false);
  const handleSubmit = (event) => {
    setConfirmed(!confirmed);
  };
  return (
    <main>
      {!confirmed ? (
        <Reservation
          values={values}
          setValues={setValues}
          onSubmit={handleSubmit}
        />
      ) : (
        <ReservationConfirmed values={values} onEdit={handleSubmit} />
      )}
    </main>
  );
};
