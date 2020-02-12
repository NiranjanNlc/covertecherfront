import React, { Component } from 'react'
import {Route, Redirect } from 'react-router-dom'

import AuthenticationService from './AuthenticationService';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

export const SCHOOL_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedSchool'

class AuthenticatedRoute extends Component {
    render() {
        if ((localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) === null ))
        {
            if ((localStorage.getItem(SCHOOL_NAME_SESSION_ATTRIBUTE_NAME) === null ))
        {
             return <Redirect to="/login" />
           
        } 
         return    <Route {...this.props} />
        }
         else 
        
        {
         console.log("jpt")
         console.log(SCHOOL_NAME_SESSION_ATTRIBUTE_NAME)
            return    <Route {...this.props} /> 
        
        }

    }
}

export default AuthenticatedRoute