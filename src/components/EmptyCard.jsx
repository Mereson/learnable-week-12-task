import React from "react"
import "../styles/EmptyCard.css"

const EmptyCard = () => {
  return (
    <div className="empty">
      <img
        className="emptyState"
        src={require("../images/photo_2024-03-25_17-10-53.jpg")}
        alt="emptyState"
      />
    </div>
  )
}

export default EmptyCard
