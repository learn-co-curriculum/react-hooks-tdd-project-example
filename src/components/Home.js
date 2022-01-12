import { useState } from "react";
import UserInfo from "../components/UserInfo";

function Home() {
  const [usernameInput, setUsernameInput] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${usernameInput}`)
      .then((r) => r.json())
      .then((data) => setUsers(data.items));
  }

  return (
    <div>
      <h1>GitHub Explorer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username-input">Enter a GitHub Username:</label>
        <input
          type="text"
          id="username-input"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <UserInfo key={user.login} user={user} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Home;
