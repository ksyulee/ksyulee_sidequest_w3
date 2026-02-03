quiz.js

function getQuizImage() {
  if (round === 1) return quizImg1;
  if (round === 2) return quizImg2;
  return null;
}

function getCorrectAnswer() {
  if (round === 1) return 2;  
  if (round === 2) return 6;  
  return null;
}

function getButtons() {
  if (round === 1) {
    return [
      { x: 400, y: 520, w: 240, h: 80, label: "Age 2", value: 2 },
      { x: 400, y: 630, w: 240, h: 80, label: "Age 4", value: 4 },
    ];
  }

  if (round === 2) {
    return [
      { x: 400, y: 520, w: 240, h: 80, label: "Age 7", value: 7 },
      { x: 400, y: 630, w: 240, h: 80, label: "Age 6", value: 6 },
    ];
  }

  return [];
}

function drawQuiz() {
  const img = getQuizImage();

  if (img) {
  if (round === 2) {
    image(img, 0, 120, width, height - 120); // round 2 lower
  } else {
    image(img, 0, 0, width, height);         // round 1 normal
  }
} else {
  background(230);
}

  rectMode(CORNER);
  noStroke();
  fill(255, 220);
  rect(0, 0, width, 120);

  fill(30, 50, 60);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("How old am I here?", width / 2, 60);

  const buttons = getButtons();
  buttons.forEach(drawButton);

  cursor(buttons.some(isHover) ? HAND : ARROW);
}

function quizMousePressed() {
  const buttons = getButtons();
  const correct = getCorrectAnswer();

  for (const b of buttons) {
    if (isHover(b)) {
      if (b.value === correct) {
        if (round === 1) {
          round = 2;
          currentScreen = "quiz"; 
        } else {
          currentScreen = "win"; 
        }
      } else {
        currentScreen = "lose"; 
      }
      return;
    }
  }
}