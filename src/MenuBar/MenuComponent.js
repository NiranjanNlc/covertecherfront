import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../Authenciation/AuthenticationService';
import './Bootstrap.css'

class MenuComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        const isSchoolLoggedIn = AuthenticationService.isSchoolLoggedIn()  
        const loggedIn = isUserLoggedIn||isSchoolLoggedIn

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand">CoverTeacher</a></div>
                    <ul className="navbar-nav">
                    {isUserLoggedIn && <li><Link className="nav-link" to="/school">School</Link></li>}
                     {isSchoolLoggedIn &&  <li><Link className="nav-link" to="/teacher">Teacher</Link></li>}
                     {isUserLoggedIn &&  <li><Link className="nav-link" to="/request">Request</Link></li>}
                     {isSchoolLoggedIn &&   <li><Link className="nav-link" to="/addrequest">AddRequest</Link></li>}
{/* 
                     {isUserLoggedIn &&   <li><Link className="nav-link" to="/add">TeacherForm</Link></li>}
                     {isSchoolLoggedIn &&   <li><Link className="nav-link" to="/register">RegisterSchool</Link></li>} */}

                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!loggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {loggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(MenuComponent)