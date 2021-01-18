import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsPage from './components/FriendsPage';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <link to='/'>Login</link>
          </li>
          <li>
            <link to='/friends'>Friends</link>
          </li>
        </ul>

        <Switch>
          <Route path='/friends'>
          <PrivateRoute>
            <FriendsPage />
          </PrivateRoute>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
