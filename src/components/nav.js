import { useContext } from "react";
import { ThemeContext } from "../App";
import ReactSwitch from "react-switch";



const Navheader = () => {
   // const { ThemeContext, toggleTheme } = useContext(ThemeContext);
const {theme,toggleTheme}=useContext(ThemeContext);
    return (
 

  
   <div >    
 <nav class="navbar navbar-expand-sm navbar-cl fixed-top ">
  <div class="container-md">
    <a class="navbar-brand" href="#"><span className={`navbar ${theme}`}>  
   <ReactSwitch
    onChange={toggleTheme}
    />

  </span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
 </div>
    );
}

export default Navheader;
