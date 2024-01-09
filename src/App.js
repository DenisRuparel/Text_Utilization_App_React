import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const notify = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    toast.success(`${message}`,{
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      notify("Switched to Dark Mode!", "Success");
    }
    
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      notify("Switched to Light Mode!", "Success");
    }
  }

  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <ToastContainer 
            alert={alert}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        <TextForm notify = {notify} heading="Enter The Text Below!" mode={mode}/>
      </div>
    </>
  );
}

export default App;
