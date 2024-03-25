import React from "react"

const ScoreCard = ({ theme, info, rank }) => {
  return (
    <div className={theme}>
      <h2>{info}</h2>
      <h1>{rank}</h1>
    </div>
  )
}

export default ScoreCard
