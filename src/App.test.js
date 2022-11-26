import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders stopwatch heading", () => {
  render(<App />);
  const header = screen.getByText(/Stopwatch/i);
  expect(header).toBeInTheDocument();
});
