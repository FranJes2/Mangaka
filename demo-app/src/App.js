import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
} from "react-router-dom";
import Courses from "./Components/Courses";

function App() {
  return (     <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to ="/Courses">Courses</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Courses">
              <Courses />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
