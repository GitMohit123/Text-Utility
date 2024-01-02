// import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Alert from './Component/Alert';
//import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"


function App() {

  const[mode,setMode] = useState('light')
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0f1721'
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Switched to Light mode", "success");
    }
  }
  return (
    <>
    {/* Addded first component as Navbar */}
    <Navbar title="Textutils2" aboutText= "About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text in here" mode={mode}/> } />
        <Route path="/about" element={ <About mode={mode} /> } />
      </Routes>      
    </div>
    </>
    );
}

export default App;
