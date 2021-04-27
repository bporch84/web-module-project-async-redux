import { Route, Switch, NavLink } from "react-router-dom";

import TaylorSwift from "./components/TaylorSwift";
import RonSwanson from "./components/RonSwanson";
import KanyeWest from "./components/KanyeWest";

import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav>
        <h1>Quotes</h1>
        <NavLink
          exact to="/ron-swanson"
          activeClassName="active"
        >
          Ron Swanson
        </NavLink>
        <NavLink
          exact to="/taylor-swift"
          activeClassName="active"
        >
          Taylor Swift
        </NavLink>
        <NavLink
          exact to="/kanye-west"
          activeClassName="active"
        >
          Kanye West
        </NavLink>
      </nav>
      <Switch>
        <Route path="/ron-swanson" component={RonSwanson} />
        <Route path="/taylor-swift" component={TaylorSwift} />
        <Route path="/kanye-west" component={KanyeWest} />
      </Switch>
    </div>  
  );
}

export default App;
