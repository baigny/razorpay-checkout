import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PayByRazorPay from './pages/PayByRazorPay';

function App() {
  return (
     <>
     <Router>
     <TopBar/>
     
     <Sidebar/>
        <div className="App-header">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/payments" component={PayByRazorPay}></Route>
        </Switch>
        </div>
     </Router>
    </>
  );
}

export default App;
