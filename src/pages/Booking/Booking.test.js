import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BookingForm } from "./BookingForm";
import { initializeTimes, updateTimes } from "..";

const dummyFunction = jest.fn();
const dispatchOnDateChange = jest.fn();
const onSubmit = jest.fn();

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

test("ReservationForm updateTimes", () => {
  const values = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    seating: "",
    occasion: "",
    date: "",
    time: "19:00",
    numberOfGuests: 1,
  };

  render(
    <BookingForm
      availableTimes={["19:00"]}
      values={values}
      dispatchOnDateChange={dispatchOnDateChange}
      setValues={dummyFunction}
      onSubmit={onSubmit}
    />
  );

  // Fill in form fields (you may need to adjust the selectors based on your form structure)
  const firstNameInput = screen.getByPlaceholderText("First name");
  const lastNameInput = screen.getByPlaceholderText("Last name");
  const emailInput = screen.getByPlaceholderText("Email");
  const phoneInput = screen.getByPlaceholderText("Phone");
  const seatingInput = screen.getByLabelText("Indoor");
  const occasionSelect = screen.getByLabelText("Birthday");
  const dateInput = screen.getByPlaceholderText("Date");

  fireEvent.change(firstNameInput, { target: { value: "John" } });
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  fireEvent.change(emailInput, { target: { value: "hi@hi.com" } });
  fireEvent.change(phoneInput, { target: { value: "1234567890" } });
  fireEvent.change(seatingInput, { target: { value: "Indoor" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });
  fireEvent.change(dateInput, { target: { value: "2024-08-15" } });

  // Simulate form submission
  const submitButton = screen.getByText("Make Your reservation");
  fireEvent.click(submitButton);

  // Verify that the updateTimes function was called with the selected date
  expect(dispatchOnDateChange).toHaveBeenCalledWith("2024-08-15");
});

test("ReservationForm user can submit", () => {
  const values = {
    firstName: "hi",
    lastName: "hi",
    email: "hi@hi.com",
    phone: "5555555555",
    seating: "Indoor",
    occasion: "",
    date: "2024-08-15",
    time: "19:00",
    numberOfGuests: 1,
  };

  render(
    <BookingForm
      availableTimes={["19:00"]}
      values={values}
      dispatchOnDateChange={dispatchOnDateChange}
      setValues={dummyFunction}
      onSubmit={onSubmit}
    />
  );

  // Simulate form submission
  const submitButton = screen.getByText("Make Your reservation");
  fireEvent.click(submitButton);

  // Verify onsubmit has been called
  expect(onSubmit).toHaveBeenCalled();
});

test("ReservationForm user cannot submit", () => {
  const values = {
    firstName: "",
    lastName: "hi",
    email: "hi@hi.com",
    phone: "5555555555",
    seating: "Indoor",
    occasion: "",
    date: "2024-08-15",
    time: "19:00",
    numberOfGuests: 1,
  };

  render(
    <BookingForm
      availableTimes={["19:00"]}
      values={values}
      dispatchOnDateChange={dispatchOnDateChange}
      setValues={dummyFunction}
      onSubmit={onSubmit}
    />
  );

  // Simulate form submission
  const submitButton = screen.getByText("Make Your reservation");
  fireEvent.click(submitButton);

  // Verify onsubmit has not been called
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
