import { React, useState, useEffect } from "react"
import logo from "./../assets/lemmon.png"
import "../assets/style.css"
import { Link } from "react-router-dom"

export default function Nav() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches))

    return () => {
      window
        .matchMedia("(min-width: 768px)")
        .removeEventListener("change", (e) => setMatches(e.matches))
    }
  }, [])
  return (
    <div className="nav-main-container">
      {matches && (
        <div>
          <span className="nav-logo-container">
            <img src={logo} width="170px" height={50} alt=""></img>
          </span>
        </div>
      )}
      <div>
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
      </div>
    </div>
  )
}
