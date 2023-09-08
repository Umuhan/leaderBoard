// Function to get- the scores for the game
const gameId = "ZQaQBo6va9D34s0Q7FDQ";
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/+${gameId}/scores/`;

const getScores = async () => {
  let listScores;
  try {
    const response = await fetch(`${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const scoreList = await response.json();
    listScores = scoreList.result;
  } catch (error) {
    console.log(error);
  }
  return listScores;
};

export default getScores;
