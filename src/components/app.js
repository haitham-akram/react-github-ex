import React, { useState } from 'react';
import UserHeader from './UserHeader';
import RepoList from './RepoList';
const App = () => {
  const [username, setUser] = useState('');
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setUser(event.target.value);
    }
  };
  if (username) {
    return (
      <div className="App-header">
        <input
          type="text"
          className="userInput"
          placeholder="username"
          onChange={(event) => setUser(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <UserHeader username={username} />
        <RepoList username={username} />
      </div>
    );
  } else {
    return (
      <div className="App-header">
        <input
          type="text"
          className="userInput"
          placeholder="username"
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }
};

export default App;
