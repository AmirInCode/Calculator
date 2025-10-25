import { useState } from 'react';
import './App.css'
import Calculator from "./components/Calculator";

function App() {
  const [mode, setMode] = useState("calculator");

  return (
    <div className='container'>
      <div className='container-button'>

        <button className={mode === 'calculator'? 'active': ''} 
          onClick={()=>{setMode('calculator')}} >
          Calculator
        </button>

        <button className={mode === 'unit'? 'active': ''} onClick={()=>{setMode('unit')}}>
          Unit convertor
        </button>
      </div>
      
      <Calculator mode={mode} />
    </div>
  );
}

export default App
