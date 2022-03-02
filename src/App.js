// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import './Component/Main.css';
// import Player from './Component/Player';
import News from './Component/News';
import NavBar from './Component/NavBar';
// import Sidebar from './Component/Sidebar';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0)
    const setProgress1 =(progress1)=>{
      setProgress(progress1)
    }
  return (
       <Router>
       <NavBar />
       <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress1()}
      />
       <Switch>
       <Route exact path="/"><News setProgress1={setProgress1} key="logo"  pagesize="5" country="in" category="general"/></Route>        
            {/* <Route exact path="/home"><News setProgress1={setProgress1} key="home"  pagesize="5" country="in" category="general"/></Route>         */}
            <Route exact path="/general"><News setProgress1={setProgress1} key="general"  pagesize="5" country="in" category="general"/></Route>           
            <Route exact path="/business"><News setProgress1={setProgress1} key="business"  pagesize="5" country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress1={setProgress1} key="entertainment"  pagesize="5" country="in" category="entertainment"/></Route>
            <Route exact path="/healthscience"><News setProgress1={setProgress1} key="healthscience"  pagesize="5" country="in" category="healthscience"/></Route>
            <Route exact path="/sports"><News setProgress1={setProgress1} key="sports"  pagesize="5" country="in" category="sports"/> </Route>
            <Route exact path="/technology"><News setProgress1={setProgress1} key="technology"  pagesize="5" country="in" category="technology"/></Route>          
        </Switch>
    </Router>
   
  );
}

export default App;
