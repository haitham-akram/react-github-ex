import token from '../token';

const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

const getUserData = (username) => {
  return fetch(`https://api.github.com/users/${username}`, {
    headers: { authorization: `token ${token}` },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};
const getRepos = (url) => {
  return fetch(url, {
    headers: { authorization: `token ${token}` },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch Repos failed ${err}`);
    });
};

export { getUserData, getRepos };
