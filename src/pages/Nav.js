import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <>
      <nav className="nav-menu-container-div">
        <ul className="nav-menu-container" style={{ liststyle: "no-bullet" }}>
          <li className="nav-menu-li">
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
      </nav>
    </>
  )
}
