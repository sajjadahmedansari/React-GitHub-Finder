import React from 'react';

const User = ({ user }) => {
  const { avatar_url, name, bio, followers, following, public_repos } = user;

  return (
    <div>
      <img src={avatar_url} alt="User Avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
      <ul>
        <li>Followers: {followers}</li>
        <li>Following: {following}</li>
        <li>Public Repositories: {public_repos}</li>
      </ul>
    </div>
  );
};

export default User;
