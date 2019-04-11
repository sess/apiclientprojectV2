/* global $ */

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}

let userInput;
let i;

$(".enter").click(function(){

userInput = $("#inputOne").val();

$.ajax({
    url: "https://official-joke-api.appspot.com/jokes/ten",
    method: "GET",
    success: function(response){
    for(i =0; i < response.length; i++){
        if(userInput === response[i].type)
        $("#parent").append("<br><span>" + response[i].setup + "</span><br>"  + "<span>" + response[i].punchline + "</span><br>");
        }
    }
});

});