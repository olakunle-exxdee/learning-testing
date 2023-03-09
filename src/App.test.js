import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

//this does not test the state of the app just the looks
test("button has the correct initial color", () => {
  render(<App />);

  //find and element with a role of a button and the text of "Change to blue "
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background to be red
  expect(colorButton).toHaveStyle({ background: "red" });

  //click button
  fireEvent.click(colorButton);

  //expect the background of blue
  expect(colorButton).toHaveStyle({ background: "blue " });

  expect(colorButton.textContent).toBe("Change to red");
});
