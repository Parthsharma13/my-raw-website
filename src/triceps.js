import Triathome from "./triathome";
import "./biceps.css"
import Triatgym from "./triatgym";
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
function Triceps(){
  return(
     <div>
      <div>
      <ul id="option1">
        <li><Link to="/Triathome">At Home</Link></li>
        <li><Link to="/Triatgym">At GYM</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/Triathome" element={<Triathome/>}/>
        <Route path="/Triatgym" element={<Triatgym/>}/>

      </Routes>
      </div>
  )
}

export default Triceps;