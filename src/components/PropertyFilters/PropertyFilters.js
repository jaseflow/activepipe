import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import styles from './PropertyFilters.module.css';
 
function PropertyFilters(props) {
  const filters = [
    "current",
    "sold",
    "off_market"
  ]

  const filtersList = filters.map((f) =>
    <label htmlFor={f} className="checkbox" key={f}>
      <input type="checkbox" name={f} id={f} onChange={props.setFilter} />
      {f.replace('_',' ')}
    </label>
  );

  return (
    <div className={`${styles.filters} ${props.visible ? styles.visible : ''}`}>
      <div className={styles.body}>
        <button onClick={props.close} className={`icon-button ${styles.close}`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <h4 className="heading">Filter results</h4>
        <div className={styles.bottom}>
          {filtersList}
        </div>
        <button className={`btn btn--block ${styles.action}`} onClick={props.close}>Done</button>
      </div>
    </div>
  )
};

export default PropertyFilters;
