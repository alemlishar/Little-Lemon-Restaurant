import { React, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "./../assets/footer-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
]

export default function Footer() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1000px)").matches
  )
  useEffect(() => {
    window
      .matchMedia("(min-width: 1000px)")
      .addEventListener("change", (e) => setMatches(e.matches))

    return () => {
      window
        .matchMedia("(min-width: 1000px)")
        .removeEventListener("change", (e) => setMatches(e.matches))
    }
  }, [])
  const socialMedia = socials.map((social, index) => (
    <a
      key={social.url}
      style={{ marginLeft: "20px", color: "#f4ce14" }}
      href={social.url}
    >
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </a>
  ))
  return (
    <footer className="footer-main-container">
      {matches && (
        <nav className="footer-logo-container">
          <img
            src={logo}
            width="75px"
            height="120px"
            alt=""
            style={{ backgroundColor: "#495e57", color: "#495e57" }}
          ></img>
        </nav>
      )}
      {matches && (
        <nav style={{ left: "30%" }}>
          <ul
            className="footer-menu-container"
            style={{ liststyle: "no-bullet", display: "inline" }}
          >
            <li className="footer-menu-li">Home</li>
            <li className="footer-menu-li">About</li>
            <li className="footer-menu-li">Menu</li>
            <li className="footer-menu-li">Reservation</li>
            <li className="footer-menu-li">Order online</li>
            <li className="footer-menu-li">Login</li>
          </ul>
        </nav>
      )}
      <nav className="footer-address-container">
        <p className="footer-contact">Contact</p>
        <p className="footer-address">Chicago, Illinois 60602</p>
        <p className="footer-address">call: 312.744.5000</p>
        <p className="footer-address">contact.littlelemon@gmail.com</p>
      </nav>
      {matches && (
        <nav className="footer-social-media">
          <span style={{ marginBottom: "55px" }}>{socialMedia}</span>
        </nav>
      )}
    </footer>
  )
}
