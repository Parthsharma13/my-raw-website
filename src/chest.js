import Chestathome from "./chestathome";
import Chestatgym from "./chestatgym";
import "./biceps.css"
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
function Chest(){
    return(
  <div>
  <div>
  <ul id="option1">
    <li><Link to="/Chestathome">At Home</Link></li>
    <li><Link to="/Chestatgym">At GYM</Link></li>
    </ul>
  </div>
  <Routes>
    <Route path="/Chestathome" element={<Chestathome/>}/>
    <Route path="/Chestatgym" element={<Chestatgym/>}/>

  </Routes>
  </div>
    )
  }

export default Chest;