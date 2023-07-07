
import React, { useState, useEffect } from 'react';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar'; 
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setTimeout(() => {
        setIsLoggedIn(true);
        setUserUsername('JohnDoe');
      }, 1000);
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={userUsername} />
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </div>
  );
};

export default App;

 /* function App() {
  const [username, setUsername] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <div className="App">
      <Input
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
        
      />
      <SearchBar title={searchTitle} setTitle={setSearchTitle} />

      <SelectInput
        label="Sort: "
        options={[
          { value: 'Default', label: 'Default' },
          { value: 'Latest', label: 'Latest' },
          { value: 'Oldest', label: 'Oldest' },
          { value: 'HighestRated', label: 'Highest Rated' },
          { value: 'LowestRated', label: 'Lowest Rated' },

        ]}
        multiple={false}
        className="select-input"
        value={selectedOption}
        setValue={setSelectedOption}
      />

      <Button text="Load More.." className="button" onClick={handleButtonClick} />

    </div>
  );
} 

export default App; */



/* import React from 'react';

function App() {
  return <div className="App"></div>;
}

export default App;


 */


/* import React, { useState } from 'react';
import Input from './components/general/Input';

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <Input
        label="Username"
        type="text"
        value={username}
        setValue={setUsername}
      />
    </div>
  );
}

export default App;
 */
