import React from 'react' 
 
import RequestService from './RequestService.js'
 
class Request extends React.Component {
  constructor() {
      super()
      this.state = {
          requests: [],
          message: null
      }
      this.refreshRequest = this.refreshRequest.bind(this)
  }
  componentDidMount() {
      this.refreshRequest();
  }
  refreshRequest() {
            RequestService.retrieveAllREQUEST()
            .then( response => {
                console.log(response);
                this.setState({ requests: response.data })
            }
            )
  }
  render()
  {
    
    
    return(
              <div>  
                 {
                     this.state.requests.map(
                         Request =>
                         <div style={{"float":'left',"padding":'2px'}}>
                          <div  ><img   width="150" height="150" src="https://polkadottango.files.wordpress.com/2012/03/open-book.jpg"/></div>
                         <div  key ={Request.id} style={{"float":'left'}}> 
                         SchoolName:<b>{Request.name}</b><br></br>
                         Locatin:<b>{Request.location}</b><br></br> 
                         Time :<b>{Request.time}</b><br></br>
                          <button>Book Request</button>
                         </div></div>
                     )
                 }
                 
                 
     </div>
    )
                }        
            } 

 export default Request



 
 