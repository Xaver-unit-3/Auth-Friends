import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsPage from './components/FriendsPage';
import LoginPage from './components/LoginPage';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/friends'>
          <PrivateRoute>
            <FriendsPage />
          </PrivateRoute>
          </Route>

          <Route path='/'>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
