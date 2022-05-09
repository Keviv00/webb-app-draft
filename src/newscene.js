function newscene()
{
    var isDay = true;
    var posX, posY;
    var speedX, speedY;
    var x = 450
    var y = 200
    var offX = 0;
    var offY = 0;

  this.setup = function()
  {
   // gui = createGui();

     posX = width/10;
  posY = height/8;
  
  speedX = 5;
  speedY = -5;
    
  }
  
  this.enter = function()
  {   
    //gui.show();

  }

  this.exit = function()
  {
    //gui.hide();
  }

  this.draw = function()
  {
    background('#aaaaaa');
    posX += speedX;
  
    if (posX >= width+100) {
     posX = -100;
   
   }
   
   if(isDay)  {
     background(0, 155, 255);
   } 
   else {
     background(0);
 
   }
   
  noStroke();  
   
    offX = sin(2.5 + frameCount / 20) * 100;
     offY = cos(2.0 + frameCount / 25) * 150;
     if(isDay) {
     fill(255, 188, 66)
     circle(x + offX, y + offY, 100);
   } else {
     fill(255, 255, 255)
     circle(x + offX, y + offY, 100)
   }
   
  
   
   fill(107, 219, 66);
   rect(00, 300, 700, 200);
   
   
   fill(117, 80, 44);
   rect(200, 200, 40, 200);
   
   fill('white');
   ellipse(posX, posY, 50,  50);
   ellipse(posX, posY, 100, 60);
   ellipse(posX, posY, 150, 40);
 
   fill(107, 219, 66)
   triangle(300, 245, 228, 80, 140, 245);
    pop();
  }
 
  function mousePressed(){
    isDay = !isDay;
  }
}
