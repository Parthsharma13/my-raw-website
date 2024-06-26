import Shoathome from "./shoathome";
import Shoatgym from "./shoatgym";
import "./biceps.css"
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
function Shoulders(){
    return(
  <div>
  <div>
  <ul id="option1">
    <li><Link to="/Shoathome">At Home</Link></li>
    <li><Link to="/Shoatgym">At GYM</Link></li>
    </ul>
  </div>
  <Routes>
    <Route path="/Shoathome" element={<Shoathome/>}/>
    <Route path="/Shoatgym" element={<Shoatgym/>}/>

  </Routes>
  </div>
    )
  }

export default Shoulders;