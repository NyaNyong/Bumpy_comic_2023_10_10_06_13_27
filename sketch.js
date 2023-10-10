class Car {
  /* Constructor expects parameters for
  fill color, x and y coordinates that
  will be used to initialize class properties.
  */
  constructor(cColor, x, y, l, w) {
    this.color = cColor;
    this.doors = 4;
    this.isConvertible = false;
    this.x = x;
    this.y = y;
    this.l = l;
    this.w = w;
    this.speed = 0;
  }

  start(speed) { // method expects parameter!
    this.speed = speed;
  }

  display() { // method!
    fill(this.color);
    stroke(1);
    rect(this.x, this.y, this.l, this.w);
    
    fill('red');
    noStroke();
    for(let i=0; i<this.doors; i++) {
      circle(this.x + (this.l/this.doors)*i + (this.l/this.doors)/2, this.y + this.w/2, 4);
    }
  }

  move() { // method!
    this.x += this.speed;
    // Wrap x around boundaries
    if (this.x < -this.l) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -this.l;
    }
  }
} //end class Car

let rav4;
let charger;
let nova;

function setup() {
  createCanvas(200, 400);
  /* Construct the 3 Cars */
  //constructor expects cColor, x, y
  rav4 = new Car("silver", 100, 300, 100, 10);
  rav4.doors = 10;
  charger = new Car("gold", 0, 200, 20, 10);  
  charger.doors = 5;
  nova = new Car("blue", 200, 100, 40, 20); 
  nova.doors = 2; //update nova's doors property
  
  console.log("rav4", rav4);
  console.log("charger", charger);
  console.log("nova", nova);
  
  //call start methods of Car instances
  //the start method expects a number for speed
  rav4.start(2.3);
  charger.start(-4);
  nova.start(random([-3, -2, 2, 3]));
}

function draw() {
  background("beige");
  
  //display and move all 3 Cars
  rav4.display();
  charger.display();
  nova.display();
  
  rav4.move();
  charger.move();
  nova.move();
}
