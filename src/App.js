import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import User from "./components/User";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <li>
        <Link to="/user">USERS</Link><br />
      </li>
      <li>
        <Link to="/post">POSTS</Link>
      </li>
      <Switch>
        <Redirect exact from="/" to="/user" />
        <Route path="/user" component={User} />
        <Route path="/post" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
