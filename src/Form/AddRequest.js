import React from 'react'
import "./AddRequest.css"

function AddRequest() {
    return (
        <div>
              <form   method="post">
  {/* <div class="imgcontainer">
    <img    src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" alt="Avatar" class="avatar"/>
  </div> */}

  <div class="container">
    <label for="sname"><b>Schoolname</b></label>
    <input type="text" placeholder="Enter Schoolname" name="sname" required/>
 
    <label for="sname"><b>Location </b></label>
    <input type="text" placeholder="Enter Location " name="sub" required/>

    <label for="sname"><b>Time</b></label>
    <input type="text" placeholder="Enter Time" name="time" required/>

    <button type="submit">ADD REQUEST </button>
    <button type="submit" style={{"backgroundColor":"#f44336", "textAlign": 'center',marginTop:"4px"}}>Clear</button>
    
  </div>
  {/* <div style={{"background-color":"#f1f1f1"}}>
    <button type="button" class="cancelbtn">Clear</button>
    
  </div> */}
</form>
 
        </div>
    )
}
export default AddRequest