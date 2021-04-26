import React from 'react';

const StatItem = ({ stat }) => {
  const { label, percentage } = stat;

  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};

export default StatItem;
