import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatTitle = ({ title }) => <h2 className={style.title}>{title}</h2>;

StatTitle.protoType = {
  title: PropTypes.string,
};

export default StatTitle;
