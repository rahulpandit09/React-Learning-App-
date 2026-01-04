import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';


function App() {
  const[mode, setMode] = useState('light'); //whether dark mode enable or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#042743'
    }else{
      setMode ('light')
       document.body.style.background = 'white'
    }
    
  }
  return (
    <>
      <Navbar title="TestUtils" aboutText="About TestUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm  heading="Enter the Text to analyze Below " mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
