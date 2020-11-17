class Enemy {
  constructor(x, y) {
    this.position = createVector(x, y)
    this.velocity = createVector()

    this.maxSpeed = 5
    this.maxSteer = 0.5
    this.life = 3
  }

  draw() {
    
    // calcular todos los vectores deseados
    let desiredSeparate = SteeringBehaviours.separate(this, Global.enemies, 70)

    // sumar todos los deseados
    let desired = desiredSeparate

    // cálculo del vector steer y se calcula la velocidad y la posición
    let steer = SteeringBehaviours.calculateSteer(this, desired)
    this.velocity.add(steer)
    this.position.add(this.velocity)

    // se dibuja el npc y el rango de acción
    fill( 255, 139, 114)
    noStroke()
    circle(this.position.x, this.position.y, 30)
    
    textSize(15)
    fill('white')
    text(this.life.toString(), this.position.x - 5, this.position.y - 20)

  }
}
