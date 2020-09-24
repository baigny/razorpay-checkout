import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/master-styles.css';


export default function TopBar() {
  return (
    <>
    <nav className="navbar navbar-top navbar-expand navbar-light bg-lights border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Brand Logo --> */}
          <Link className="navbar-brand navbar-brand-logo" to="/">
                <div className="logo">
                  <span className="brand font-weight-bold text-primary"> LEVƎL </span>
                </div>               
          </Link>
          {/* <!-- Navbar links --> */}
          <ul className="navbar-nav align-items-center  ml-md-auto ">
            <li className="nav-item">
              <Link className="nav-link" to="/" data-action="search-show" data-target="#navbar-search-main">
                <img alt="" src="../images/icons/noun_Asterisk_2417419.svg"/>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <img alt="" src="../images/icons/noun_chat_2310760.svg"/>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img alt="" src="../images/icons/noun_notification_2496093.svg"/>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li className="nav-item">
              <Link className="nav-link pr-0" to="/">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                 
                    <img className="" alt="holder" src="/images/Oval.png"/>
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  );
}
