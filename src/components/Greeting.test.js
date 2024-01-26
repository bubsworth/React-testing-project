import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("render hello world text", () => {
  // Arrange
  render(<Greeting />);
  // Act
  // ...nothing
  // Assert
  const helloWorldElelement = screen.getByText("Hello World", { exact: false });
  expect(helloWorldElelement).toBeInTheDocument();
});
