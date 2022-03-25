
//for click
for(var i=0; i<document.querySelectorAll(".drum").length;i++ )
{
document.querySelectorAll(".drum")[i].addEventListener("click", function ()
{ 

    console.log(this);
    var buttonHTML = this.innerHTML;
    makesound(buttonHTML);
    makeAnimation(buttonHTML);
    
});
}

//for keyboard
document.addEventListener("keypress" ,function(event){
  console.log(event.key);
  makesound(event.key);
  makeAnimation(event.key)
});

 function makesound(key) {
  switch (key) {
   case "w":
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
       break;

       case "a":
    var audio=new Audio('sounds/tom-2.mp3');
    audio.play();
       break;

       case "s":
    var audio=new Audio('sounds/tom-3.mp3');
    audio.play();
       break;

       case "d":
    var audio=new Audio('sounds/tom-4.mp3');
    audio.play();
       break;

       case "j":
    var audio=new Audio('sounds/snare.mp3');
    audio.play();
       break;

       case "k":
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
       break;

       case "l":
    var audio=new Audio('sounds/kick-bass.mp3');
    audio.play();
       break;
   default:
       console.log(buttonHTML);
       break;



  }}
  
  //Animation
  function makeAnimation(key2)
  {
   document.querySelector("."+key2).classList.add('pressed');

    setTimeout(function(){
      document.querySelector("."+key2).classList.remove('pressed');
    },100);
  }


