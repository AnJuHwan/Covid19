import React from 'react';

import styles from './Contents.module.css';

const Contents = ({ getcovidData }) => {
  const todayConfirm = getcovidData[4].Confirmed - getcovidData[3].Confirmed;
  return (
    <>
      <div className={styles.box}>
        <div className={styles.section}>
          <span className={styles.case}>확진자</span>
          <span className={styles.case}>사망자</span>
          <span className={styles.case}>완치자</span>
        </div>
        <div className={styles.coronaNumber}>
          <span className={styles.case}>
            {getcovidData[4].Confirmed.toLocaleString()}
          </span>
          <span className={styles.case}>
            {getcovidData[4].Deaths.toLocaleString()}
          </span>
          <span className={styles.case}>
            {getcovidData[4].Recovered.toLocaleString()}
          </span>
        </div>
      </div>

      <div className={styles.box}>
        <p className={styles.confirm}>오늘의 확진자수 </p>
        <p className={styles.confirmCase}>{todayConfirm.toLocaleString()}명</p>
      </div>
    </>
  );
};

export default Contents;
