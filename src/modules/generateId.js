const theUrl =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
const playData = { name: "Umu" };

const gameData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

gameData(theUrl, playData).then((res) => {
  console.log(res);
});
