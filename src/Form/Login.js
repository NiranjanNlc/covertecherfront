import React from 'react';
// import logo from './logo.svg';
import './Login.css'; 
import Authenciate from '../Authenciate';

class Login extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          uname: '',
          psw: '',
          remb:'',
          sucessLogin:'',
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
     if(this.state.uname==='nlc'&& this.state.psw==='nlc')
     {
       Authenciate.sucessLogin(this.state.uname,this.state.psw)
      this.props.history.push("/school/") 
      // this.setState(
      //   {sucessLogin :true,
      //     failedLogin:false
      //     }
      
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
  return (
    <body>
          <div className="Login">   
   <form >
  {/* <div class="imgcontainer">
    <img    src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" alt="Avatar" class="avatar"/>
  </div> */}

  <div class="container">
    {this.state.failedLogin &&  <div style={{"background-color":"#f44336", "text-align": 'center'}}>Invalid credentials</div>}
     <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" value={this.state.uname}  onChange={this.handleChange} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" value={this.state.psw}  onChange={this.handleChange} required/>

    <button type="submit" onSubmit={this.submitData}>Login</button>
    <label>
      <input type="checkbox" name="remb" value={this.state.remb}  onChange={this.handleChange} /> Remember me
    </label>
  </div>
  <div style={{"background-color":"#f1f1f1"}}>
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
      </div>
      </body>
)
}
}
 
export default Login


