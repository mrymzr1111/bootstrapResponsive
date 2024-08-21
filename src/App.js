

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'; // for Bootstrap JavaScript
import { createContext, useState } from 'react';

import Reviews from './components/reviews';
import Navheader from './components/nav';
import ReactSwitch from 'react-switch';


export const ThemeContext=createContext("null");


function App() {
 

const [theme,setTheme]=useState("light");
const toggleTheme =()=>{
setTheme((curr)=>(curr==="light"?"dark":"light"));


};

  return (

   
     <ThemeContext.Provider value={{theme,toggleTheme}}>
 
    <div className='main' id={theme}>
   
  
<Navheader/>
<Reviews/>
     <main>
    
  
    

   
  
     </main>
  
     </div>
    

 
    </ThemeContext.Provider>

  );

}


export default App;
