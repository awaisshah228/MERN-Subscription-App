import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Nav />
      <Toaster />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
