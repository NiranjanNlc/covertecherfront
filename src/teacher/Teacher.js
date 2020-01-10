import React from 'react'
import TeacherService from './TeacherService.js'
<<<<<<< HEAD
 
class Teacher extends React.Component {
  constructor() {
      super()
      this.state = {
          teachers: [],
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
                  this.setState({ teachers: response.data })
              }
          )
  }
  render()
  {
    
    
    return(
              <div>                 {
                     this.state.teachers.map(
                         teacher =>
                         <div style={{"float":'left'}}>
                          <div ><img   width="150" height="150" src="/teacher.jpg"/></div>
                         <div  key ={teacher.id} style={{"float":'left'}}> 
                         Name:<b>{teacher.name}</b><br></br>
                         Locatin:<b>{teacher.location}</b><br></br>
                         Subject:{  teacher.subject.map(
                            call => 
                               <b  key={call.id}>{call.sub},</b>
                            )
                            
                     }<br></br>
                         Time:<b>{teacher.time}</b><br></br>
                         <button>Book</button>
                         </div></div>
                     )
                 }
                 
                 {/* Name:<b>Niranjan</b><br></br>
                 Locatin:<b>kathmandu</b><br></br>
                 Subject:<b>English ,math</b><br></br>
                 Time:<b>Day</b><br></br>
                 <button>Book</button> */}
     </div>

=======


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
>>>>>>> 98bab5c85754a0704030b23b0ea6e44189d2f358
    );
  }
}
export default Teacher;