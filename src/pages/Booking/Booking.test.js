import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "./BookingForm";
import { initializeTimes, updateTimes } from "..";

const dummyFunction = jest.fn();
const dispatchOnDateChange = jest.fn();

test("renders Reservation component", () => {
  const values = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    seating: "",
    occasion: "",
    date: "",
    time: "",
    numberOfGuests: 0,
  };

  render(
    <BookingForm
      availableTimes={[]}
      values={values}
      dispatchOnDateChange={dummyFunction}
      setValues={dummyFunction}
      onSubmit={dummyFunction}
    />
  );
  const h2Element = screen.getByText(
    /Please Provide Your Reservation Details/i
  );
  expect(h2Element).toBeInTheDocument();
});

test("initializeTimes returns the expected initial times", () => {
  // Define the expected initial times based on your implementation
  const expectedInitialTimes = updateTimes(null, new Date());
  // Call the initializeTimes function and assert that it returns the expected value
  const actualInitialTimes = initializeTimes();
  expect(actualInitialTimes).toEqual(expectedInitialTimes);
});

test("updateTimes returns the expected initial times", () => {
  const expectedTimes = ["17:00", "17:30", "20:30", "22:30"];
  const actualTimes = updateTimes(null, new Date("15 Aug 2024"));
  expect(actualTimes).toEqual(expectedTimes);
});

// test("ReservationForm can be submitted by the user", () => {
//   const values = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     seating: "",
//     occasion: "",
//     date: "",
//     time: "",
//     numberOfGuests: 0,
//   };

//   render(
//     <BookingForm
//       availableTimes={initializeTimes()}
//       values={values}
//       dispatchOnDateChange={dispatchOnDateChange}
//       setValues={dummyFunction}
//       onSubmit={dummyFunction}
//     />
//   );

//   // Fill in form fields (you may need to adjust the selectors based on your form structure)
//   const firstNameInput = screen.getByPlaceholderText("First name");
//   const lastNameInput = screen.getByPlaceholderText("Last name");
//   const emailInput = screen.getByPlaceholderText("Email");
//   const phoneInput = screen.getByPlaceholderText("Phone");
//   const seatingInput = screen.getByLabelText("Indoor");
//   const occasionSelect = screen.getByLabelText("Birthday");
//   const dateInput = screen.getByPlaceholderText("Date");
//   const timeSelect = screen.getByPlaceholderText("Time");
//   const guestsInput = screen.getByPlaceholderText("Select Number of Guests");

//   fireEvent.change(firstNameInput, { target: { value: "John" } });
//   fireEvent.change(lastNameInput, { target: { value: "Doe" } });
//   fireEvent.change(emailInput, { target: { value: "hi@hi.com" } });
//   fireEvent.change(phoneInput, { target: { value: "1234567890" } });
//   fireEvent.change(seatingInput, { target: { value: "Indoor" } });
//   fireEvent.change(dateInput, { target: { value: "2024-08-15" } });
//   fireEvent.change(timeSelect, { target: { value: "19:00" } });
//   fireEvent.change(guestsInput, { target: { value: "4" } });
//   fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

//   // Simulate form submission
//   const submitButton = screen.getByText("Make Your reservation");
//   fireEvent.click(submitButton);

//   // Verify that the updateTimes function was called with the selected date
//   expect(dispatchOnDateChange).toHaveBeenCalledWith("2024-08-15");
// });
