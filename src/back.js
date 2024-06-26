import Backathome from "./backathome";
import Backatgym from "./backatgym";
import "./biceps.css"
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
function Back(){
    return(
  <div>
  <div>
  <ul id="option1">
    <li><Link to="/Backathome">At Home</Link></li>
    <li><Link to="/Backatgym">At GYM</Link></li>
    </ul>
  </div>
  <Routes>
    <Route path="/Backathome" element={<Backathome/>}/>
    <Route path="/Backatgym" element={<Backatgym/>}/>

  </Routes>
  </div>
    )
  }

export default Back;