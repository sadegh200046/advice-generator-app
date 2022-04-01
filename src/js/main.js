const API_URL = "https://api.adviceslip.com/advice";
const adviceNum = document.querySelector(".advice-num_api");
const adviceText = document.querySelector(".advice-blockqoute_api");
const adviceDice = document.querySelector(".advice-dice");
const getRandomAdvice = async function (url) {
  const data = await fetch(url);
  const {
    slip: { id: number, advice: message },
  } = await data.json();
  return {
    number,
    message,
  };
};
const textChange = async function () {
  const { number, message } = await getRandomAdvice(API_URL);
  adviceNum.textContent = number;
  adviceText.textContent = `${message}`;
};
adviceDice.addEventListener("click", textChange);
textChange();
