function drawStart() {
  // Background
  if (startBg) image(startBg, 0, 0, width, height);
  else background(180, 225, 220);

  // Overlay for readability
  rectMode(CORNER);
  noStroke();
  fill(255, 255, 255, 140);
  rect(0, 0, width, height);

  // Title
  fill(30, 50, 60);
  textSize(46);
  textAlign(CENTER, CENTER);
  text("Meet Ksenia", width / 2, 180);

  // Buttons
  const startBtn = { x: width / 2, y: 520, w: 240, h: 80, label: "START" };
  const instrBtn = { x: width / 2, y: 640, w: 240, h: 80, label: "INSTRUCTIONS" };
  drawButton(startBtn);
  drawButton(instrBtn);
  cursor(isHover(startBtn) || isHover(instrBtn) ? HAND : ARROW);
}
function startMousePressed() {
  const startBtn = { x: width / 2, y: 520, w: 240, h: 80 };
  const instrBtn = { x: width / 2, y: 640, w: 240, h: 80 };
  if (isHover(startBtn)) {
    round = 1;                // ✅ always restart at round 1
    currentScreen = "quiz";
  } else if (isHover(instrBtn)) {
    currentScreen = "instr";
  }
}

function startKeyPressed() {
  if (keyCode === ENTER) {
    round = 1;                // ✅ always restart at round 1
    currentScreen = "quiz";
  }

  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}

// Shared button style (used on start + quiz)
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(255, 200, 150, 220);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210);
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  rect(x, y, w, h, 14);
  drawingContext.shadowBlur = 0;

  fill(40, 60, 70);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

