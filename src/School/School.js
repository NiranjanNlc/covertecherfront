import React from 'react'

import SchoolService from './SchoolService.js'

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
                            {/* <div  ><img width="150" height="150" src="http://islamicvoice.com/wp-content/uploads/2018/06/school.jpg" /></div>
                            <div key={School.id} style={{ "float": 'left' }}>
                                Name:<b>{School.name}</b><br></br>
                                Locatin:<b>{School.location}</b><br></br>
                                <button>Send Request</button>
                            </div> */}
                              <Container className="cardGrid clearfix" maxWidth="md" >
                      {

                    <div class="card" style={{width: 270}}>
                    <img class="card-img-top"  src="http://islamicvoice.com/wp-content/uploads/2018/06/school.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">School </h5>
                      <p class="card-text"> 
                      <div key={School.id} style={{ "float": 'left' }}>
                                    Name:<b>{School.name}</b><br></br>
                                    Location:<b>{School.location}</b><br></br>
                                    
                                    <a href="#" class="btn btn-primary">Send Request  </a>
                     
                                </div>
                      </p>
                      </div>
                  </div>
                  
                    
                }
                   
              </Container>
                            </div>
                )
            }


            </div>
        )
    }
}

export default School



