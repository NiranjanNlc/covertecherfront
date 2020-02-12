import React from 'react'
import "./AddRequest.css"
import FormService from './FormService'
class AddRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sname: 'hh',
      loc: 'nn',
      sub: 'nn',
      time: 'nnn'
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
    FormService.addRequest(this.state.sname, this.state.sub, this.state.time, this.state.loc)
    this.props.history.push(`/teacher`)

  }
  render() {
    return (
      <div>
        <form >
          {/* <div class="imgcontainer">
    <img    src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" alt="Avatar" class="avatar"/>
  </div> */}

          <div class="container">
            <label for="school"><b>Schoolname</b></label>
            <input type="text" placeholder="Enter Schoolname" name="sname" onChange={this.handleChange} required />


            <label for="Location"><b>Subject </b></label>
            <input type="text" placeholder="Enter Subject " name="sub" onChange={this.handleChange} required />

            <label for="Location"><b>Location </b></label>
            <input type="text" placeholder="Enter Location " name="loc" onChange={this.handleChange} required />

            <label for="Time"><b>Time</b></label>
            <input type="text" placeholder="Enter Time" name="time" onChange={this.handleChange} required />

            <button type="submit" onClick={this.submitData}>ADD REQUEST </button>
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
export default AddRequest