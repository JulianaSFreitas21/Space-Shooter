const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');

//função movimento e tiro da nave
function flyAhip(event) {
  if(event.key === 'ArrowUp'){
    event.preventDefault();
    moveUp();
  }else if(event.key === 'ArrowDown'){
    event.preventDefault();
      moveDown();
  }else if(event.key === " "){
    event.preventDefault();
      fireLaser();
  }
}

// função de subir
function moveUp() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top'); // getComputedStyle devolve o código style
  //getPropertyValue puxar o valor desejado
  if (topPosition === "0px") {
    return
  }else{
    let position = parseInt(topPosition);
    position -= 50;

    yourShip.style.top = `${position}px`
  }
}

// função de descer
function moveDown() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top'); // getComputedStyle devolve o código style
  //getPropertyValue puxar o valor desejado
  if (topPosition >= "501px") {
    return
  }else{
    let position = parseInt(topPosition);
    position += 50;

    yourShip.style.top = `${position}px`
  }
}

//funcionalidade de tiro
function fireLaser(){
  let laser = createLaserElement();
  playArea.appendChild(laser);
  moveLaser(laser);
}

function createLaserElement() {
  let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
  let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
  let newLaser = document.createElement('img');
  newLaser.src = 'img/shoot.png';
  newLaser.classList.add('laser');
  newLaser.style.left = `${xPosition}px`;
  newLaser.style.top = `${yPosition - 10}px`;
  return newLaser;
}

function moveLaser(laser){
  let laserInterval = setInterval(() => {
    let xPosition = parseInt(laser.style.left);

    if(xPosition >= 400){
      laser.remove();
    }else{
      laser.style.left = `${xPosition + 8}px`;
    }
  }, 10);
}

window.addEventListener('keydown', flyAhip)