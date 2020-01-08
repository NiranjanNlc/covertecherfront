import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Teacher from './teacher/Teacher.js'
import Request from './request/Request';
import School from './School/School.js'
function App() {
  return (
    <div className="App">
      <Teacher></Teacher>
      <School></School>   
        
      <Request></Request>
    </div>
  );
}

export default App;
