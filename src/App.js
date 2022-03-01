// import logo from './logo.svg';
import './App.css';
import './Component/Main.css';
// import Player from './Component/Player';
import News from './Component/News';
import NavBar from './Component/NavBar';
// import Sidebar from './Component/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  return (
       <Router>
       <NavBar />
       <Switch>
       <Route exact path="/"><News key="logo"  pagesize="5" country="in" category="general"/></Route>        
            {/* <Route exact path="/home"><News key="home"  pagesize="5" country="in" category="general"/></Route>         */}
            <Route exact path="/general"><News key="general"  pagesize="5" country="in" category="general"/></Route>           
            <Route exact path="/business"><News key="business"  pagesize="5" country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News key="entertainment"  pagesize="5" country="in" category="entertainment"/></Route>
            <Route exact path="/healthscience"><News key="healthscience"  pagesize="5" country="in" category="healthscience"/></Route>
            <Route exact path="/sports"><News key="sports"  pagesize="5" country="in" category="sports"/> </Route>
            <Route exact path="/technology"><News key="technology"  pagesize="5" country="in" category="technology"/></Route>          
        </Switch>
    </Router>
   
  );
}

export default App;
