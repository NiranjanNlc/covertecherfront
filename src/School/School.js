import React from 'react'

import SchoolService from './SchoolService.js'

class School extends React.Component {
    constructor() {
        super()
        this.state = {
            schools: [],
            message: null
        }
        this.refreshSchool = this.refreshSchool.bind(this)
    }
    // componentDidMount() {
    //     this.refreshSchool();
    // }
    refreshSchool() {
        SchoolService.retrieveAllSchool()
            .then(
                response => {
                    console.log(response);
                    this.setState({ schools: response.data })
                }
            )
    }
    render() {

        console.log("hello")
        this.refreshSchool();
        return (
            <div>                 {
                this.state.schools.map(
                    School =>
                        <div style={{ "float": 'left', "padding": '2px' }}>
                            <div  ><img width="150" height="150" src="http://islamicvoice.com/wp-content/uploads/2018/06/school.jpg" /></div>
                            <div key={School.id} style={{ "float": 'left' }}>
                                Name:<b>{School.name}</b><br></br>
                                Locatin:<b>{School.location}</b><br></br>
                                <button>Send Request</button>
                            </div></div>
                )
            }


            </div>
        )
    }
}

export default School



