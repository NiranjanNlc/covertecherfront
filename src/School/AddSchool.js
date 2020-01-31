import React from 'react'
import SchoolService from './SchoolService'
import {ACCESS_TOKEN} from '../Utility/AppUtility.js'
class AddSchool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sname: 'hh',
      loc: 'nn',
      rid: 'nn',
      psw:'ererer'
    }
    this.submitData = this.submitData.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  submitData(event) {

    console.log(this.state.sname)
    const schoolSignup = {
      name: this.state.sname,
      location: this.state.loc,
      userId: this.state.rid ,
      password: this.state.psw,
      email:"niranjannlc10@gmail.com",
      roles:"school"
    };
    SchoolService.addSchoolRequest(schoolSignup)
    this.props.history.push("/login/")

  //   const schoolSignup = {
  //     name: this.state.sname.value,
  //     location: this.state.loc.value,
  //     userId: this.state.rid.value,
  //     password: this.state.psw.value
  //   };
  //   const request = (options) => {
  //     const headers = new Headers({
  //         'Content-Type': 'application/json',
  //     })
      
  //     if(localStorage.getItem(ACCESS_TOKEN)) {
  //         headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
  //     }
  
  //     const defaults = {headers: headers};
  //     options = Object.assign({}, defaults, options);
  
  //     return fetch(options.url, options)
  //     .then(response => 
  //         response.json().then(json => {
  //             if(!response.ok) {
  //                 return Promise.reject(json);
  //             }
  //             return json;
  //         })
  //     );
  // };
    

  }

  render() {
    return (
      <div>
        <form >
          {/* <div class="imgcontainer">
    <img    src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" alt="Avatar" class="avatar"/>
  </div> */}

          <div class="container">
            <label for="sname"><b>Schoolname</b></label>
            <input type="text" placeholder="Enter Schoolname" name="sname" onChange={this.handleChange} required />

            <label for="loc"><b>Location </b></label>
            <input type="text" placeholder="Enter Location " name="loc" onChange={this.handleChange} required />

            <label for="id"><b>UserId</b></label>
            <input type="text" placeholder="Enter Registration id" name="rid" onChange={this.handleChange} required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required onChange={this.handleChange}  required/>


            <button type="submit" onClick={this.submitData}>Register School </button>
            <button type="submit" style={{ "backgroundColor": "#f44336", "textAlign": 'center', marginTop: "4px" }}>Clear</button>

          </div>
          {/* <div style={{"background-color":"#f1f1f1"}}>
    <button type="button" class="cancelbtn">Clear</button>
    
  </div> */}
        </form>

      </div>
    )
  }
}
export default AddSchool