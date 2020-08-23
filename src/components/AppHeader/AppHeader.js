import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

import styles from './AppHeader.module.css'
import logo from '../../logo.png';

function AppHeader(props) {
  return (
    <div className={styles.header}>
      <img src={logo} alt="ActivePipe" className={styles.logo} />
      <FontAwesomeIcon icon={faFilter} onClick={props.toggleFilters} />
    </div>
  )
}

export default AppHeader;
