import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { 
    FaHome, FaSearch, FaBell, FaEnvelope, 
    FaBookmark, FaList, FaUser, FaEllipsisH 
} from 'react-icons/fa'; // Import icons

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const [ignore, tuiter, active] = pathname.split("/");
  
  const baseLinks = [
    { name: "home", icon: <FaHome /> },
    { name: "explore", icon: <FaSearch /> },
    { name: "notifications", icon: <FaBell /> },
    { name: "messages", icon: <FaEnvelope /> },
    { name: "bookmarks", icon: <FaBookmark /> },
    { name: "lists", icon: <FaList /> },
    { name: "more", icon: <FaEllipsisH /> },
  ];
  
  // Add profile link to the array if the user is logged in
  const links = currentUser ? [...baseLinks, { name: "profile", icon: <FaUser /> }] : baseLinks;
  
  return (
    <div className="list-group">
      {!currentUser && <Link className="list-group" to="/tuiter/login">Login</Link>}
      {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
      {links.map((link) => 
          <Link 
            key={link.name} 
            to={`/tuiter/${link.name}`} 
            className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}
          >
            <span>{link.icon}</span> 
            <span className="d-none d-lg-inline"> {link.name}</span>
          </Link>
      )}
    </div>
  );
};

export default NavigationSidebar;
