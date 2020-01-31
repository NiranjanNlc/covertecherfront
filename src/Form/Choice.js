
import   React  from 'react'
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
import './Choice.css'


class Choice extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        role:'role1'
      }
      this.handleChange = this.handleChange.bind(this)
       this.getvalue=this.getvalue.bind(this)
    this.submitData=this.submitData.bind(this)}
  

    getvalue(event)
    {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
    }
    handleChange(event) {
      
      console.log(this.state.role)
       this.getvalue (event)
    //   if(this.state.role==='Teacher')
    //   {
    //     this.props.history.push(`/add`)
    //   }
    //   if(this.state.role==='School')
    //   {
    //     this.props.history.push(`/signup`)
    //   }
    console.log(this.state.role)
     
      
    }
    
  submitData(event) {
    console.log("hello hunny bunny ") 
    if(this.state.role==='Teacher')
       {
        this.props.history.push(`/add`)
      }
      if(this.state.role==='School')
      {
        this.props.history.push(`/signup`)
      }
  }
  
    
    render()
    {
        return(
            <div className='center'>
                <form id='form'>
            <label ><b>Enter the role you want to signup as </b></label>
            <select name="role"    onChange={this.handleChange}>
              <option value="role1">Enter the role </option>
              <option value="Teacher">Teacher</option>
              <option value="School">School</option> 
            </select><br/><br/> 
            
            <button type="button" onClick={this.submitData}>Submit</button>
            </form>
            </div>
        )
    }
}
export default Choice;