import React, { useState } from 'react';
// import PropTypes from 'prop-types';


export default function Navbar(props) {
    
  return (
    <nav className={`navbar navbar-expand-lg bg-${()=>{props.toggleMode('bg-' + cls)}} navbar-${()=>{props.toggleMode('bg-' + cls)}}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.navTitle}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-light">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.about}</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Link
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul> 
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">Link</a>
                </li>
                </ul>
                <div className="d-flex" >
                    <div className="bg-primary rounded mx-3" onClick={()=>{props.toggleMode('primary')}} style={{width:'25px', height:'25px'}}></div>
                    <div className="bg-warning rounded mx-3" onClick={()=>{props.toggleMode('warning')}} style={{width:'25px', height:'25px'}}></div>
                    <div className="bg-success rounded mx-3" onClick={()=>{props.toggleMode('success')}} style={{width:'25px', height:'25px'}}></div>
                    <div className="bg-danger rounded mx-3" onClick={()=>{props.toggleMode('danger')}} style={{width:'25px', height:'25px'}}></div>
                    <div className="bg-dark rounded mx-3" onClick={()=>{props.toggleMode('dark')}} style={{width:'25px', height:'25px'}}></div>
                    <div className="bg-light rounded mx-3" onClick={()=>{props.toggleMode('light')}} style={{width:'25px', height:'25px'}}></div>
                </div>
               
            </div>
        </div>
  </nav>
  )
}











