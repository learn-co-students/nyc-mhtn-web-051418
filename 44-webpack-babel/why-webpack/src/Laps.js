import React from 'react';

const Laps = ({ laps }) => {
  return (
    <ol>
      {laps.map(lap => <li>{(lap / 1000).toFixed(2)}</li>)}
    </ol>
  )
}

export default Laps;
