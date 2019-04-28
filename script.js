/* global $ */
//let url = "https://api.nasa.gov/planetary/apod?api_key=NeRV1tJp7ld5IHrxZLZbIkky5Eyt5ogvkTRhN4lv";
//let url = "https://images-api.nasa.gov/search?q={q}";
let apodUrl = "https://api.nasa.gov/planetary/apod?api_key=NeRV1tJp7ld5IHrxZLZbIkky5Eyt5ogvkTRhN4lv";
let url = "https://images-api.nasa.gov/search?q={q}";
let userInput;
let i = 1;
let arrayLength;
let imgArray= [];
let descArray= [];
let titleArray= [];

/*function progress(){
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
}*/

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
                    //console.log(url);
                    $("#boldName").text(response.collection.items[0].data[0].title);
                    $("#imgResult").attr("src",response.collection.items[0].links[0].href);
                    $("#text").text(response.collection.items[0].data[0].description);
                }
            });
        }
    });
});

$("#arrowBack").click(function(){
    $('html,body').animate({scrollTop: $("#pageOne").offset().top},'slow');
    $("#arrowBack").hide();
    $("#progressArrows").hide();
    //i = 0;
    arrayLength;
    imgArray= [];
    descArray= [];
    titleArray= [];
    $("#inputOne").val("");
});

/*$("#apodBttn").click(function(){
    $('html,body').animate({scrollTop: $("#pageTwo").offset().top},'slow');
    $("#arrowBack").show();

});*/

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
            //console.log(url);
            $("#boldName").text(response.collection.items[0].data[0].title);
            $("#imgResult").attr("src",response.collection.items[0].links[0].href);
            $("#text").text(response.collection.items[0].data[0].description);
            
            /*response.collection.items.forEach(function(element){
                imgArray.push(response.collection.items[element].links[0].href);
            });*/
            
            /*for(let x = 0; x < response.collection.items[i].length; x++){
                
            }*/
            
            /*for(let x = 0; x < response.collection.items[x].length; x++){
                descArray.push(response.collection.items[x].data[0].description);
            }
            
            for(let x = 0; x < response.collection.items[x].length; x++){
                titleArray.push(response.collection.items[x].data[0].title);
            }
            
            console.log(imgArray);
            console.log(descArray);
            console.log(titleArray);
            */
        }
    });
});

$("#back").click(function(){
    //console.log("previous");
    userInput = $("#inputOne").val();
    //url = "https://images-api.nasa.gov/search?q=" + userInput;
    if(i === 0){
        alert("There aren't any more entries");
    }else if(i !== 0){
         $.ajax({
            url: url,
            method: "GET",
            success: function(response){
                //arrayLength = response.collection.items.length;
                //progress();
                i = i - 1;
                url = "https://images-api.nasa.gov/search?page=" + i +"&q=" + userInput; 
                //console.log(i);
                //console.log(url);
                $("#boldName").text(response.collection.items[0].data[0].title);
                $("#imgResult").attr("src",response.collection.items[0].links[0].href);
                $("#text").text(response.collection.items[0].data[0].description);
            }
        });
    }
});

$("#next").click(function(){
    //console.log("next");
    userInput = $("#inputOne").val();
     $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            i = i + 1;
            url = "https://images-api.nasa.gov/search?page=" + i +"&q=" + userInput; 
            //console.log(i);
            //console.log(url);
            $("#boldName").text(response.collection.items[0].data[0].title);
            $("#imgResult").attr("src",response.collection.items[0].links[0].href);
            $("#text").html(response.collection.items[0].data[0].description);
        }
    });
});

$.ajax({
        url: apodUrl,
        method: "GET",
        success: function(response){
            if(response.media_type === "video"){
                $("#imgResultTwo").hide();
            }
            
            if(response.media_type === "image"){
                $("#imgResultOne").text("<img id=\"imgResult\" src=\"\">");
            }
            
            $("#boldName").text(response.title);
            $(".imgResult").attr("src",response.url);
            $("#text").html(response.explanation);
        }
});