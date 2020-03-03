import React from 'react';
import TeacherService from './TeacherService.js';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
import '../MenuBar/Bootstrap.css'

import RequestService from '../request/RequestService' 
import "../HomePage/Home.css"
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
                            {/* <div ><img width="150" height="150" src="/teacher.jpg" /></div>
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
                            </div>
                            */}
                             <Container className="cardGrid clearfix" maxWidth="md" >
                      {

                    <div class="card" style={{width: 270}}>
                    <img class="card-img-top"  src="/teacher.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Teacher </h5>
                      <p class="card-text"> 
                      <div key={Request.id} style={{ "float": 'left' }}>
                                    Name:<b>{teacher.name}</b><br></br>
                                    Location:<b>{teacher.location}</b><br></br>
                                    Subject:<b>{teacher.subject.map(
                                    call =>
                                        <b key={call.id}>{call.sub},</b>
                                )

                                }</b><br></br>
                                    Time :<b>{teacher.time}</b><br></br>
                                    <a href="#" class="btn btn-primary">Book  </a>
                     
                                </div>
                      </p>
                      </div>
                  </div>
                  
                    
                }
                   
              </Container>
            
                            </div>
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

