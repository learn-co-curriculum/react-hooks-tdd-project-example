import { rest } from "msw";

export const handlers = [
  rest.get("https://api.github.com/search/users?q=octo", (req, res, ctx) => {
    return res(
      ctx.json({
        total_count: 5058,
        incomplete_results: false,
        items: [
          {
            login: "octocat",
            id: 583231,
            node_id: "MDQ6VXNlcjU4MzIzMQ==",
            avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/octocat",
            html_url: "https://github.com/octocat",
            followers_url: "https://api.github.com/users/octocat/followers",
            following_url:
              "https://api.github.com/users/octocat/following{/other_user}",
            gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/octocat/subscriptions",
            organizations_url: "https://api.github.com/users/octocat/orgs",
            repos_url: "https://api.github.com/users/octocat/repos",
            events_url: "https://api.github.com/users/octocat/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/octocat/received_events",
            type: "User",
            site_admin: false,
            score: 1.0,
          },
          {
            login: "octonion",
            id: 521890,
            node_id: "MDQ6VXNlcjUyMTg5MA==",
            avatar_url: "https://avatars.githubusercontent.com/u/521890?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/octonion",
            html_url: "https://github.com/octonion",
            followers_url: "https://api.github.com/users/octonion/followers",
            following_url:
              "https://api.github.com/users/octonion/following{/other_user}",
            gists_url: "https://api.github.com/users/octonion/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/octonion/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/octonion/subscriptions",
            organizations_url: "https://api.github.com/users/octonion/orgs",
            repos_url: "https://api.github.com/users/octonion/repos",
            events_url:
              "https://api.github.com/users/octonion/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/octonion/received_events",
            type: "User",
            site_admin: false,
            score: 1.0,
          },
        ],
      })
    );
  }),
];
