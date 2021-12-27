import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../test-utils";
import App from "../App";

test("renders the home page by default", () => {
  renderWithRouter(<App />);

  expect(screen.getByText(/github explorer/i)).toBeInTheDocument();
});

test("renders user page when on the /users/:username route", async () => {
  renderWithRouter(<App />, { route: "/users/octocat" });

  expect(
    await screen.findByRole("heading", {
      name: /octocat/,
      exact: false,
    })
  ).toBeInTheDocument();
});

test("clicking the user details redirects to the user page", async () => {
  renderWithRouter(<App />);

  // type the username into the search bar
  userEvent.type(screen.getByLabelText(/enter a github username/i), "octo");

  // click search
  userEvent.click(
    screen.getByRole("button", {
      name: /search/i,
    })
  );

  // see a list of user details for each user returned by the API
  expect(await screen.findByText(/octocat/i)).toBeInTheDocument();

  // link to the detail page
  const detailLink = screen.getAllByRole("link", { name: /view details/i })[0];
  expect(detailLink).toHaveAttribute("href", "/users/octocat");

  userEvent.click(detailLink);

  expect(
    await screen.findByRole("heading", { name: /octocat's repos/i })
  ).toBeInTheDocument();
});

test("displays the profile information for a single user", async () => {
  renderWithRouter(<App />, { route: "/users/octocat" });

  // username
  expect(
    await screen.findByRole("heading", {
      name: /octocat/,
      exact: false,
    })
  ).toBeInTheDocument();

  // avatar image
  const avatarImage = await screen.findByAltText(/octocat avatar/i);
  expect(avatarImage).toHaveAttribute(
    "src",
    "https://avatars.githubusercontent.com/u/583231?v=4"
  );

  // HTML URL
  const githubHomepage = await screen.findByRole("link", {
    name: /github homepage/i,
  });
  expect(githubHomepage).toHaveAttribute("href", "https://github.com/octocat");

  // bio
  expect(await screen.findByText(/github's mascot/i)).toBeInTheDocument();

  // location
  expect(await screen.findByText(/san francisco/i)).toBeInTheDocument();

  // email
  const email = await screen.findByRole("link", { name: "octocat@github.com" });
  expect(email).toHaveAttribute("href", "mailto:octocat@github.com");
});

test("displays a list of repositories for a single user", async () => {
  renderWithRouter(<App />, { route: "/users/octocat" });

  // repositories
  expect(
    await screen.findByRole("heading", {
      name: /boysenberry-repo-1/,
      exact: false,
    })
  ).toBeInTheDocument();
  expect(
    await screen.findByRole("heading", {
      name: /git-consortium/,
      exact: false,
    })
  ).toBeInTheDocument();
});
