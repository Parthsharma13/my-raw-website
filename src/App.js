import logo from './logo.svg';
import './App.css';
import Biceps from './biceps';
import Biatgym from './biatgym';
import Triatgym from './triatgym';
import Triceps from './triceps';
import Abs from './abs';
import Back from './back';
import Legs from './legs';
import Chest from './chest';
import Shoulders from './shoulders';
import Forearms from './forearms';
import Biathome from './biathome';
import Triathome from './triathome';
import Shoathome from './shoathome';
import Foreathome from './foreathome';
import Foreatgym from './foreatgym';
import Chestathome from './chestathome';
import Chestatgym from './chestatgym';
import Backathome from './backathome';
import Backatgym from './backatgym';
import Absathome from './absathome';
import Absatgym from './absatgym';
// import Absathome from './absathome';
import Legsathome from './legsathome'
import Legsatgym from './legsatgym';
// import Legsathome from './legsathome';
// import Triatgym from './triatgym';
import Shoatgym from './shoatgym';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
        <Router>

    {/* <div className="App"> */}
     
      {/* <div> */}
      <div>
      <nav>
        <div id="logo"> <img src={require('./images/rawlogo1.png')} alt='Raw Logo' style={{ width: '450px', marginTop: '23px' }} /></div>
      </nav>
      <article>Dive into a world of targeted workouts designed for every muscle group. Whether you’re aiming to sculpt, tone, or boost your overall fitness, RAW provides expert-approved exercises to help you reach your goals. Explore our diverse range of exercises and discover the perfect workout for you. Let’s get moving and transform your fitness journey, one exercise at a time!</article>
      <main>
        <ul id="option">
          <li><Link to="/Biceps">BICEPS</Link></li>
          <li><Link to="/Triceps">TRICEPS</Link></li>
          <li><Link to="/Forearms">FOREARMS</Link></li>
          <li><Link to="/Shoulders">SHOULDERS</Link></li>
          <li><Link to="/Chest">CHEST</Link></li>
          <li><Link to="/Abs">ABS</Link></li>
          <li><Link to="/Back">BACK</Link></li>
          <li><Link to="/Legs">LEGS</Link></li>
        </ul>
    </main>
        
              {/* <Link to="/Biceps">Biceps</Link> */}
          
        <Routes>
          <Route path="/Biceps/*" element={<Biceps/>}/>
          <Route path="/Biathome" element={<Biathome/>}/>
          <Route path="/Biatgym" element={<Biatgym/>}/>
          <Route path="/Triceps" element={<Triceps/>}/>
          <Route path="/Triatgym" element={<Triatgym/>}/>
          <Route path="/Triathome" element={<Triathome/>}/>
          <Route path="/Shoulders" element={<Shoulders/>}/>
          <Route path="/Shoathome" element={<Shoathome/>}/>
          <Route path="/Shoatgym" element={<Shoatgym/>}/>
          <Route path="/Forearms" element={<Forearms/>}/>
          <Route path="/Foreathome" element={<Foreathome/>}/> 
          <Route path="/Foreatgym" element={<Foreatgym/>}/> 
          <Route path="/Chest" element={<Chest/>}/>
          <Route path="/Chestathome" element={<Chestathome/>}/>
          <Route path="/Chestatgym" element={<Chestatgym/>}/>
          <Route path="/Abs" element={<Abs/>}/>
          <Route path="/Absathome" element={<Absathome/>}/>
          <Route path="/Absatgym" element={<Absatgym/>}/>
          <Route path="/Back" element={<Back/>}/>
          <Route path="/Backathome" element={<Backathome/>}/>
          <Route path="/Backatgym" element={<Backatgym/>}/>
          <Route path="/Legs" element={<Legs/>}/>
          <Route path="/Legsathome" element={<Legsathome/>}/>
          <Route path="/Legsatgym" element={<Legsatgym/>}/>

        </Routes>
      </div>
    {/* // </div> */}
    </Router>
  );
}

export default App;
