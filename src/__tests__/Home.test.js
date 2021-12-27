import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages/Home";

test("a user can search the GitHub API for a list of users", async () => {
  render(<Home />);

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
  expect(await screen.findByText(/octonion/i)).toBeInTheDocument();
});
