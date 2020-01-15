import React from 'react';
// import logo from './logo.svg';
import './Login.css';  

import {BrowserRouter as Router,Route,history, Redirect } from 'react-router-dom'
 
import AuthenticationService from '../AuthenticationService';

class Login extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          uname: '',
          psw: '',
          remb:'',
          sucessLogin:'false',
          failedLogin:''
      }
      this.handleChange = this.handleChange.bind(this)
      this.submitData = this.submitData.bind(this)
    }
    
    handleChange(event) {
      const {name, value} = event.target
      this.setState({
          [name]: value
      })
  }
  
  submitData(event)
  {
    console.log("hello hunny bunny ")
    console.log(this.state.uname)
     if(this.state.uname==='nlc'&& this.state.psw==='nlc')
     {
       AuthenticationService.registerSuccessfulLogin(this.state.uname,this.state.psw)
       this.props.history.push("/school/")
     
     } 
     else
     {
      this.setState(
        {sucessLogin :false,
          failedLogin:true
          }
      )
     }
  }
render() {
  if (AuthenticationService.isUserLoggedIn()) return <Redirect to="/school" />
  return (
   <div className="Login">   
   <form >
  {/* <div class="imgcontainer">
    <img    src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" alt="Avatar" class="avatar"/>
  </div> */}

  <div className="container">
    {this.state.failedLogin &&  <div style={{"background-color":"#f44336", "text-align": 'center'}}>Invalid credentials</div>}
     <label ><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" value={this.state.uname}  onChange={this.handleChange} required/>

    <label ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" value={this.state.psw}  onChange={this.handleChange} required/>

    <button type="submit" onClick={this.submitData}>Login</button>
    <label>
      <input type="checkbox" name="remb" value={this.state.remb}  onChange={this.handleChange} /> Remember me
    </label>
  </div>
  <div>
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
      </div> 
)
}
}
 
export default Login


