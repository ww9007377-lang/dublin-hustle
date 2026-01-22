const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: 200, y: 200, size: 25, speed: 4 };
let garda = { x: 50, y: 50, size: 25, speed: 2 };

let keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

["up","down","left","right"].forEach(id=>{
    document.getElementById(id).ontouchstart = () => keys[id] = true;
    document.getElementById(id).ontouchend = () => keys[id] = false;
});

function movePlayer() {
    if(keys["w"] || keys["up"]) player.y -= player.speed;
    if(keys["s"] || keys["down"]) player.y += player.speed;
    if(keys["a"] || keys["left"]) player.x -= player.speed;
    if(keys["d"] || keys["right"]) player.x += player.speed;
}

function moveGarda() {
    let dx = player.x - garda.x;
    let dy = player.y - garda.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    garda.x += (dx/dist) * garda.speed;
    garda.y += (dy/dist) * garda.speed;
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "lime";
    ctx.fillRect(player.x, player.y, player.size, player.size);
    ctx.fillStyle = "blue";
    ctx.fillRect(garda.x, garda.y, garda.size, garda.size);
}

function loop() {
    movePlayer();
    moveGarda();
    draw();
    requestAnimationFrame(loop);
}

loop();
