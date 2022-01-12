import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RepoInfo from "./RepoInfo";

function User() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // The GitHub API doesn't provide all the user and repo data from one endpoint, 
    // so we need two requests to get all the necessary data.

    // This could be written more optimally using Promise.all and one state variable, 
    // but we haven't introduced students to those patterns
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then(user => setUser(user))

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((r) => r.json())
      .then(repos => setRepos(repos))
  }, [username]);

  if (!user || repos.length === 0) {
    return <span role="alert">Loading info for {username}...</span>
  }

  return (
    <section>
      <h1>{username}'s Repos</h1>
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <a href={user.html_url}>GitHub Homepage</a>
      <p>{user.bio}</p>
      <p>Location: {user.location}</p>
      <a href={`mailto:${user.email}`}>{user.email}</a>
      <ul>
        {repos.map((repo) => (
          <RepoInfo key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>
  );
}

export default User;
