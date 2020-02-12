import React from 'react'
import TeacherService from './TeacherService.js'

class Teacher extends React.Component {
    constructor() {
        super()
        this.state = {
            teachers: [],
            message: null
        }
        this.refreshTeacher = this.refreshTeacher.bind(this)
    }
    // componentDidMount() {
    //     this.refreshTeacher();
    // }
    refreshTeacher() {
        TeacherService.retrieveAllTeacher()
            .then(
                response => {
                    console.log(response);
                    this.setState({ teachers: response.data })
                }
            )
    }
    render() {
          this.refreshTeacher()
        return (
            <div>                 {
                this.state.teachers.map(
                    teacher =>
                        <div style={{ "float": 'left' }}>
                            <div ><img width="150" height="150" src="/teacher.jpg" /></div>
                            <div key={teacher.id} style={{ "float": 'left' }}>
                                Name:<b>{teacher.name}</b><br></br>
                                Locatin:<b>{teacher.location}</b><br></br>
                                Subject:{teacher.subject.map(
                                    call =>
                                        <b key={call.id}>{call.sub},</b>
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
        )
    }

}
export default Teacher

