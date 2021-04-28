import React from 'react';
import style from './Statistics.module.css';

const StatItem = ({ label, percentage }) => (
  <>
    <span className={style.label}>{label}</span>
    <span className={style.value}>{percentage}%</span>
  </>
);

export default StatItem;
