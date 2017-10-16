$(document).ready(function(){

  $("h1").addClass("title");
  $("button").addClass("button");
  $("p").addClass("textStyle");
  $("input").addClass("input");

  $("button").on("click",
  function() {
    var guess = (Math.floor(Math.random() * 4));
    var input = $("#inputField").val();
    console.log(input);
    console.log(guess);
    $("#showInput").text(input);
      if (guess == 0){
        $("#showAnswer").show().text("Yes");
      } else if (guess == 1){
        $("#showAnswer").show().text("No");
      } else if (guess == 2){
        $("#showAnswer").show().text("Maybe");
      } else {
        $("#showAnswer").show().text("I don't know");
      }

    $("#inputField").val('');
    });
  });
