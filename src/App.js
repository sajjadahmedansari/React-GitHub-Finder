import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import User from './components/User';

const App = () => {
  const [user, setUser] = useState(null);

  const getUser = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='mainClass'>
      <h1>GitHub Finder</h1>
      <Search getUser={getUser} />
      {user && <User user={user} />}
      
    </div>
  );
};

export default App;
