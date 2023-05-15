import { getUserData, getRepos } from '../utils/getUserData';
import { useEffect, useState } from 'react';
const RepoList = ({ username }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // const username = 'haitham-akram';
    getUserData(username).then((data) =>
      getRepos(data.repos_url).then((data) => setData(data))
    );
  }, [data, username]);
  if (data.length !== 0) {
    const repos = data.map((repo) => (
      <div className="repo" key={repo.id}>
        <a href={repo.url}>{repo.name}</a>
        <p>Stars: {repo.stargazers_count}</p>
        <p>{repo.description}</p>
      </div>
    ));
    return <div className="repos">{repos}</div>;
  } else {
    return <h3>...Loading</h3>;
  }
};
export default RepoList;
