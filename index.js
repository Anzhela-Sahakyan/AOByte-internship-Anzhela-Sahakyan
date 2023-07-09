const triangleContainer = document.getElementById("triangle");
const rotatedTriangleContainer = document.getElementById("rotatedTriangle");
const input = document.getElementById("input");
let counter = 0;

let isTriangleRendered = false;
let isTriangleRotated = false;

function resetTriangles() {
  isTriangleRendered = false;
  isTriangleRotated = false;
  triangleContainer.innerHTML = "";
  rotatedTriangleContainer.innerHTML = "";
}

function renderTriangle() {
  resetTriangles();
  const symbol = "\u{1F642}";
  const number = parseInt(input.value);
  let triangle = "";
  if (number < 10) {
    for (let i = 1; i <= number; i++) {
      triangle += symbol.repeat(i) + "<br>";
    }

    triangleContainer.innerHTML = triangle;
  } else {
    document.getElementById("errorMsg").innerText =
      "The number should be less than 10";
  }
  console.log(counter);
  console.log(counter);
  isTriangleRendered = true;
}

function rotate() {
  if (isTriangleRotated) {
    return;
  }
  renderTriangle();
  const symbol = "\u{1F635}";
  const number = parseInt(input.value);
  let triangle = "";

  if (number && number < 10) {
    for (let i = number; i > 0; i--) {
      triangle += symbol.repeat(i) + "<br>";
    }

    rotatedTriangleContainer.innerHTML = triangle;
  } else {
    document.getElementById("errorMsg").innerText =
      "The number should be more than 0 and  less than 10";
  }
  isTriangleRotated = true;
}

document.getElementById("rotateBtn").addEventListener("click", rotate);
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    renderTriangle();
  }
});
