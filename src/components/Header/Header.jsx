import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>COVID-19</h1>
      <select className={styles.select}>
        <option>국내</option>
        <option>세계</option>
      </select>
    </div>
  );
};

export default Header;
