import React from 'react';
import '../styles/master-styles.css';
import { Link } from 'react-router-dom';

const SIDEBAR_LINKS = [
  {
    link: "/payments",
    imageSource: "../images/icons/noun_Folder_3415647.svg",
    title: "Courses",
  },
  {
    link: "/",
    imageSource: "../images/icons/noun_schedule_605246.svg",
    title: "Schedule",
  },
  {
    link: "/",
    imageSource: "../images/icons/noun_Question_1101884.svg",
    title: "Ask a Question",
  },
  {
    link: "/",
    imageSource: "../images/icons/noun_Assignment_1906701.svg",
    title: "Materials",
  },
  {
    link: "/",
    imageSource: "../images/icons/noun_chat_2310760.svg",
    title: "Chat",
  },
  {
    link: "/",
    imageSource: "../images/icons/noun_activity_1908062.svg",
    title: "Activity Zone",
  },
  {
    link: "/",
    imageSource: "../images/icons/noun_achievement_195251.svg",
    title: "Achievements",
  },
  {
    link: "/",
    imageSource: "../images/icons/noun_feedback_1864581.svg",
    title: "Reports",
  },
  {
    link: "/payments",
    imageSource: "../images/icons/noun_payment_1806700.svg",
    title: "Payments",
  },
  {
    link: "/",
    imageSource: "../images/icons/noun_Settings_3126968.svg",
    title: "Settings",
  }
]
export default function Sidebar() {
  return (
    <>
    <nav className="sidenav navbar navbar-vertical fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div className="navbar-inner">
        {/* <!-- Collapse --> */}
        <div className="navbar-collapse" id="sidenav-collapse-main">
          {/* <!-- Nav items --> */}
          <ul className="navbar-nav">
            {
              SIDEBAR_LINKS.map((sl,index) =>
                <li key={index} className="nav-item">
                  <Link className="nav-link" to={sl.link}>
                    <img alt="" src={sl.imageSource}/>
                    <span className="nav-link-text ml-3">{sl.title}</span>
                  </Link>
                </li>
              )
            }
          
          </ul>
          </div>
      </div>
      </nav>
  </>
  );
}
