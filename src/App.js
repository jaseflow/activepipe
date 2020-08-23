import React, { useState, useEffect } from 'react';
import './App.css';

import AppHeader from './components/AppHeader/AppHeader';
import PropertyList from './components/PropertyList/PropertyList';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import PropertyFilters from './components/PropertyFilters/PropertyFilters';

function App() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleToggleFilters() {
    setFiltersVisible(visibility => !visibility)
  }

  function handleCloseFilters() {
    setFiltersVisible(false)
  }

  function handleSetFilter(e) {
    const selectedFilter = e.target.name
    if (e.target.checked) {
      setFilters(filters => [...filters, selectedFilter])
    } else {
      setFilters(filters => filters.filter((f) => {
        return f !== selectedFilter
      }))
    }
  }

  // Fetch data
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

  // Watch filters and apply changes to filteredListings
  useEffect(() => {
    if(!filters.length) {
      setFilteredListings(listings)
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      setFilteredListings(filteredListings => listings.filter(item => filters.includes(item.status)))
    }
  }, [filters, listings]);

  if (loading) return <LoadingScreen />
  if (error) return `Something went wrong ${error.message}`
  if (listings)

  return (
    <div className="App">
      <AppHeader toggleFilters={handleToggleFilters} filterCount={filters.length} />
      <PropertyFilters close={handleCloseFilters} visible={filtersVisible} setFilter={handleSetFilter}/>
      <div className="App__body">
        <PropertyList listings={filteredListings} />
      </div>
    </div>
  );
};

export default App;
