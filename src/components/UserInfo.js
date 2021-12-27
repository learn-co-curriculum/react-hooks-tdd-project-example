import { Link } from "react-router-dom";

function UserInfo({ user }) {
  return (
    <li>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <a href={user.html_url}>GitHub Homepage</a>
      <Link to={`/users/${user.login}`}>View Details</Link>
    </li>
  );
}

export default UserInfo;
