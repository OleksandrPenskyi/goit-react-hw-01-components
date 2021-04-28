import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatItem = ({ label, percentage }) => (
  <>
    <span className={style.label}>{label}</span>
    <span className={style.value}>{percentage}%</span>
  </>
);

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;
