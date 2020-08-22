import React from 'react';

function PropertyCard(props) {
  return (
    <div className="PropertyCard">
      <header>
        {props.price}
      </header>
      <figure>
        <img src={props.image} />
      </figure>
      <address>
        {props.street} <br/>
        {props.suburb} <br/>
        {props.state} {props.postcode}
      </address>
    </div>
  )
}

export default PropertyCard;
