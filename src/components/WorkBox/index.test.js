import { render, screen } from "@testing-library/react";
import WorkBox from "./index";

it("renders counter component", async () => {
  render(<WorkBox />);
  const countEl = await screen.findByText(/this text just/i);
  expect(countEl).toBeInTheDocument();
});
