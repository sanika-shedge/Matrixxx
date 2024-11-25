class Walker {
  // an idea of a dot that  can move UP,DOWN,LEFT,RIGHT
  constructor(x=200,y=200,step=10,c='yellow') {
    console.log("Hello, the idea was created!!");

    // give the idea of a walker specific properties
    this.x = x;
    this.y = y;
    this.step = step;
    this.dotc=c;
  }

  showUp() {
    stroke(this.dotc);
    strokeWeight(4);
    point(this.x, this.y);
  }
  doOneStep() {
    let changeDirX=  random([-1,+1])
    let changeDirY=  random([-1,+1])
    this.x = this.x +this.step* changeDirX
    this.y = this.y +this.step* changeDirY
    this.showUp()
  }

}