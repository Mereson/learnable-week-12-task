const internsData = [
  {
    id: 1,
    name: "Isabella King",
    picture: require("./images/stuff (1).jpg"),
    track: "Front End",
    submitted: 7,
    score: 53,
    attendance: 81,
    appraisal: 3.8,
  },
  {
    id: 2,
    name: "Michael Johnson",
    picture: require("./images/stuff (2).jpg"),
    track: "Back End",
    submitted: 5,
    score: 14,
    attendance: 67,
    appraisal: 2.3,
  },
  {
    id: 3,
    name: "Sophia Garcia",
    picture: require("./images/stuff (3).jpg"),
    track: "Product Design",
    submitted: 10,
    score: 92,
    attendance: 22,
    appraisal: 4.6,
  },
  {
    id: 4,
    name: "Lana Del-rey",
    picture: require("./images/stuff (4).jpg"),
    track: "Web 3",
    submitted: 11,
    score: 90,
    attendance: 95,
    appraisal: 4.5,
  },
  {
    id: 5,
    name: "Jane Smith",
    picture: require("./images/stuff (5).jpg"),
    track: "Front End",
    submitted: 9,
    score: 42,
    attendance: 95,
    appraisal: 4.2,
  },
  {
    id: 6,
    name: "Sarah Lee",
    picture: require("./images/stuff (6).jpg"),
    track: "Back End",
    submitted: 11,
    score: 88,
    attendance: 98,
    appraisal: 4.7,
  },
  {
    id: 7,
    name: "David Rodriguez",
    picture: require("./images/stuff (7).jpg"),
    track: "Product Design",
    submitted: 6,
    score: 57,
    attendance: 100,
    appraisal: 3.1,
  },
  {
    id: 8,
    name: "Emily Chen",
    picture: require("./images/stuff (8).jpg"),
    track: "Web 3",
    submitted: 4,
    score: 88,
    attendance: 73,
    appraisal: 4.3,
  },
  {
    id: 9,
    name: "Matthew Brown",
    picture: require("./images/stuff (9).jpg"),
    track: "Front End",
    submitted: 10,
    score: 90,
    attendance: 88,
    appraisal: 4.0,
  },
  {
    id: 10,
    name: "Ethan Wilson",
    picture: require("./images/stuff (25).jpg"),
    track: "Back End",
    submitted: 11,
    score: 96,
    attendance: 69,
    appraisal: 2.6,
  },
  {
    id: 11,
    name: "Olivia Davis",
    picture: require("./images/stuff (11).jpg"),
    track: "Product Design",
    submitted: 7,
    score: 50,
    attendance: 63,
    appraisal: 3.6,
  },
  {
    id: 12,
    name: "Ava Martinez",
    picture: require("./images/stuff (12).jpg"),
    track: "Web 3",
    submitted: 10,
    score: 89,
    attendance: 76,
    appraisal: 4.4,
  },
  {
    id: 13,
    name: "James Anderson",
    picture: require("./images/stuff (13).jpg"),
    track: "Front End",
    submitted: 11,
    score: 78,
    attendance: 98,
    appraisal: 4.9,
  },
  {
    id: 14,
    name: "Jack Frost",
    picture: require("./images/stuff (14).jpg"),
    track: "Back End",
    submitted: 9,
    score: 86,
    attendance: 95,
    appraisal: 4.1,
  },
  {
    id: 15,
    name: "William Nguyen",
    picture: require("./images/stuff (26).jpg"),
    track: "Product Design",
    submitted: 10,
    score: 55,
    attendance: 96,
    appraisal: 4.3,
  },
  {
    id: 16,
    name: "John Doe",
    picture: require("./images/stuff (16).jpg"),
    track: "Web 3",
    submitted: 9,
    score: 94,
    attendance: 40,
    appraisal: 4.3,
  },
  {
    id: 17,
    name: "Mia White",
    picture: require("./images/stuff (17).jpg"),
    track: "Front End",
    submitted: 11,
    score: 87,
    attendance: 59,
    appraisal: 3.8,
  },
  {
    id: 18,
    name: "Alexander Baker",
    picture: require("./images/stuff (18).jpg"),
    track: "Back End",
    submitted: 9,
    score: 37,
    attendance: 79,
    appraisal: 3.2,
  },
  {
    id: 19,
    name: "Benjamin Lewis",
    picture: require("./images/stuff (19).jpg"),
    track: "Product Design",
    submitted: 10,
    score: 70,
    attendance: 15,
    appraisal: 2.7,
  },
  {
    id: 20,
    name: "Charlotte Young",
    picture: require("./images/stuff (20).jpg"),
    track: "Web 3",
    submitted: 8,
    score: 83,
    attendance: 87,
    appraisal: 3.9,
  },
]

const overallScore = (info) => {
  const appraisalScore = (info.appraisal / 5) * 20
  const submittedScore = (info.submitted / 11) * 10
  const attendanceScore = (info.attendance / 100) * 20
  const taskScore = (info.score / 100) * 50
  const scoreTotal = Math.ceil(
    appraisalScore + taskScore + attendanceScore + submittedScore
  )

  const internScore = {
    scoreTotal: scoreTotal,
    id: info.id,
  }
  return internScore
}

const calculateRank = (info) => {
  let rankArray = []
  info.map((item) => {
    rankArray.push(overallScore(item))
    return rankArray
  })

  rankArray.sort((a, b) => b.scoreTotal - a.scoreTotal)

  const rankedDetails = rankArray.map((score, index) => {
    const detailObj = info.find((detail) => detail.id === score.id)

    if (detailObj) {
      return {
        name: detailObj.name,
        id: detailObj.id,
        rank: index + 1,
        track: detailObj.track,
        appraisal: detailObj.appraisal,
        attendance: detailObj.attendance,
        score: detailObj.score,
        scoreTotal: score.scoreTotal,
        picture: detailObj.picture,
        submitted: detailObj.submitted,
      }
    }

    return null
  })

  return rankedDetails
}

const newInternsData = calculateRank(internsData)

export { newInternsData }

export default internsData
