import { React, useState, useEffect } from "react"
import logo from "./../assets/lemmon.png"
import "../assets/style.css"
import { Link } from "react-router-dom"
import Nav from "./Nav"

export default function Header() {
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
    <header className="nav-main-container" style={{ visibility: "visible" }}>
      {matches && (
        <nav className="nav-menu-container-div1">
          <span className="nav-logo-container">
            <img src={logo} width="170px" height={55} alt=""></img>
          </span>
        </nav>
      )}
      <Nav></Nav>
    </header>
  )
}
