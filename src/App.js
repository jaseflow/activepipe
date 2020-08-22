import React from 'react';
import { useAsync } from 'react-async';
import './App.css';

import AppHeader from './components/AppHeader/AppHeader';
import PropertyList from './components/PropertyList/PropertyList';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const loadListings = async () =>
  await fetch('/challenge/properties')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

function App() {
  const {data, error, isLoading } = useAsync({ promiseFn: loadListings })
  if (isLoading) return <LoadingScreen />
  if (error) return `Something went wrong ${error.message}`
  if (data)

  return (
    <div className="App">
      <AppHeader />
      <PropertyList listings={data} />
    </div>
  );
}

export default App;
