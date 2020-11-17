let game

function setup() {
  createCanvas(800, 600)
  game = new Game()
}

function draw() {
  background( 6, 58, 78)
  game.draw()
}

function keyPressed(){
  game.keyPressed()
}