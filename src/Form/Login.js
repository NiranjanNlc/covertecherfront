import React from 'react';
// import logo from './logo.svg';
import './Login.css';

import { BrowserRouter as Router, Route, history, Redirect } from 'react-router-dom'

import AuthenticationService from '../Authenciation/AuthenticationService';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      psw: '',
      remb: '',
      role:'',
      sucessLogin: 'false',
      failedLogin: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitData = this.submitData.bind(this)
  }

  handleChange(event) {
    
    console.log(this.state.role)
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  submitData(event) {
    console.log("hello hunny bunny ")
    console.log(this.state.uname)
    console.log(this.state.role)

     
    if (this.state.uname === 'nlc' && this.state.psw === 'nlc') {
      AuthenticationService.registerSuccessfulLogin(this.state.uname, this.state.psw)
      this.props.history.push("/school/")

    }
     if (this.state.uname === 'MindLight' && this.state.psw === 'MindLight') {
      console.log(this.state.uname)
      AuthenticationService.registerSchoolLogin(this.state.uname, this.state.psw)
      this.props.history.push("/school/")


    }
    else{
      this.props.history.push("/login/")
    }
    
  }
    // AuthenticationService
    // .executeBasicAuthenticationService(this.state.username, this.state.password)
    // .then(() => {
    //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
    //     this.props.history.push(`/courses`)
    // }).catch(() => {
    //     this.setState({ showSuccessMessage: false })
    //     this.setState({ hasLoginFailed: true })
    // })

  
  render() {
    if (AuthenticationService.isUserLoggedIn()) {
      console.log("trying to open login page")
      return <Redirect to="/school" />
    }
    return (
      <div className="Login">
        <form >
          {
          /* <div class="imgcontainer">
    <img    src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" alt="Avatar" class="avatar"/>
  </div> */}

          <div className="container">
            {this.state.failedLogin && <div style={{ "backgroundColor": "#f44336", "textAlign": 'center' }}>Invalid credentials</div>}
           
            <label ><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" value={this.state.uname} onChange={this.handleChange} required />

            <label ><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" value={this.state.psw} onChange={this.handleChange} required />
            {/* <label ><b>Enter Role </b></label>
            <select name="role" value ={this.state.role} onChange={this.handleChange}>
              <option value="role">Enter the role </option>
              <option value="Teacher">Teacher</option>
              <option value="School">School</option> 
            </select><br/><br/> */}
            <button type="button" onClick={this.submitData}>Login</button>
            <label style={{ "float": "left" }}>
              <input type="checkbox" name="remb"
                value={this.state.remb}

                onChange={this.handleChange}
              /> Remember me
     </label>
            {/* <button type="button" className="cancelbtn">Cancel</button> */}
            <span style={{ "float": "right" }} >Forgot <a href="#">password?</a></span>
            <br></br>
            <br></br>
          </div>

        </form>
      </div>
    )
  }
}

export default Login


