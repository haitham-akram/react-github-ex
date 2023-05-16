import { getUserData, getRepos } from '../utils/getUserData';
import { useEffect, useState } from 'react';
const RepoList = ({ username }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (username) {
      getUserData(username).then((data) =>
        getRepos(data.repos_url).then((data) => setData(data))
      );
    }
  }, [username]);
  if (data.length !== 0) {
    const repos = data.map((repo) => (
      <div className="repo" key={repo.id}>
        <a href={repo.url}>{repo.name}</a>
        <p>Stars: {repo.stargazers_count}</p>
        <p>{repo.description}</p>
      </div>
    ));
    return (
      <>
        <h3>repos: {repos.length} </h3>

        <div className="repos">{repos}</div>
      </>
    );
  } else {
    return (
      <section className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    );
  }
};
export default RepoList;
