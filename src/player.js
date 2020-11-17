class Player {

  constructor() {

    // Declaro mis valores para el constructor
    this.position = createVector(100, 300)
    this.speed = 5
    this.velocity = createVector()
  }

  draw() {

    // SE MOVERA CON W - S

    if(keyIsDown(87) && this.position.y > 100){
      this.position.y -= this.speed
    }

    if(keyIsDown(83) && this.position.y < 500){
      this.position.y += this.speed
    }

    fill(65, 188, 107)
    noStroke()
    circle(this.position.x, this.position.y, 40)    
  }
}