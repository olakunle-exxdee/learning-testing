import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

//this does not test the state of the app just the looks
test("button has the correct initial color", () => {
  render(<App />);

  //find and element with a role of a button and the text of "Change to blue "
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background-color to be red
  expect(colorButton).toHaveStyle({ background: "red" });

  //click button
  fireEvent.click(colorButton);

  //expect the background of blue
  expect(colorButton).toHaveStyle({ background: "blue " });

  expect(colorButton.textContent).toBe("Change to red");
});

// todo : the initial state of the check box  and button

test("initial condition", () => {
  render(<App />);

  // check the button if it starts enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check the checkbox  starts unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("change checkbox state", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});
test("change the button color to gray when when checkbox is disabled", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ background: "gray" });

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ background: "red" });
});
test("change the button color to blue", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(colorButton);

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ background: "gray" });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ background: "blue" });
});
