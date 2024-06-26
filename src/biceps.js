// import { Link } from "react-router-dom";
import Biathome from "./biathome";
import Biatgym from "./biatgym";
import "./biceps.css"
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
function Biceps(){
    return(
       <div>
        <div>
        <ul id="option1">
          <li><Link to="/Biathome">At Home</Link></li>
          <li><Link to="/Biatgym">At GYM</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/Biathome" element={<Biathome/>}/>
          <Route path="/Biatgym" element={<Biatgym/>}/>
          {/* <Route path="/Triceps" element={<Triceps/>}/> */}
          

        </Routes>
        </div>
    )
}

export default Biceps;