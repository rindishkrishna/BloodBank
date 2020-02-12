import './chart.scss';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

function Charting() {
  const canvasRef = useRef();
  useEffect(() => {
    new Chart(canvasRef.current.getContext('2d'), {
      type: 'pie',
      data: {
        //Bring in data
        labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        datasets: [
          {
            backgroundColor: [
              '#fa7f70',
              '#f8433f',
              '#7b1d1b',
              '#ef403d',
              '#ce5c5c',
              '#c33230',
              '#e1455e',
              '#b22d2b',
            ],
            label: 'Sales',
            data: [86, 67, 91, 45, 55, 88, 25, 66],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  }, []);

  return (
    <div id="chdiv">
      <canvas id="blchart" ref={canvasRef} />
    </div>
  );
}

export default Charting;
