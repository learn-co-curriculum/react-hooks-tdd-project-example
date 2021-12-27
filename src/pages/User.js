import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RepoInfo from "../components/RepoInfo";

function User() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${username}/repos`).then((r) =>
        r.json()
      ),
    ]).then(([user, repos]) => {
      setUser({ ...user, repos });
    });
  }, [username]);

  if (!user) return <span role="alert">Loading info for {username}...</span>;

  return (
    <section>
      <h1>{username}'s Repos</h1>
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <a href={user.html_url}>GitHub Homepage</a>
      <p>{user.bio}</p>
      <p>Location: {user.location}</p>
      <a href={`mailto:${user.email}`}>{user.email}</a>
      {user.repos.length > 0 ? (
        <ul>
          {user.repos.map((repo) => (
            <RepoInfo key={repo.id} repo={repo} />
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default User;
