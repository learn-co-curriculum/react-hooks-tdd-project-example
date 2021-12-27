import { rest } from "msw";

export const handlers = [
  rest.get("https://api.github.com/search/users", (req, res, ctx) => {
    return res(
      ctx.json({
        total_count: 5058,
        incomplete_results: false,
        items: [
          {
            login: "octocat",
            id: 583231,
            avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
            html_url: "https://github.com/octocat",
          },
          {
            login: "octonion",
            id: 521890,
            avatar_url: "https://avatars.githubusercontent.com/u/521890?v=4",
            html_url: "https://github.com/octonion",
          },
        ],
      })
    );
  }),
  rest.get("https://api.github.com/users/octocat", (req, res, ctx) => {
    return res(
      ctx.json({
        login: "octocat",
        id: 583231,
        avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
        html_url: "https://github.com/octocat",
        company: "@github",
        location: "San Francisco",
        email: "octocat@github.com",
        bio: "GitHub's mascot",
      })
    );
  }),
  rest.get("https://api.github.com/users/octocat/repos", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 132935648,
          name: "boysenberry-repo-1",
          html_url: "https://github.com/octocat/boysenberry-repo-1",
          description: "Testing",
        },
        {
          id: 18221276,
          name: "git-consortium",
          html_url: "https://github.com/octocat/git-consortium",
          description: "This repo is for demonstration purposes only.",
        },
      ])
    );
  }),
];
