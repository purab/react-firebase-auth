import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import UserRoute from './components/UserRoute';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <UserRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
