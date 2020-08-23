import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard'

import styles from './PropertyList.module.css'

function PropertyList(props) {
  const listings = props.listings;
  const listingsList = listings.length && listings.map((l) => 
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
    <div className={styles.list}>
      {listingsList}
    </div>
  )
}

export default PropertyList;
