var num=6;
var colors=[];
var square=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("note");
var title=document.querySelector(".title");
var playAgain=document.querySelector("#play-again");
var easy=document.querySelector(".easy");
var hard=document.querySelector(".hard");
var mode=document.querySelectorAll(".mode");
Default();
function Default(){
    select();
    reset();
    SquareChoice();
};
function SquareChoice(){
    for(var i=0;i<square.length;i++){
        square[i].addEventListener("click",function(){
            if(this.style.backgroundColor==pickedColor){
                ChangeColor(pickedColor);
                message.textContent="Correct !";
                playAgain.textContent="PLAY AGAIN ?";
            }else{
                this.style.backgroundColor="#232323";
                message.textContent="Try again !";
            }
       })
        }
        playAgain.addEventListener("click",reset);
};
function select(){
    for (var i = 0; i < mode.length; i++) {
      mode[i].addEventListener("click",function(){
         easy.classList.remove("selected");
         hard.classList.remove("selected");
         this.classList.add("selected");
         this===easy ? num=3 : num=6 ;
         reset();
         }
        )
    }
};

function reset(){
    colors=colorArray(num);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    message.textContent="";
    for(var i=0;i<square.length;i++){
        if(colors[i]){
            square[i].style.backgroundColor=colors[i];
            square[i].classList.remove("hidden");
        }else{
            square[i].classList.add("hidden");
        }
    }
    title.style.backgroundColor="teal";
    playAgain.textContent="New colors";
};

function ChangeColor(color){
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor=pickedColor;
    }
    title.style.backgroundColor=pickedColor;
}
function pickColor(){
    var num=Math.floor(Math.random()*colors.length);
    return colors[num];
}
function colorArray(num){
    var arr=[];
    for (var j = 0; j < num; j++) {
        arr.push(randomColor());
    };
    return arr;
}
function randomColor(){
      var r=Math.floor(Math.random()*256);
      var g=Math.floor(Math.random()*256);
      var b=Math.floor(Math.random()*256);
      var color= String("rgb("+ r +", " + g + ", " + b + ")");
      return color;
};



