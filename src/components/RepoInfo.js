function RepoInfo({ repo }) {
  return (
    <li>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <a href={repo.html_url}>GitHub page</a>
    </li>
  );
}

export default RepoInfo;
