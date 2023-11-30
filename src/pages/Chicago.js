import { React, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function () {
  const aboutParagraph =
    "   We are family owned Meditrannean restaurant, focus on traditional" +
    "recipes served with a modern twist."

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
    <>
      <nav style={{ position: "absolute", left: "32%" }}>
        <p className="main-title">Little Lemmon</p>
        <p className="main-chicago">Chicago</p>
        <h6 className="main-about">{aboutParagraph}</h6>
        {matches && (
          <button
            className="main-reserve-button"
            onClick={(e) => {
              e.preventDefault()
              navigate("/booking")
            }}
          >
            Reserve a Table
          </button>
        )}
      </nav>
    </>
  )
}
