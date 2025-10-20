import './App.css'
import CalcButton from './components/CalcButton';
import Calculator from "./components/Calculator";

function App() {
  

  return (
    <div className='container'>
      <div className='container-button'>
        <button className="active">Calculator</button>
        <button>Unit convertor</button>
      </div>
      
      <Calculator />
    </div>
  );
}

export default App
