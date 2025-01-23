import React, { useState } from "react";
import './App.css';
import Child from './Child';

function App() {
  const [isVis, setVis] = useState(false);  
  const changeVis = () => {
    setVis(prev =>!prev);  
   };

  return (
    <div>
      <button onClick={changeVis}>
        {isVis ? 'скрыть' : 'показать'}
      </button>
      {isVis && <Child />}  {}
    </div>
  );
}

export default App; 