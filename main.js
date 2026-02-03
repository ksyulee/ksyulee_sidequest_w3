let currentScreen = "start";
let round = 1;
let startBg;
let quizImg1;
let quizImg2;

function setup() {
  createCanvas(800, 800);
  textFont("sans-serif");


  // Load images
  startBg = loadImage(
    "images/start-bg.jpg",
  );

  quizImg1 = loadImage(
    "images/quizImg1.jpeg",
  );

  quizImg2 = loadImage(
    "images/quizImg2.jpeg",
  );
}

function draw() {
  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "quiz") drawQuiz();
  else if (currentScreen === "game") drawGame();
  else if (currentScreen === "win") drawWin();
  else if (currentScreen === "lose") drawLose();
}

function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "instr") instrMousePressed();
  else if (currentScreen === "quiz") quizMousePressed();
  else if (currentScreen === "game") gameMousePressed?.();
  else if (currentScreen === "win") winMousePressed?.();
  else if (currentScreen === "lose") loseMousePressed?.();
}

function keyPressed() {
  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "instr") instrKeyPressed();
  else if (currentScreen === "quiz") quizKeyPressed?.();
  else if (currentScreen === "game") gameKeyPressed?.();
  else if (currentScreen === "win") winKeyPressed?.();
  else if (currentScreen === "lose") loseKeyPressed?.();
}

// Shared hover helper (buttons use rectMode(CENTER))
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}
