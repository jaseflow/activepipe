import React from 'react';
import styles from './ErrorMessage.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons'

function ErrorMessage(props) {
  return (
    <div className={styles.box}>
      <p>
        <FontAwesomeIcon icon={faFrownOpen} className={styles.face} />
        Uh-oh&hellip; it looks like some things haven't loaded correctly
      </p>
      <div className={styles.action}>
        <button className="icon-button">
          <FontAwesomeIcon icon={faSyncAlt} onClick={props.reload} />
        </button>
      </div>
    </div>
  )
}

export default ErrorMessage;
