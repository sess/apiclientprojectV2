/* global $ */
let apodUrl = "https://api.nasa.gov/planetary/apod?api_key=NeRV1tJp7ld5IHrxZLZbIkky5Eyt5ogvkTRhN4lv";
let url = "https://images-api.nasa.gov/search?q={q}";
let userInput;
let i = 1;
let arrayLength;
let imgArray= [];
let descArray= [];
let titleArray= [];
let keywords;

$("#pageOne").show();
$("#resultsPage").hide();

$("#arrowBack").click(function(){
    $("#pageOne").show();
    $("#resultsPage").hide();
    $("#arrowBack").hide();
    $("#progressArrows").hide();
    arrayLength;
    imgArray= [];
    descArray= [];
    titleArray= [];
    $(".inputOne").val("");
});

$(".enter").click(function(){
    userInput = $(".inputOne").val();
    //keywords = userInput.split(" ");
    //console.log(keywords);
    $("#keywordText").text("Showing results for: " + userInput);
    $("#pageOne").hide();
    $("#resultsPage").show();
    url = "https://images-api.nasa.gov/search?q=" + userInput;
    /*for(var i; i < keywords.length;i++){
        url = "https://images-api.nasa.gov/search?q=" + keywords[i];
        console.log(url);*/
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response){
               //$("#apiResults").html("<div class=\"resultBox\"><a target=\"_blank\" href=\"" + response.collection.items[0].links[0].href  + "\"><img class=\"resultImg\" src=\"" + response.collection.items[0].links[0].href + "\"></a><br><p class=\"resultTitle\">" + response.collection.items[0].data[0].title +"</p><br><p class=\"resultDesc\">" + response.collection.items[0].data[0].description + "</p></div>");

                /*response.collection.items.forEach(function(element){
                    $("#apiResults").html("<div class=\"resultBox\"><a target=\"_blank\" href=\"" + response.collection.items[element].links[0].href  + "\"><img class=\"resultImg\" src=\"" + response.collection.items[element].links[0].href + "\"></a><br><p class=\"resultTitle\">" + response.collection.items[element].data[0].title +"</p><br><p class=\"resultDesc\">" + response.collection.items[element].data[0].description + "</p></div>");
                }); */
                
                for(var q = 0; q < response.collection.items.length; q = q + 1){
                    $("#apiResults").append("<div class=\"resultBox\"><a target=\"_blank\" href=\"" + response.collection.items[q].links[0].href  + "\"><img class=\"resultImg\" src=\"" + response.collection.items[q].links[0].href + "\"></a><br><p class=\"resultTitle\">" + response.collection.items[q].data[0].title +"</p><br><p class=\"resultDesc\">" + response.collection.items[q].data[0].description + "</p></div>");
                }
            }
        });
    //}
    $(".inputOne").val("");
});

$(".enterBttnTwo").click(function(){
    $("#apiResults").text("");
    userInput = $(".inputTwo").val();
    $("#keywordText").text("Showing results for: " + userInput);
    $("#pageOne").hide();
    $("#resultsPage").show();
    url = "https://images-api.nasa.gov/search?q=" + userInput;
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response){
                for(var q = 0; q < response.collection.items.length; q = q + 1){
                    $("#apiResults").append("<div class=\"resultBox\"><a target=\"_blank\" href=\"" + response.collection.items[q].links[0].href  + "\"><img class=\"resultImg\" src=\"" + response.collection.items[q].links[0].href + "\"></a><br><p class=\"resultTitle\">" + response.collection.items[q].data[0].title +"</p><br><p class=\"resultDesc\">" + response.collection.items[q].data[0].description + "</p></div>");
                }
            }
        });
    $(".inputTwo").val("");
});

$.ajax({
        url: apodUrl,
        method: "GET",
        success: function(response){
            if(response.media_type === "video"){
                $("#imgResultTwo").hide();
                $("#imgResultOne").show();
            }
            
            if(response.media_type === "image"){
                $("#imgResultTwo").show();
                $("#imgResultOne").hide()
            }
            
            $("#boldName").text(response.title);
            $(".imgResult").attr("src",response.url);
            $("#text").html(response.explanation);
        }
});