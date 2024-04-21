const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "쪼아! 고마워 &#128522; 나중에 영상통화하면서 놀자~~ &#128518;"; 
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXcybmF5NGZhdWk1enFqMXB5aDVmd3I3Mng5azdjNDgyYWdzc2pyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lpU91npgmwIvkrMVDK/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});