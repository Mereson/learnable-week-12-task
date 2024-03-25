import React from "react"
import "../styles/FindIntern.css"
import ScoreCard from "./ScoreCard"

const FindIntern = ({ info, setDisplay }) => {
  return (
    <div>
      <div className="rankDisplay">
        <ScoreCard
          theme={"internsRankCard drop silver"}
          info={info[1].name}
          rank={info[1].rank}
        />
        <ScoreCard
          theme={"internsRankCard top gold"}
          info={info[0].name}
          rank={info[0].rank}
        />
        <ScoreCard
          theme={"internsRankCard drop bronze"}
          info={info[2].name}
          rank={info[2].rank}
        />
      </div>
      <div className="nav">
        <p className="name navItems">Name</p>
        <p className="others navItems">Rank</p>
        <p className="track navItems">Track</p>
        <p className="others navItems">Appraisal</p>
        <p className="others navItems">Attendance</p>
        <p className="others navItems">Task Score</p>
        <p className="others navItems last">Total Score</p>
      </div>
      {info.map((item) => (
        <div onClick={() => setDisplay(item)} className="internsListDisplay">
          <p className="name cursor">{item.name}</p>
          <p className="others">{item.rank}</p>
          <p className="track">{item.track}</p>
          <p className="others">{item.appraisal}</p>
          <p className="others">{item.attendance}%</p>
          <p className="others">{item.score}%</p>
          <p className="others last">{item.scoreTotal}%</p>
        </div>
      ))}
    </div>
  )
}

export default FindIntern
