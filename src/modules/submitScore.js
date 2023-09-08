// Function to submit a new score for the game
const gameId = "ZQaQBo6va9D34s0Q7FDQ";
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const submitScore = async (name, score) => {
  try {
    const response = await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        score,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default submitScore;
