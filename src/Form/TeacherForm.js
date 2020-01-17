import React from 'react' 
 import './TeacherForm.css'

function TeacherForm()
 {
   console.log("i a here")
    return (
    
      <div className="form">
<form action="action_page.php" style={{"border":'1px solid #ccc'}}>
<div class="container">
<h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter full name" name="name" required/>

    
    <label for="Phone"><b>Phone </b></label>
    <input type="text" placeholder="Enter Phone " name="ph" required/>
    
    <label for="location"><b>Location </b></label>
    <input type="text" placeholder="Enter Location" name="loc" required/>

    
    <label for="time"><b>Time</b></label>
    <input type="text" placeholder="Enter time/shift" name="time" required/>
    
    <label for="Subject"><b>Subject</b></label>
    <input type="text" placeholder="Enter Subject" name="Subject" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

    <label>
      <input type="checkbox" checked="checked" name="remember" style={{"margin-bottom":"15px"}}/> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#" style={{"color":"dodgerblue"}}>Terms & Privacy</a>.</p>
    
    <div class="clearfix">
      {/* <button type="button" className="cancelbtn">Cancel</button> */}
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
</div>
</form>
 </div>
    )
  }

export default TeacherForm
