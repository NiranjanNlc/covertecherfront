import React from 'react';
import Authenciate from './Authenciate.js';
import { Redirect,Route } from 'react-router-dom'

  class AuthenciatedRoute extends React.Component
  {
        
    render()
    {
        
       if(Authenciate.isUserLoggedIn)
       {
         console.log("true condition")
         return(<Redirect to  ="/login"/>)
       
       }
       else{
         return(
            <Route {...this.props}/>
        )
       }
       
    }
        }
export default  AuthenciatedRoute