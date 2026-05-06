// Popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Search
function openSearch() {
  document.getElementById("searchBox").style.display = "block";
}

// Background Snake Animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snake = [{x: 200, y: 200}];
let food = {x: 400, y: 300};

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // food
  ctx.fillStyle = "#ff4081";
  ctx.beginPath();
  ctx.arc(food.x, food.y, 6, 0, Math.PI*2);
  ctx.fill();

  // snake
  snake.forEach((p,i)=>{
    ctx.fillStyle = i==0 ? "#111" : "#555";
    ctx.fillRect(p.x,p.y,6,6);
  });

  let head = {...snake[0]};

  if(head.x < food.x) head.x += 1;
  else head.x -= 1;

  if(head.y < food.y) head.y += 1;
  else head.y -= 1;

  snake.unshift(head);

  if(Math.abs(head.x-food.x)<5 && Math.abs(head.y-food.y)<5){
    food.x = Math.random()*canvas.width;
    food.y = Math.random()*canvas.height;
  } else {
    snake.pop();
  }

  requestAnimationFrame(animate);
}

animate();;

// (Include the Snake Game code from previous response here)