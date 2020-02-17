import React from 'react' 
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
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
import Copyright from './Copyright'
import "./Home.css"

class Home  extends React.Component {
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
            <React.Fragment>
            <CssBaseline />
            {/* <AppBar position="relative">
              <Toolbar>
                <CameraIcon className="icon" />
                <Typography variant="h6" color="inherit" noWrap>
                  Album layout
                </Typography>
              </Toolbar>
            </AppBar> */}
            <main>
              {/* Hero unit */}
              <div className="herocontent" style={{}}>
              <div className="hero_over" >
              <div className="overlay" >
              
                <Container maxWidth="sm">
                  <div className='hero-text'>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Cover Teacher
                  </Typography>
                  </div>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Need a   subsitute for the teacher in their absence  .We have the competent list of trained 
                    and skilled manpower .
                  </Typography>
                  <div className="heroButtons">
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button variant="contained" color="primary">
                        <Link to="/SignUp">  School SignUp  </Link>
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary">
                        <Link to="/add"> Teacher Signup </Link>
                        </Button>
                      </Grid>
                      
                    </Grid>
                  </div>
                </Container>
                </div>
              </div>
              </div>
              <Container className="cardGrid clearfix" maxWidth="md" >
              {

                    this.state.requests.map(
                        Request =>
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
                  )
                    
                }
                   
              </Container>
            </main>
            {/* Footer */}
            {/* <footer className="footer">
              <Typography variant="h6" align="center" gutterBottom>
                CoverTeacher 
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                DevelopedBy : Niranjan Nlc 
              </Typography>
              <Copyright />
            </footer> */}
            {/* End footer */}
          </React.Fragment>
        )
    }
}

export default Home 




