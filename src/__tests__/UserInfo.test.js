import { screen } from "@testing-library/react";
import UserInfo from "../components/UserInfo";
import { renderWithRouter } from "../test-utils";

const exampleUser = {
  login: "octocat",
  id: 583231,
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  html_url: "https://github.com/octocat",
};

test("it displays all the necessary data about a GitHub user", () => {
  renderWithRouter(<UserInfo user={exampleUser} />);

  // username
  expect(
    screen.getByRole("heading", {
      name: "octocat",
    })
  ).toBeInTheDocument();

  // avatar image
  const avatarImage = screen.getByAltText(`octocat avatar`);
  expect(avatarImage).toHaveAttribute(
    "src",
    "https://avatars.githubusercontent.com/u/583231?v=4"
  );

  // HTML URL
  const githubHomepage = screen.getByRole("link", { name: /github homepage/i });
  expect(githubHomepage).toHaveAttribute("href", "https://github.com/octocat");

  // link to the detail page
  const detailLink = screen.getByRole("link", { name: /view details/i });
  expect(detailLink).toHaveAttribute("href", "/users/octocat");
});
