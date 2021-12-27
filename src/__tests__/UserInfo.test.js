import { screen } from "@testing-library/react";
import UserInfo from "../components/UserInfo";
import { renderWithRouter } from "../test-utils";

const exampleUser = {
  login: "octocat",
  id: 583231,
  node_id: "MDQ6VXNlcjU4MzIzMQ==",
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/octocat",
  html_url: "https://github.com/octocat",
  followers_url: "https://api.github.com/users/octocat/followers",
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  repos_url: "https://api.github.com/users/octocat/repos",
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  received_events_url: "https://api.github.com/users/octocat/received_events",
  type: "User",
  site_admin: false,
  score: 1.0,
};

test("it displays all the necessary data about a GitHub user", () => {
  renderWithRouter(<UserInfo user={exampleUser} />);

  // username
  expect(
    screen.getByRole("heading", {
      name: exampleUser.login,
    })
  ).toBeInTheDocument();

  // avatar image
  const avatarImage = screen.getByAltText(`${exampleUser.login} avatar`);
  expect(avatarImage).toHaveAttribute("src", exampleUser.avatar_url);

  // HTML URL
  const githubHomepage = screen.getByRole("link", { name: /github homepage/i });
  expect(githubHomepage).toHaveAttribute("href", exampleUser.html_url);

  // link to the detail page
  const detailLink = screen.getByRole("link", { name: /view details/i });
  expect(detailLink).toHaveAttribute("href", `/users/${exampleUser.login}`);
});
