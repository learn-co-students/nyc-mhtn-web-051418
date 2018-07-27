import React from 'react';

const Clock = ({ milliseconds }) => {
  return (
    <h1>{(milliseconds / 1000).toFixed(2)}</h1>
  )
}

export default Clock;
