import logo from './logo.svg';
import './App.css';
import LinkContainer from './components/LinkComponents'
import Store from './components/Store'
import About from './components/About'
import Home from './components/Home'
import Profile from './components/Profile'

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <LinkContainer />
      <Switch>
        {/* About Page Path */}
        <Route exact path='/about' component={About} />
        {/* Profile Page Path */}
        <Route exact path='/profile' component={Profile} />
        {/* Store Page Path */}
        <Route exact path='/store' component={Store} />
        {/* Home Page Path */}
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
