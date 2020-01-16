import React from 'react';
// import logo from './logo.svg'; 
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'

import './App.css';
import Teacher from './teacher/Teacher.js'
import Request from './request/Request.js';
import School from './School/School.js'
import TeacherForm  from './Form/TeacherForm.js' 
import Login from './Form/Login.js';
import AddRequest from './Form/AddRequest';

import AuthenciatedRoute from './AuthenciatedRoute'
import MenuComponent from './footer/MenuComponent';
import AddSchool from './School/AddSchool';
function App() {
  return (
    <div> 
        <Router>
          <MenuComponent/>
    <>
    <Switch>
      <AuthenciatedRoute path = "/" exact component = {Request}/>
        <Route path = "/login/" component = {Login} />
       <AuthenciatedRoute path = "/school/" component = {School} />
       <AuthenciatedRoute path = "/teacher/" component = {Teacher} />
       
       <AuthenciatedRoute path = "/request/" component = {Request} />
       <AuthenciatedRoute path = "/addrequest/" component = {AddRequest} />
       <AuthenciatedRoute path = "/register/" component = {AddSchool} />
       <AuthenciatedRoute path = "/add/" component = {TeacherForm} />
       </Switch>
     </>
     
   </Router>
   </div>
 
  )
}

export default App;
