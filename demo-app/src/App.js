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
import Mangaka from "./Components/Presentación/Mangaka";
import Registro from "./Components/Presentación/Registro";
import Biblioteca from "./Components/Presentación/Biblioteca"

function App() {
  return (     <Router>
        <div>
          <Switch>
            <Route path={"/"} exact={true}>
              <div className="BottonLogin">
                <nav>
                  <ul>
                    <li>
                      <Link to ="/Login">Login</Link>
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
                      <Link to ="/Mangaka">Mangaka</Link>
                    </li>
                  </ul>
                </nav>
                <nav>
                  <ul>
                    <li>
                      <Link to ="/Registro">Registro</Link>
                    </li>
                  </ul>
                </nav>
                <nav>
                  <ul>
                    <li>
                      <Link to ="/Biblioteca">Biblioteca</Link>
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
            <Route exact={true} path={`/Mangaka`}>
              <Mangaka />
            </Route>
            <Route exact={true} path={'/Registro'}>
              <Registro />
            </Route>
            <Route exact={true} path={'/Biblioteca'}>
              <Biblioteca />
            </Route>
            <AuthRoute exact={true} path={`/Courses/details/:id`}>
              <CourseDetail/>
            </AuthRoute>
            <Route path="*">
              <div><h1>404</h1></div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;




