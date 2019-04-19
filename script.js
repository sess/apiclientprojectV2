/* global $ */
//let url = "https://api.nasa.gov/planetary/apod?api_key=NeRV1tJp7ld5IHrxZLZbIkky5Eyt5ogvkTRhN4lv";
//let url = "https://images-api.nasa.gov/search?q={q}";
let apodUrl = "https://api.nasa.gov/planetary/apod?api_key=NeRV1tJp7ld5IHrxZLZbIkky5Eyt5ogvkTRhN4lv";
let url = "https://images-api.nasa.gov/search?q={q}";
let userInput;
let i = 0;
let arrayLength;
let imgArray= [];
let descArray= [];
let titleArray= [];

function progress(){
    $("#back").click(function(){
        i = i - 1;
        
        if(i === arrayLength - arrayLength){
            i = i;
        }
    });
    
    console.log(arrayLength);
    
    $("#next").click(function(){
        i = i + 1;
        
        if(i === arrayLength){
            i = i;
        }
    });
}

$("#inputOne").click(function(){
    $(document).keydown(function(keyPressed) {
       if (keyPressed.keyCode == 13 && ($("#inputOne").val() != "")) {
            userInput = $("#inputOne").val();
            $('html,body').animate({scrollTop: $("#pageTwo").offset().top},'slow');
            $("#arrowBack").show();
            $("#progressArrows").show();
            url = "https://images-api.nasa.gov/search?q=" + userInput;
            $.ajax({
                url: url,
                method: "GET",
                success: function(response){
                    console.log(url);
                    $("#boldName").text(response.collection.items[0].data[0].title);
                    $("#imgResult").attr("src",response.collection.items[0].links[0].href);
                    $("#text").text(response.collection.items[0].data[0].description);
                }
            });
            $("#inputOne").val("");
        }
    });
});

$("#arrowBack").click(function(){
    $('html,body').animate({scrollTop: $("#pageOne").offset().top},'slow');
    $("#arrowBack").hide();
    $("#progressArrows").hide();
    i = 0;
    arrayLength;
    imgArray= [];
    descArray= [];
    titleArray= [];
});

$("#apodBttn").click(function(){
    $('html,body').animate({scrollTop: $("#pageTwo").offset().top},'slow');
    $("#arrowBack").show();
    $.ajax({
        url: apodUrl,
        method: "GET",
        success: function(response){
            $("#boldName").text(response.title);
            $("#imgResult").attr("src",response.url);
            $("#text").text(response.explanation);
        }
    });
});

$(".enter").click(function(){
    userInput = $("#inputOne").val();
    url = "https://images-api.nasa.gov/search?q=" + userInput;
    $('html,body').animate({scrollTop: $("#pageTwo").offset().top},'slow');
    $("#arrowBack").show();
    $("#progressArrows").show();
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            console.log(url);
            $("#boldName").text(response.collection.items[0].data[0].title);
            $("#imgResult").attr("src",response.collection.items[0].links[0].href);
            $("#text").text(response.collection.items[0].data[0].description);
            
            response.collection.items.forEach(function(element){
                imgArray.push(response.collection.items[element].links[0].href);
            });
            
            /*for(let x = 0; x < response.collection.items[i].length; x++){
                
            }*/
            
            for(let x = 0; x < response.collection.items[x].length; x++){
                descArray.push(response.collection.items[x].data[0].description);
            }
            
            for(let x = 0; x < response.collection.items[x].length; x++){
                titleArray.push(response.collection.items[x].data[0].title);
            }
            
            console.log(imgArray);
            console.log(descArray);
            console.log(titleArray);
            
        }
    });
    $("#inputOne").val("");
});

$("#back").click(function(){
    console.log("back");
     $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            arrayLength = response.collection.items.length;
            progress();
            
            console.log(url);
            $("#boldName").text(response.collection.items[i].data[0].title);
            $("#imgResult").attr("src",response.collection.items[i].links[0].href);
            $("#text").text(response.collection.items[i].data[0].description);
        }
    });
});

$("#next").click(function(){
    console.log("next");
     $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            arrayLength = response.collection.items.length;
            progress();
            
            console.log(url);
            $("#boldName").text(response.collection.items[i].data[0].title);
            $("#imgResult").attr("src",response.collection.items[i].links[0].href);
            $("#text").text(response.collection.items[i].data[0].description);
        }
    });
});