import Foreathome from "./foreathome";
import Foreatgym from "./foreatgym";
import "./biceps.css"
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
function Forearms(){
    return(
  <div>
  <div>
  <ul id="option1">
    <li><Link to="/Foreathome">At Home</Link></li>
    <li><Link to="/Foreatgym">At GYM</Link></li>
    </ul>
  </div>
  <Routes>
    <Route path="/Foreathome" element={<Foreathome/>}/>
    <Route path="/Foreatgym" element={<Foreatgym/>}/>

  </Routes>
  </div>
    )
  }

export default Forearms;