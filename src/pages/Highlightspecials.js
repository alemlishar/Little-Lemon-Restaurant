import React, { useState, useEffect } from "react"
import "../assets/style.css"
import specialDatas from "./../assets/Special-food-list"
import SpecialFood from "./SpecialFood"

export default function Highlightspecials() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  )
  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches))

    return () => {
      window
        .matchMedia("(min-width: 900px)")
        .removeEventListener("change", (e) => setMatches(e.matches))
    }
  }, [])

  return (
    <div className="highlight-main-container">
      <div
        style={{
          width: "100%",
          height: "100px",
        }}
      >
        <p className="highlight-special-paragraph">This Weeks Specials!</p>
        {matches && (
          <div>
            <button className="highlight-order-button">Online menu</button>
          </div>
        )}
      </div>
      <div className="special-food-specialbox-container" id="special container">
        {specialDatas.map((data) => (
          <SpecialFood
            key={data.id}
            image={data.getImageSrc()}
            title={data.title}
            description={data.description}
            price={data.price}
          />
        ))}
      </div>
    </div>
  )
}
