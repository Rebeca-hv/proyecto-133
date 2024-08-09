x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "El sistema está escuchando; por favor habla";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "La voz se reconoció como: "+ transcript;
    if(content == "círculo"){
        x = math.floor(Math.random() * 900);
        y = math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a dibujar un círculo";
        draw_circle = "set";
    }

    if(content == "rectángulo"){
        x = math.floor(Math.random() * 900);
        y = math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a dibujar un círculo";
        draw_rect = "set";
    }
};

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(draw_circle = "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x,x,radius);
        document.getElementById("status").innerHTML = "Se dibujó un círculo";
        draw_circle = "";
    }

    if(draw_rect = "set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Se dibujó un rectángulo";
        draw_rect = "";
    }
}