import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';
import Alert from './components/Alert.jsx';



function App() {
const [mode, setMode] = useState("light");
const [alert, setAlert] = useState(null);
const showAlert = (massage, type)=>{
    setAlert({
      msg:massage,
      type:type,
    });
}

// Dark and light switch mode event;
const toggleMode = ()=>{
  if (mode==='light') {
    setMode("dark");
    document.body.style.backgroundColor = "#010824";
    showAlert("Dark mode has enabled.", "success") //switch dark mode;
  }else{
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("Light has enabled.", "success");//switch light mode;
  }
}
  return (
    <>
      <Navbar navTitle="Navbar" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert showAlert={showAlert} alert={alert}/>
      <div className="container">
        <TextForm mode={mode}/>
      </div>
    </>
  )
}

export default App

