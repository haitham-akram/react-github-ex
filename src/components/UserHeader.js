import { getUserData } from '../utils/getUserData';
import { useEffect, useState } from 'react';
const UserHeader = ({ username }) => {
  const [data, setData] = useState('');
  useEffect(() => {
    if (username) {
      getUserData(username).then((data) => setData(data));
    }
  }, [username]);
  if (!data) {
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
  return (
    <div className="header">
      <img src={data.avatar_url} alt="user img" />
      <h3>{data.name}</h3>
      <div className="info">
        <h5>@{data.login}</h5>
        <h5>Followers: {data.followers}</h5>
      </div>
    </div>
  );
};
export default UserHeader;
