/* global $ */

//let url = "https://api.nasa.gov/planetary/apod?api_key=NeRV1tJp7ld5IHrxZLZbIkky5Eyt5ogvkTRhN4lv";

//let url = "https://images-api.nasa.gov/search?q={q}";

let userInput;
let i;

$(".enter").click(function(){
    
    userInput = $("#inputOne").val();
    
    url = "https://images-api.nasa.gov/search?q=" + userInput;
    
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            console.log(url);
        }
    });
});