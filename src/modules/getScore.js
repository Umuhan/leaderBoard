// Function to get- the scores for the game
const gameId = 'nW54veMAwMrmu452Q46k';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/+${gameId}/scores/`;

const getScores = async () => {
  const response = await fetch(url);
  const responseData = await response.json();

  return responseData;
};

export default getScores;
