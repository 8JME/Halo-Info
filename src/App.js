import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Medals from './components/Medals';
import About from './components/About';
import MedalDetail from './components/MedalDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/medals" exact component={Medals} />
          <Route path="/medal/:id" render={(data) => <MedalDetail match={data} />} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
