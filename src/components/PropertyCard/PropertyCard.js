import React from 'react';

import styles from './PropertyCard.module.css'

function PropertyCard(props) {
  let statusClass;
  if (props.status === 'current') {
    statusClass = styles.statusCurrent
  } else if (props.status === 'sold') {
    statusClass = styles.statusSold
  } else if (props.status === 'off_market') {
    statusClass = styles.statusOffMarket
  }
  return (
    <div className={`${styles.card} Card`}>
      <header class={styles.header}>
        {props.price}
        <div className={styles.status}>
          <i className={`${styles.statusIcon} ${statusClass}`}></i>
          <span className={styles.statusText}>{props.status.replace('_',' ')}</span>
        </div>
      </header>
      <figure className={styles.figure}>
        <img src={props.image} alt="View from the street" className={styles.img} />
      </figure>
      <div className={styles.body}>
        <address>
          {props.street} <br/>
          {props.suburb} <br/>
          {props.state} {props.postcode}
        </address>
      </div>
    </div>
  )
}

export default PropertyCard;
