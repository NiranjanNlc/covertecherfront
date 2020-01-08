import React from 'react'
import TeacherService from './TeacherService.js'


// function Teacher() {
//     return (
//       <div   >
//             <div style={{"float":'left'}}><img   width="150" height="150" src="/teacher.jpg"/></div>
//             <div  style={{"float":'left'}}>
//                 Name:<b>Niranjan</b><br></br>
//                 Locatin:<b>kathmandu</b><br></br>
//                 Subject:<b>English ,math</b><br></br>
//                 Time:<b>Day</b><br></br>
//                 <button>Book</button>
//     </div>
//       </div>
//     );
//   }
  
//   export default Teacher;

class Teacher extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          teacher: [],
          message: null
      }
      this.refreshTeacher = this.refreshTeacher.bind(this)
  }
  componentDidMount() {
      this.refreshTeacher();
  }
  refreshTeacher() {
      TeacherService.retrieveAllTeacher()  
          .then(
              response => {
                  console.log(response);
                  this.setState({ teacher: response.data })
              }
          )
  }
  render()
  {
    return(
      <div  >
          <div style={{"float":'left'}}><img   width="150" height="150" src="/teacher.jpg"/></div>
             <div  style={{"float":'left'}}>
           
                Name:<b>Niranjan</b><br></br>
                 Locatin:<b>kathmandu</b><br></br>
                 Subject:<b>English ,math</b><br></br>
                 Time:<b>Day</b><br></br>
                 <button>Book</button>
               
                 {/* Name:<b>Niranjan</b><br></br>
                 Locatin:<b>kathmandu</b><br></br>
                 Subject:<b>English ,math</b><br></br>
                 Time:<b>Day</b><br></br>
                 <button>Book</button> */}
     </div>
       </div>
    );
  }
}
export default Teacher;