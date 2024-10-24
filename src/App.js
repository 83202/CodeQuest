import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import Filters from './components/Filter';  
import './index.css';

function App() {
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('all');  

  const handleSearch = async (query) => {
    let url = `http://localhost:5000/api/search?q=${query}`;
    
    
    if (filter !== 'all') {
      url += `&source=${filter}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setResults([...data.stackResults, ...data.redditResults]);
  };

  return (
    <div className="App">
      <h1>Knowledge Base Search</h1>
      <Filters setFilter={setFilter} />
      <SearchBar onSearch={handleSearch} />
      <ResultList results={results} />
    </div>
  );
}

export default App;
