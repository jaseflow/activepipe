import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard'

function PropertyList(props) {
  const listings = props.listings;
  const listingsList = listings.map((l) => 
    <PropertyCard
      price={l.price}
      status={l.status}
      image={l.image}
      street={l.street}
      suburb={l.suburb}
      state={l.state}
      postcode={l.postcode}
      key={l.id}
    />
  );
  return (
    <div className="PropertyList">
      {listingsList}
    </div>
  )
}

export default PropertyList;
