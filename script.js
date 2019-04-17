/* global $ */

//let url = "https://api.nasa.gov/planetary/apod?api_key=NeRV1tJp7ld5IHrxZLZbIkky5Eyt5ogvkTRhN4lv";

//let url = "https://images-api.nasa.gov/search?q={q}";

let url;

let apod = "https://api.nasa.gov/planetary/apod?api_key=";

let userInput;
let i;

$("#inputOne").click(function(){

    $(document).keydown(function(keyPressed) {
       if (keyPressed.keyCode == 13 && ($("#inputOne").val() != "")) {
            userInput = $("#inputOne").val();
            console.log(userInput);
            
            $('html,body').animate({
                scrollTop: $("#pageTwo").offset().top},'slow'
            );
            
            $("#arrowBack").show();
    
            //url = "https://images-api.nasa.gov/search?q=" + userInput;
        
            /*$.ajax({
                url: url,
                method: "GET",
                success: function(response){
                    console.log(url);
                }
            });*/
            
            $("#inputOne").val("");
        }
    });
});

$("#arrowBack").click(function(){
    $('html,body').animate({
        scrollTop: $("#pageOne").offset().top},'slow'
    );
            
    $("#arrowBack").hide();
});

$("#apodBttn").click(function(){
    $('html,body').animate({
        scrollTop: $("#pageTwo").offset().top},'slow'
    );
            
    $("#arrowBack").show();
    
    /*$.ajax({
        url: url,
        method: "GET",
        success: function(response){
            console.log(url);
        }
    });*/
});

$(".enter").click(function(){
    
    userInput = $("#inputOne").val();
    
    //url = "https://images-api.nasa.gov/search?q=" + userInput;
    
    console.log(userInput);
            
    $('html,body').animate({
        scrollTop: $("#pageTwo").offset().top},'slow'
    );
            
    $("#arrowBack").show();
    
    /*$.ajax({
        url: url,
        method: "GET",
        success: function(response){
            console.log(url);
        }
    });*/
    
    $("#inputOne").val("");
});