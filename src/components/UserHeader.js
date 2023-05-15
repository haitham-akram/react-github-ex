import { getUserData } from '../utils/getUserData';
import { useEffect, useState } from 'react';
const UserHeader = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const username = 'haitham-akram';
    getUserData(username).then((data) => setData(data));
  }, []);
  if (!data) {
    return <h3>...Loading</h3>;
  }
  return (
    <div className="header">
      <img src={data.avatar_url} alt="user img" />
      <div className="info">
        <h5>{data.login}</h5>
        <h5>Followers: {data.followers}</h5>
      </div>
    </div>
  );
};
export default UserHeader;
