import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const[mode, setMode] = useState('light'); //whether dark mode enable or not
  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#042743'
      showAlert('dark mode has been enable', 'success')
    }else{
      setMode ('light')
       document.body.style.background = 'white'
       showAlert('Light mode has been enable', 'success')
    }
    
  }
  return (
    <>
      <Navbar title="TestUtils" aboutText="About TestUtils" mode={mode} toggleMode={toggleMode} />
      <Alert Alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the Text to analyze Below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
