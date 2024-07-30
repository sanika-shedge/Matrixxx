let collectionOfColors=['#00BCD4','#009688','#4CAF50','#03A9F4','#8BC34A','black']
let walkingTeam=[];
for (let t=0; t<collectionOfColors.length; t++) {
  walkingTeam[t]= new Walker(500,400,5,collectionOfColors[t]);
}






//let traveller = new Walker(250,250,2,'green');
//let traveller2 = new Walker(200,200,5,'#F44336');
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60000000);
  //traveller.showUp();
  //traveller2.showUp();

}

function draw() {
  for(let t=0;t<walkingTeam.length; t++) {
    walkingTeam[t].doOneStep();
  }
  // make my traveller do a step on each frame
  //traveller.doOneStep();
  //traveller2.doOneStep();
}