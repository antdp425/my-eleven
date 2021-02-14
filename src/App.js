import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import Settings from "./components/Settings";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/teams">
          <Teams />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
