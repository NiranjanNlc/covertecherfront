import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Teacher from './teacher/Teacher.js'
import Request from './request/Request.js';
import School from './School/School.js'
import TeacherForm  from './Form/TeacherForm.js'
 
import Login from './Form/Login.js';
import AddRequest from './Form/AddRequest';
function App() {
  return (
    <div className="App"> 
      <AddRequest></AddRequest>
      </div>
  )
}

export default App;
