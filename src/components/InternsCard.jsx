import React from "react"
import "../styles/InternsCard.css"
import ScoreCard from "./ScoreCard"
import { newInternsData } from "../internsData"

const InternsCard = ({ info }) => {
  const internDetail = newInternsData.filter((data) => data.id === info.id)
  let degree = Math.ceil((internDetail[0].scoreTotal / 100) * 440)
  degree = 440 - degree

  return (
    <div className="internsCard">
      <div className="card">
        <h1>Interns Details</h1>
        <div className="infoSection">
          <div className="picture">
            <img src={info.picture} alt="Intern" />
          </div>
          <div className="info">
            <h3>Interns Name: {info.name}</h3>
            <h3>Learning Track: {info.track} </h3>
            <p>
              <b>Mentors Remark:</b> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Velit eius eaque totam aliquam sint quas minus,
              vel eos eum. Fugiat.
            </p>
          </div>
        </div>
      </div>
      <div className="progressSection">
        <div className="performance">
          <h4>Interns Performance</h4>
          <div className="grid">
            <div className="grid1">
              <p>Weeks Completed: 12/12</p>
              <p>Tasks Submited: {info.submitted}/11</p>
              <p>Task Score: {info.score}%</p>
              <p>Attendance Score: {info.attendance}% </p>
              <p>Appraisal Score: {info.appraisal} </p>
            </div>
            <div className="grid2">
              <div className="container">
                <div className="outer">
                  <div className="inner">
                    <div id="number">{internDetail[0].scoreTotal}%</div>
                  </div>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width={"160px"}
                  height={"160px"}
                >
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset={"0%"} stopColor="#e91e63"></stop>
                      <stop offset={"100%"} stopColor="#673eb7"></stop>
                    </linearGradient>
                  </defs>
                  <circle
                    style={{
                      fill: "none",
                      stroke: "url(#GradientColor)",
                      strokeWidth: "20px",
                      strokeDasharray: 440,
                      strokeDashoffset: `${degree}`,
                      animation: "anim 2s linear forwards",
                    }}
                    cx={"80"}
                    cy={"80"}
                    r={"70"}
                    strokeLinecap="butt"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <ScoreCard
          theme={"internsRank"}
          info={"Interns Rank"}
          rank={internDetail[0].rank}
        />
      </div>
    </div>
  )
}

export default InternsCard
