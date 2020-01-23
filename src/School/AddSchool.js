import React from 'react'
import SchoolService from './SchoolService'
class AddSchool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sname: 'hh',
      loc: 'nn',
      rid: 'nn'
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
    SchoolService.addSchoolRequest(this.state.sname, this.state.loc, this.state.rid)

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

            <label for="id"><b>RegistrationId</b></label>
            <input type="text" placeholder="Enter Registration id" name="rid" onChange={this.handleChange} required />

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