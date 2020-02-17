import React from 'react'

import RequestService from './RequestService.js'
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
class Request extends React.Component {
    constructor() {
        super()
        this.state = {
            requests: [],
            message: null
        }
        this.refreshRequest = this.refreshRequest.bind(this)
    }
    // componentDidMount() {
    //     this.refreshRequest();
    // }
    refreshRequest() {
        RequestService.retrieveAllREQUEST()
            .then(response => {
                console.log(response);
                this.setState({ requests: response.data })
            }
            )
    }
    render() {
           this.refreshRequest()

        return (
            <div>
                {
                    this.state.requests.map(
                        Request =>
                            <div style={{ "float": 'left', "padding": '2px' }}>
                                
                                <Container className="cardGrid clearfix" maxWidth="md" >
               
                    <div class="card" style={{width: 200}}>
                    <img class="card-img-top"  src="https://polkadottango.files.wordpress.com/2012/03/open-book.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Request </h5>
                      <p class="card-text"> 
                      <div key={Request.id} style={{ "float": 'left' }}>
                                    SchoolName:<b>{Request.school}</b><br></br>
                                    Subject:<b>{Request.subject}</b><br></br>
                                    Locatin:<b>Nijgadh</b><br></br>
                                    Time :<b>{Request.time}</b><br></br>
                                    <a href="#" class="btn btn-primary">Book Request </a>
                     
                                </div>
                      </p>
                      </div>
                  </div>
                  
                    
                
                   
              </Container>
                                </div>
                    )
                }


            </div>
        )
    }
}

export default Request




