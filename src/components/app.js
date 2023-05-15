import React, { useState } from 'react';
import UserHeader from './UserHeader';
import RepoList from './RepoList';
const App = () => {
  const [username, setUser] = useState('');
  const onChange = (e) => {
    setUser((pre) => (pre = e.target.value));
  };
  return (
    <div className="App-header">
      <input
        type="text"
        value={username}
        onChange={(e) => onChange(e)}
        placeholder="username"
      />
      <UserHeader username={username} />
      <RepoList username={username} />
    </div>
  );
};

export default App;
