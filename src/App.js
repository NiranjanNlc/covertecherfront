import React from 'react';
// import logo from './logo.svg'; 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Teacher from './teacher/Teacher.js'
import Request from './request/Request.js';
import School from './School/School.js'
import TeacherForm from './Form/TeacherForm.js'
import Login from './Form/Login.js';
import AddRequest from './Form/AddRequest';

import AuthenciatedRoute from './Authenciation/AuthenciatedRoute'
import MenuComponent from './MenuBar/MenuComponent';
import AddSchool from './School/AddSchool';
import Home from './HomePage/Home' 
import Choice from './Form/Choice';
function App() {
  return (
    <div>
      <Router>
        <MenuComponent />
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login/" component={Login} />
            <AuthenciatedRoute path="/school/" component={School} />
            <AuthenciatedRoute path="/teacher/" component={Teacher} />

            <AuthenciatedRoute path="/request/" component={Request} />
            <AuthenciatedRoute path="/addrequest/" component={AddRequest} />
            <AuthenciatedRoute path="/register/" component={AddSchool} />
            <Route path="/add/" component={TeacherForm} />
            <Route path="/chose/" component={Choice} />
            
            
            <Route path="/signup/" component={AddSchool} />
          </Switch>
        </>

      </Router>
    </div>

  )
}

export default App;
