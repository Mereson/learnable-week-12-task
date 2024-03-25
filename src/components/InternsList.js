import React, { useState } from "react"
import internsData, { newInternsData } from "../internsData"
import InternsCard from "./InternsCard"
import "../styles/InternsList.css"
import FindIntern from "./FindIntern"
import EmptyCard from "./EmptyCard"

const InternsList = () => {
  const [selectedIntern, setSelectedIntern] = useState(null)

  return (
    <div className="displayBlock">
      {selectedIntern !== "Display" ? (
        <div className="internsList">
          <div>
            <h1 className="h1">Interns List</h1>
          </div>
          <div
            className="findIntern"
            onClick={() => setSelectedIntern("Display")}
          >
            View Interns Scores
          </div>
          <div className="scroll">
            {newInternsData.map((item) => (
              <div
                className="internBlock"
                onClick={() => setSelectedIntern(item)}
                key={item.id}
              >
                <img src={item.picture} alt="intern" className="image" />{" "}
                <div>
                  {item.name} ({item.track.slice(0, 1).toUpperCase()})
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="internsDisplay">
        {selectedIntern && selectedIntern !== "Display" ? (
          <InternsCard info={selectedIntern} moreInfo={internsData} />
        ) : selectedIntern && selectedIntern === "Display" ? (
          <FindIntern info={newInternsData} setDisplay={setSelectedIntern} />
        ) : (
          <EmptyCard />
        )}
      </div>
    </div>
  )
}

export default InternsList
