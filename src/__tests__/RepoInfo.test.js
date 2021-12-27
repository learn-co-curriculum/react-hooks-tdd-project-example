import { render, screen } from "@testing-library/react";
import RepoInfo from "../components/RepoInfo";

const exampleRepo = {
  id: 132935648,
  name: "boysenberry-repo-1",
  html_url: "https://github.com/octocat/boysenberry-repo-1",
  description: "Testing",
};

test("it displays all the necessary data about a GitHub user", () => {
  render(<RepoInfo repo={exampleRepo} />);

  // username
  expect(
    screen.getByRole("heading", {
      name: "boysenberry-repo-1",
    })
  ).toBeInTheDocument();

  // description
  expect(screen.getByText("Testing")).toBeInTheDocument();

  // HTML URL
  const githubPage = screen.getByRole("link", { name: /github page/i });
  expect(githubPage).toHaveAttribute(
    "href",
    "https://github.com/octocat/boysenberry-repo-1"
  );
});
