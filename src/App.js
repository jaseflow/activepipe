import React, { useState, useEffect } from 'react';
import './App.css';

import AppHeader from './components/AppHeader/AppHeader';
import PropertyList from './components/PropertyList/PropertyList';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import PropertyFilters from './components/PropertyFilters/PropertyFilters';

function App() {
  const [listings, setListings] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleToggleFilters() {
    setFiltersVisible(visibility => !visibility)
  }

  function handleCloseFilters() {
    setFiltersVisible(false)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/challenge/properties');
        const data = await response.json();
        setListings(d => data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (loading) return <LoadingScreen />
  if (error) return `Something went wrong ${error.message}`
  if (listings)

  return (
    <div className="App">
      <AppHeader toggleFilters={handleToggleFilters} />
      <PropertyFilters close={handleCloseFilters} visible={filtersVisible} />
      <div className="App__body">
        <PropertyList listings={listings} />
      </div>
    </div>
  );
};

export default App;
