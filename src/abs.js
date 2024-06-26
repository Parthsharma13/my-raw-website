import Absathome from "./absathome";
import Absatgym from "./absatgym";
import "./biceps.css"
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
function Abs(){
    return(
  <div>
  <div>
  <ul id="option1">
    <li><Link to="/Absathome">At Home</Link></li>
    <li><Link to="/Absatgym">At GYM</Link></li>
    </ul>
  </div>
  <Routes>
    <Route path="/Absathome" element={<Absathome/>}/>
    <Route path="/Absatgym" element={<Absatgym/>}/>

  </Routes>
  </div>
    )
  }

export default Abs;