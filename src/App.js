
import { useState } from 'react';
import './App.css';
/* import About from './components/About'; */
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
/* import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom"; */


function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
       msg:message,
        type:type
            })
            setTimeout(()=>{
              setAlert(null);
            
            },2000) 

  }
  const toggleMode=()=>
  {
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
    }
  }
  return (
<>


{/* <Router> */}
<Navbar title="TexTools" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>

<div className="container my-3" >
{/* <Routes> */}
{/* <Route path="/" exact element={ */}
<Textform mode={mode} showAlert={showAlert} />

          
         
{/* <Route path="/About" element={ <About mode={mode} />} /> */}
           
          

         
{/* </Routes> */}
     
</div>  


{/* </Router> */}

</>
  );
}

export default App;
