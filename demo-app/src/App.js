import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
} from "react-router-dom";
import Courses from "./Components/Courses";
import CourseDetail from "./Components/CourseDetail";
import AuthRoute from "./Components/AuthRoute";

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
          <Switch>
            <Route exact={true} path={`/Courses`}>
              <Courses />
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
