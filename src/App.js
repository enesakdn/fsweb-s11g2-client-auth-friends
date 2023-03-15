import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./PrivateRoute";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <ul>
        <nav className="aa">
          <Link to="/">Login</Link>

          <Link to="/FriendsList">Friends</Link>

          <Link to="/AddFriend">Add Friends</Link>

          <Link to="/Logout"> Logout </Link>
        </nav>
      </ul>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute exact path="/FriendsList" component={FriendsList} />
        <PrivateRoute exact path="/AddFriend" component={AddFriend} />
        <PrivateRoute exact path="/Logout" component={Logout} />
      </Switch>
    </div>
  );
}
export default App;
