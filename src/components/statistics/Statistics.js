import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={style.section}>
    {title && <h2 className={style.title}>{title}</h2>}

    <ul className={style.list}>
      {stats.map(({ id, label, percentage }) => (
        <li className={style.listItem} key={id}>
          <span className={style.label}>{label}</span>
          <span className={style.value}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};
