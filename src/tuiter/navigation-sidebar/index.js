import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from 'react-icons/fa'; // Import icons

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    { name: "home", icon: <FaHome /> },
    { name: "explore", icon: <FaSearch /> },
    { name: "notifications", icon: <FaBell /> },
    { name: "messages", icon: <FaEnvelope /> },
    { name: "bookmarks", icon: <FaBookmark /> },
    { name: "lists", icon: <FaList /> },
    { name: "profile", icon: <FaUser /> },
    { name: "more", icon: <FaEllipsisH /> },
  ];
  return (
    <div className="list-group">
      {links.map((link) => 
          <Link to={`/tuiter/${link.name}`} className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}>
            <span>{link.icon}</span> 
            <span className="d-none d-lg-inline"> {link.name}</span>
          </Link>
      )}
    </div>
  );
 };

export default NavigationSidebar;
