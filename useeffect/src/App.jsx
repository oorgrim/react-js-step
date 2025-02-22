import React, { useState, useEffect } from 'react';
import Children from './Children';
import './App.css';

const App = () => {
    const [state, setState] = useState(false)
    const [clicks, setClicks] = useState(0)

    const onClickHandler = () => {
        setState((currentState) => !currentState)
    }
    const incrClicks = () => {
        setClicks(clicks+1)
    }
    return (
        <div className='App-container'>
            <button onClick={onClickHandler} className='switchBTN'>switch</button>
            <button onClick={incrClicks} className='clickBTN'>click me</button>
            <p>количество кликов: {clicks}</p>

            {state && <Children />}
            <Clock />
        </div>
    )
}
const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // toLocaleTimestring я загуглила тк помнила только toLocaleString с датой, но я хотела только время, а еще 1000 это в мс 1000=1секунда
  useEffect(() => {
      const interval = setInterval(()=>setTime(new Date().toLocaleTimeString()), 1000);
      return () => clearInterval(interval)
  }, [])

  return <p>время сейчвас: {time}</p>
};


export default App;