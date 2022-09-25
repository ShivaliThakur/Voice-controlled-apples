x = 0;
y = 0;

draw_apple = "";
screen_height= 0;
screen_width= 0;
apple = "";
speak_data= "";
to_number= "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
    apple= loadImage('apples.png');
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

     if(Number.isInteger(to_number)){
        draw_apple = 'set';
    }
    else{
        document.getElementById("status").innerHTML= "Your speech has not been recognized as a number";
    }

    console.log(event); 

    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);

}

function setup() {
    screen_width= window.innerWidth;
    screen_height = window.innerHeight;
 canvas= createCanvas(screen_width, screen_height-150);

}

function draw(){
    if(draw_apple == "set")
    {
      for(var i = 1; i <= to_number; i++){
          x= Math.floor(Math.random() * 700);
          y= Math.floor(Math.random() * 400);
          image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML= to_number + "Apples Drawn";
    speak();
    console.log(to_number);
  }
}



function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number + "Apples drawn";
}





