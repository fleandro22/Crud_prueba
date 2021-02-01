import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import {Login} from './components/Login.js'
import {Home} from './components/Home.js';
import {EditUser} from './components/EditUser.js';
import {AddUser} from './components/AddUser.js';



function App() {

  const Loginflag = false;

  const Aut = ({children}) => {
    if(!Loginflag){

      return <Redirect to="/login" />
    }

    return children;

  }


  return (
    
    <Router>
      <Switch>
       
      <Route exact path="/" component={Home} />
      <Route exact path="/users/add" component={AddUser} />
      <Route exact path="/users/edit/:id" component={EditUser} />
      </Switch>

    </Router>

  );
}

export default App;
