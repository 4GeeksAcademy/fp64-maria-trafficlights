import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Semaforo = () => {
  const [color, setColor] = useState('red');
  const [intervalId, setIntervalId] = useState(null);

  const setPurple = () => {
	setColor('purple');
	const id = setTimeout(() =>{
		setGreen();
	}, 1000); 
  }  
  const setGreen = () => {
    setColor('green');
	const id = setTimeout(() => {
		setYellow();
	  }, 1000);
	  setIntervalId(id);
	};

  const setYellow = () => {
    setColor('yellow');
    const id = setTimeout(() => {
      setRed();
    }, 1000); 
	setIntervalId(id)
  };
 
  const setRed = () => {
    setColor('red');
    const id = setTimeout(() => {
      setPurple();
    }, 1000); 
	setIntervalId(id)
  };

  useEffect(() => {
    setPurple();
  }, []);

  const stopInterval = () => {
    clearInterval(intervalId);
  };

  return (
    <div className="text-center">
      <div
        style={{
          backgroundColor: color === 'red' ? 'red' : 'black',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '10px auto',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
      ></div>
      <div
        style={{
          backgroundColor: color === 'yellow' ? 'yellow' : 'black',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '10px auto',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
      ></div>
      <div
        style={{
          backgroundColor: color === 'green' ? 'green' : 'black',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '10px auto',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
      ></div>
	  <div
        style={{
          backgroundColor: color === 'purple' ? 'purple' : 'black',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '10px auto',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
      ></div>

	  <button className="btn btn-danger" onClick={stopInterval}>Parar el semáforo</button>
    </div>
  );
}


export default Semaforo;