import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,Route } from 'react-router-dom'

import './App.css';
import Teacher from './teacher/Teacher.js'
import Request from './request/Request.js';
import School from './School/School.js'
import TeacherForm  from './Form/TeacherForm.js'
import './index.css';
import App from './App'; 
import * as serviceWorker from './serviceWorker';
import Login from './Form/Login'; 
import AuthenciatedRoute from './AuthenciatedRoute'

ReactDOM.render(
<Router>
    <>
    <AuthenciatedRoute path = "/" exact component = {Request}/>
        <Route path = "/login/" component = {Login} />
       <AuthenciatedRoute path = "/school/" component = {School} />
       <AuthenciatedRoute path = "/teacher/" component = {Teacher} />
       
       <AuthenciatedRoute path = "/request/" component = {Request} />
       
       <AuthenciatedRoute path = "/add/" component = {TeacherForm} />
     </>
   </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
{/* <Router>
    <AuthenciatedRoute path = "/" exact component = {App}/>
        <Route path = "/login/" component = {Login} />
       <AuthenciatedRoute path = "/school/" component = {School} />
       <AuthenciatedRoute path = "/teacher/" component = {Teacher} />
     
   </Router> */}
serviceWorker.unregister();
