import { screen } from "@testing-library/react";
import { renderWithRouter } from "../test-utils";
import App from "../App";

test("renders the home page by default", () => {
  renderWithRouter(<App />);

  expect(screen.getByText(/github explorer/i)).toBeInTheDocument();
});

test("renders user page when on the /users/:username route", () => {
  renderWithRouter(<App />, { route: "/users/octocat" });

  expect(screen.getByText(/octocat/i)).toBeInTheDocument();
});
