import Legsathome from "./legsathome";
import Legsatgym from "./legsatgym";
import "./biceps.css"
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
function Legs(){
    return(
  <div>
  <div>
  <ul id="option1">
    <li><Link to="/Legsathome">At Home</Link></li>
    <li><Link to="/Legsatgym">At GYM</Link></li>
    </ul>
  </div>
  <Routes>
    <Route path="/Legsathome" element={<Legsathome/>}/>
    <Route path="/Legsatgym" element={<Legsatgym/>}/>

  </Routes>
  </div>
    )
  }

export default Legs;