var gameptrn = [];
var usrclckptrn = [];
var usrchsnclr;
var level =0;
var started = 0;
var btnclr = ["red","blue","green","yellow"];
$(document).keypress(function(){
    if(started!==1){
        started=1;
        nextSeq();
    }
});


// $(document).ready(() => {
//     setInterval(() => {
//         $('#'+btnclr[rndmclr]).fadeIn();
//         $('#'+btnclr[rndmclr]).fadeOut();
//     }, 500);
// });




$("#red").click(function(){
    usrchsnclr = "red";
    usrclckptrn.push("red");
    playsound("red");
    animate("red");
    checkanswer();
});

$("#green").click(function(){
    usrchsnclr = "green";
    usrclckptrn.push("green");
    playsound("green");
    animate("green");
    checkanswer();
});

$("#blue").click(function(){
    usrchsnclr = "blue";
    usrclckptrn.push("blue");
    playsound("blue");
    animate("blue");
    checkanswer();
});

$("#yellow").click(function(){
    usrchsnclr = "yellow";
    usrclckptrn.push("yellow");
    playsound("yellow");
    animate("yellow");
    checkanswer();
});



function nextSeq(){
    var n =  Math.floor(Math.random()*4);
    animate(btnclr[n]);
    playsound(btnclr[n]);
    $("h1").text("level " + level);
    gameptrn.push(btnclr[n]);
    level++;
}

function animate(colour){
    $('#'+colour).fadeOut(100).fadeIn(100);
    $("#"+colour).addClass("pressed");
    setTimeout(function() {
        $("#"+colour).removeClass("pressed");
    }, 100);
}

function checkanswer(){
    if(usrclckptrn[usrclckptrn.length-1]===gameptrn[usrclckptrn.length-1]){
        // console.log("true");
        if(usrclckptrn.length===gameptrn.length){
            usrclckptrn = [];
            setTimeout(function(){
                nextSeq();
            },1000);
        }
    }
    else{
        restart();
        // console.log("false");
        $("body").addClass("game-over");
        playsound("wrong");
        $("h1").text("GAME OVER ")
        setTimeout(function(){
            $("body").removeClass("game-over");
            $("h1").text("Press A Key to Start");
        },200);
  
    }
}

function playsound(sound){
    var aud = new Audio("sounds/"+sound+".mp3");
    aud.play();

    // OR  

    // switch(sound){
    //     case "red":
    //         var red = new Audio("sounds/red.mp3");
    //         red.play();
    //         break;
    //     case "blue":
    //         var blue = new Audio("sounds/blue.mp3");
    //         blue.play();
    //         break;
    //     case "green":
    //         var green = new Audio("sounds/green.mp3");
    //         green.play();
    //         break;
    //     case "yellow":
    //         var yellow = new Audio("sounds/yellow.mp3");
    //         yellow.play();
    //         break;
    //     case "wrong":
    //         var wrong =  new Audio("sounds/wrong.mp3");
    //         wrong.play();
    //         break;
    // }
   
    }

    function restart(){
        usrclckptrn=[];
        started=0;
        gameptrn=[];
        level = 0;
    }