import React from 'react'
import './TeacherForm.css'
import TeacherService from '../teacher/TeacherService'

class TeacherForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'hh',
      loc: 'nn',
      ph: '',
      sub: 'nn',
      tim: 'nnn',
      psw:'ajjjs',
      rid:'jjj'
    }
    this.submitData = this.submitData.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target)
    const { name, value } = event.target
    this.setState({
      [name]: value
    }) 
  }

  submitData(event) {

    console.log(this.state.name)
    const teaxherSignup = {
      name: this.state.name,
      userId:this.state.rid,
      location: this.state.loc,
      phone: this.state.ph ,
      time:this.state.tim,
      subject:
             [{sub :this.state.sub}],
      password: this.state.psw,
      email:"nlc@gmail.com",
      roles:"teacher"
    };
    TeacherService.saveTeacher(teaxherSignup)

  }
  render() {
    console.log("i a here")
    return (

      <div className="form">
        <form   style={{ "border": '1px solid #ccc' }}>
          <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="name"><b>Name</b></label>
            <input type="text" placeholder="Enter full name" name="name" required onChange={this.handleChange} />


            <label for="Phone"><b>Phone </b></label>
            <input type="text" placeholder="Enter Phone " name="ph" required onChange={this.handleChange} />

            <label for="location"><b>Location </b></label>
            <input type="text" placeholder="Enter Location" name="loc" required onChange={this.handleChange} />


            <label for="time"><b>Time</b></label>
            <input type="text" placeholder="Enter time/shift" name="tim" required onChange={this.handleChange} />

            <label for="Subject"><b>Subject</b></label>
            <input type="text" placeholder="Enter Subject" name="sub" required onChange={this.handleChange} />

            <label for="id"><b>UserId</b></label>
            <input type="text" placeholder="Enter Registration id" name="rid" onChange={this.handleChange} required />


            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required onChange={this.handleChange} />
{/* 
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={this.handleChange} /> */}

            <label>
              <input type="checkbox" checked="checked" name="remember" style={{ "margin-bottom": "15px" }} /> Remember me
    </label>

            <p>By creating an account you agree to our <a href="#" style={{ "color": "dodgerblue" }}>Terms & Privacy</a>.</p>

            <div class="clearfix">
              {/* <button type="button" className="cancelbtn">Cancel</button> */}
              <button type="submit" className="signupbtn" onClick={this.submitData}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default TeacherForm
