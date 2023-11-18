import React from "react"
import logo from "./../assets/lemmon.png"
import "../assets/style.css"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="nav-main-container">
      <span className="nav-logo-container">
        <img src={logo} width="170px" height={50} alt=""></img>
      </span>
      <div className="nav-menu-container">
        <ul style={{ liststyle: "no-bullet" }}>
          <li className="nav-menu-li" style={{ marginLeft: "-80px" }}>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li className="nav-menu-li">About</li>
          <li className="nav-menu-li">Menu</li>
          <li className="nav-menu-li">
            <Link style={{ textDecoration: "none" }} to="/booking">
              Reservation
            </Link>
          </li>
          <li className="nav-menu-li">Order online</li>
          <li className="nav-menu-li">Login</li>
        </ul>
      </div>
    </div>
  )
}
