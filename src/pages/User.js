import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams();

  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}

export default User;