import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("clicking the user details redirects to the user page", async () => {
  renderWithRouter(<App />);

  // type the username into the search bar
  userEvent.type(screen.getByLabelText(/enter a github username/i), "octo");

  // click search
  userEvent.click(
    screen.getByRole("button", {
      name: "Search",
    })
  );

  // see a list of user details for each user returned by the API
  expect(await screen.findByText(/octocat/i)).toBeInTheDocument();

  // link to the detail page
  const detailLink = screen.getAllByRole("link", { name: /view details/i })[0];
  expect(detailLink).toHaveAttribute("href", "/users/octocat");

  userEvent.click(detailLink);

  expect(
    await screen.findByRole("heading", { name: "octocat's Repos" })
  ).toBeInTheDocument();
});
