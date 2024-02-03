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
    setTimeout(() => {
      setAlert(null);
    }, 3000);
}

const bodyBgRemove = ()=>{
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-ligth');
  document.body.classList.remove('bg-dark');
}
// Dark and light switch mode event;
const toggleMode = (cls)=>{
  bodyBgRemove()
  // console.log(cls);
  // console.log(toggleMode);
  document.body.classList.add('bg-' + cls)

  if (mode==='light') {
    setMode("dark");
    document.body.classList.backgroundColor = "#010824";
    document.navLink.classList.color = "light";
    showAlert("Dark mode has enabled.", "success") //switch dark mode;
  }else{
    setMode("light");
    document.body.classList.backgroundColor = "white";
    showAlert("Light has enabled.", "success");//switch light mode;
  }
} 
  return (
    <>
      <Navbar navTitle="Navbar" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert showAlert={showAlert} alert={alert}/>
      <div className="container">
        <TextForm mode={mode} showAlert={showAlert} textFormTitle="Text utiles for making text uppercase to lowercase, extra space remove, text copy, text clear"/>
      </div>
    </>
  )
} 

export default App

