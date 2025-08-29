var x = 0;
var y = 0;
var canvas; /*lenguaje javascript*/

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo"); /* "hay algo que tiene identidad, necesito que se inserte ahi" */
  canvas.position(0,0);5
  canvas.style('z-index','-1');
  /* background("lightblue"); --> deja la estela */
   /* framrate(12); --> no me funcionooooo */
  frameRate (24); 
  noStroke();

}

function draw() {
  colorMode (HSB,359,255,255);
  background (map(mouseX, 0, windowWidth, 0,360), 100, map(mouseY, 0, windowHeight, 50, 100));
   /*background("lightblue");  /*aqui hace que la estela desaparezca*/
  x = lerp(x, mouseX, 0.1);  /*x q parte siendo 0 ahora tiene una nueva asignación, por matemática cada vez q se ejecute va a ir entrando el resultado de la anterior función. cmo un loop*/
  y = lerp(y, mouseY, 0.1);
  fill("white");
  textSize(random(100,200));
  text("☁️",x,y);



}








function windowResized() { /* agregar esto permite q el canvas vaya cambiando tamaño "liquidamente" cuando cambio el tamaño d la ventana*/
  resizeCanvas(windowWidth, windowHeight);
}



