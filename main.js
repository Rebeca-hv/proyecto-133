x = 0;
y = 0;

//Establece screen_width y screen_height e inicialízalas en 0
screen_width = 0;
screen_height = 0;

draw_apple = "";

//Define una variable como apple para contener la imagen de una manzana y
//establece esta variable como vacía.
apple = "";

speak_data = "";
to_number = 0;

function preload()
{
  //precargar la imagen
  apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "El sistema está escuchando, por favor habla";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "La voz se reconoció como: " + content; 
    to_number = Number(content);
    if(Number.isInteger(to_number))
    {
      document.getElementById("status").innerHTML = "Se empezó a dibujar una manzana "; 
      draw_apple = "set";
    }
    else
    {
      document.getElementById("status").innerHTML = "No se reconoció un número en la voz "; 
    }

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(screen_width, screen_height-150);
  canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1 ; i <= to_number; i++)
    {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(apple, x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " manzanas dibujadas";
    speak_data = to_number + "Manzanas dibujadas";
    speak();
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}