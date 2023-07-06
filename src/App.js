
import React, { useState, useEffect } from 'react';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import './App.css';



 function App() {
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

export default App; 



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
