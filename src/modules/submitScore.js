// Function to submit a new score for the game
const gameId = "nW54veMAwMrmu452Q46k";
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/+${gameId}/scores/`;

const submitScore = async (userdata) => {
  console.log(userdata);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(userdata),
    });
    const data = await response.json();
    const notifyResult = document.getElementById("result");
    notifyResult.innerText = data.result;
  } catch (error) {
    return error;
  }
};

export default submitScore;
