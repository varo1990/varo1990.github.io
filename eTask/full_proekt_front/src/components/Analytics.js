import React from 'react';
import data from "../data/data";

function Analytics(props) {

  const config = {
    type: 'doughnut',
    data: data,
  };
  return (
    <div>
      <div className="palette">
      <div className="color1">1</div>
      <div className="color2">2</div>
      <div className="color3">3</div>
      <div className="color4">4</div>
      <div className="color5">6</div>
      <div className="color6">6</div>
    </div>


    </div>



  );
}

export default Analytics;