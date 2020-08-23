import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import styles from './PropertyFilters.module.css';
 
function PropertyFilters(props) {
  return (
    <div className={`${styles.filters} ${props.visible ? styles.visible : ''}`}>
      <div className={styles.body}>
        <button onClick={props.close} className={styles.close}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <h4 className="heading">Filter results</h4>
        <div className={styles.bottom}>
          <label htmlFor="current" className="checkbox">
            <input type="checkbox" id="current" onChange={props.applyFilter} />
            Current
          </label>
          <label htmlFor="sold" className="checkbox">
            <input type="checkbox" id="sold" />
            Sold
          </label>
          <label htmlFor="off-market" className="checkbox">
            <input type="checkbox" id="off-market" />
            Off market
          </label>
        </div>
        <button className={`btn btn--block ${styles.action}`}>Apply filters</button>
      </div>
    </div>
  )
};

export default PropertyFilters;
