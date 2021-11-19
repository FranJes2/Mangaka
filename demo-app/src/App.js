import breakground from './Main.png';
import {useState} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
} from "react-router-dom";
import Login from "./Components/Presentación/Login";
import Courses from "./Components/Presentación/Courses";
import CourseDetail from "./Components/Presentación/CourseDetail";
import AuthRoute from "./Components/Presentación/AuthRoute";
import Mangaka from "./Components/Presentación/Mangaka";
import Registro from "./Components/Presentación/Registro";

function App() {
  return (
      <Router>
        <nav className="Nav02">
          <nav className="navbar navbar-dark bg-dark">
            <Switch>
              <nav className="navbar navbar-dark bg-dark">
                <Route path={"/"} exact={true}>
                  <div class="container-fluid">
                    <nav>
                      <ul>
                        <li>
                          <button type="button" className="btn btn-outline-warning">
                            <Link to ="/Login">Login</Link>
                          </button>
                        </li>
                      </ul>
                    </nav>
                    <nav>
                      <ul>
                        <li>
                          <button type="button" className="btn btn-outline-warning">
                            <Link to ="/Courses">Courses</Link>
                          </button>
                        </li>
                      </ul>
                    </nav>
                    <nav>
                      <ul>
                        <li>
                          <button type="button" className="btn btn-outline-warning">
                            <Link to ="/Mangaka">Mangaka</Link>
                          </button>
                        </li>
                      </ul>
                    </nav>
                    <nav>
                      <ul>
                        <li>
                          <button type="button" className="btn btn-outline-warning">
                            <Link to ="/Registro">Registro</Link>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Route>
                <Route exact={true} path={'/Login'}>
                  <Login />
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
                <AuthRoute exact={true} path={`/Courses/details/:id`}>
                  <CourseDetail/>
                </AuthRoute>
              </nav>
            </Switch>
            <a href="javascript:history.go(-1)" className="btn btn-outline-light">Atrás</a>
          </nav>
        </nav>
      </Router>
  );
}


export default App;
