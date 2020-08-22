import React from 'react';
import { useAsync } from 'react-async';
import './App.css';

import PropertyList from './components/PropertyList/PropertyList';

const loadListings = async () =>
  await fetch('/challenge/properties')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

function App() {
  const {data, error, isLoading } = useAsync({ promiseFn: loadListings })
  if (isLoading) return "Loading..."
  if (error) return `Something went wrong ${error.message}`
  if (data)

  return (
    <div className="App">
      <PropertyList listings={data} />
    </div>
  );
}

export default App;
