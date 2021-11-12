import breakground from './Main.png';
import {useState} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
} from "react-router-dom";
import Logueo from "./Components/Presentación/Logueo";
import Courses from "./Components/Presentación/Courses";
import CourseDetail from "./Components/Presentación/CourseDetail";
import AuthRoute from "./Components/Presentación/AuthRoute";
import Mangaka from "./Components/Presentación/Mangaka.js";

function App() {
  return (     <Router>
        <div>
          <Switch>
            <Route path={"/"} exact={true}>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to ="/Logueo">Logueo</Link>
                    </li>
                  </ul>
                </nav>
                <nav>
                  <ul>
                    <li>
                      <Link to ="/Courses">Courses</Link>
                    </li>
                  </ul>
                </nav>
                <nav>
                  <ul>
                    <li>
                      <Link to ="/mangaka">mangaka</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Route>
            <Route exact={true} path={'/Login'}>
              <Logueo />
              </Route>
            <Route exact={true} path={`/Courses`}>
              <Courses />
            </Route>
            <Route exact={true} path={`/mangaka`}>
              <Mangaka />
            </Route>
            <AuthRoute exact={true} path={`/Courses/details/:id`}>
              <CourseDetail/>
            </AuthRoute>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
