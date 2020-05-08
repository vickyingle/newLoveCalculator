// document.querySelector("h1").style.fontSize = "5rem";
// document.querySelector("h2").style.fontFamily = "'Dancing Script', cursive";
$("h1").css("font-size","5rem");
$("h2").css("font-family","'Dancing Script', cursive");

$(".hey").click(function(){
  if($(".ta").val() !=''){  var randomNumber = Math.floor(Math.random() * 100 + 1);
    function myFunction(randomNumber){

        if (randomNumber >= 80 && randomNumber <= 100) {
          document.querySelector(".hey").innerHTML = "whoo your love chemistry is " + randomNumber +"% and is like laila and majnu!";
          playAudio("woohoo");

        } else if (randomNumber >= 50 && randomNumber <= 80) {
          document.querySelector(".hey").innerHTML = "your love chemistry is " + randomNumber +"% .Your love is average.";
          var q=new Audio("damn.wav");
          q.play();
        } else {
          document.querySelector(".hey").innerHTML = "ohh! your love chemistry is " + randomNumber +"%.You are not in love.";
          var x=new Audio("bad.wav");
          x.play();
        }


    }
    myFunction(randomNumber);}
    else{
      // $(".hey").text("first enter the names.").slide();
      alert("Please enter your names first..");

    }

})
$(".hi").click(function(){
  window.location.reload();
})

function playAudio(x){
  var audio=new Audio(x+".mp3");
  audio.play();
}
