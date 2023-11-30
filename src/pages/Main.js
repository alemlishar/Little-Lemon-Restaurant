import React, { useState, useEffect } from "react"
import logo from "./../assets/restauranfood.jpg"
import { useNavigate } from "react-router-dom"
import Chicago from "./Chicago"

export default function Main() {
  const navigate = useNavigate()
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 500px)")
      .addEventListener("change", (e) => setMatches(e.matches))

    return () => {
      window
        .matchMedia("(min-width: 500px)")
        .removeEventListener("change", (e) => setMatches(e.matches))
    }
  }, [])

  return (
    <nav className="main-container">
      <Chicago />
      {matches && (
        <div className="main-logo">
          <img src={logo} width="190px" height="220px" alt="hey"></img>
        </div>
      )}
    </nav>
  )
}
