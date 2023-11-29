import React, { useState } from "react"
import { useCollapse } from "react-collapsed"
import "../assets/style.css"

export default function BookingSlot(item, value) {
  console.log("items" + item + "value:" + value)
  const [isExpanded, setExpanded] = useState(true)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  function handleOnClick() {
    // Do more stuff with the click event!
    // Or, set isExpanded conditionally
    setExpanded(!isExpanded)
  }
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
        {isExpanded ? "Collapse" : "Expand"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          Now you can see the hidden content. <br />
          <br />
          Click again to hide...
        </div>
      </div>
    </div>
  )
}
