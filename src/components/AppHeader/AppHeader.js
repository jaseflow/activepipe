import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

import styles from './AppHeader.module.css'
import logo from '../../logo.png';

function AppHeader(props) {
  return (
    <div className={styles.header}>
      <img src={logo} alt="ActivePipe" className={styles.logo} />
      <button className={styles.filter}>
        <FontAwesomeIcon icon={faFilter} onClick={props.toggleFilters} />
        {props.filterCount > 0 &&
          <i className={styles.filterCount}>{props.filterCount}</i>
        }
      </button>
    </div>
  )
}

export default AppHeader;
