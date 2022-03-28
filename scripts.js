

// $(document).ready(function() {

//        $("#container").slideUp(1500).slideDown(1500);
// });

// $(function()    {

// $("#btn1").on("mouseover", function() {
   
//      $("p").text("pes");
// });



// });




// var allToDo = [];

// $(function() {
//     $("#btn1").on("click", function() {
         
//            var str = $("#input").val();
//              allToDo.push(str);
              
//                 $("#todo").text(allToDo);                               
// });
     
// });
     


$(function() {
    $("#Oak").on("click", function() {
      $(".container").css("background-image","url(Oak.jpeg)");  
    });

    $("#Palacinky").on("click", function() {
      $(".container").css("background-image","url(Palacinky.jpg)");  
    });


    $("#Zebra").on("click", function() {
      $(".container").css("background-image","url(Zebra.jpeg)");  
    });

    $("#Vcela").on("click", function() {
      $(".container").css("background-image","url(Vcela.jpeg)");  
    });

    $("#Plaz").on("click", function() {
      $(".container").css("background-image","url(Plaz.jpeg)");  
    });

    $("#Tiger").on("click", function() {
      $(".container").css("background-image","url(Tiger.jpeg)");  
    });
});      

let Oak = {
  photo: "Oak.jpeg",
  title: "Oak tree",
  description: "Very nice looking Oak tree",
};

let Palacinky = {
  photo: "Palacinky.jpg",
  title: "Palacinky",
  description: "Delicious pancakes",
};

let Zebra = {
  photo: "Zebra.jpeg",
  title: "Zebras",
  description: "Magnificant zebras",
};

let Vcela = {
  photo: "Vcela.jpeg",
  title: "The Bee",
  description: "Detailed view of the Bee",
};

let Plaz = {
  photo: "Plaz.jpeg",
  title: "The beach",
  description: "Very beautiful place on the earth",
};

let Tiger = {
  photo: "Tiger.jpeg",
  title: "Tiger",
  description: "A little cat",
};




let currentPhoto = 0;
let imagesData = [Oak,Palacinky,Zebra,Vcela,Plaz,Tiger];

// $("#image").attr("src", imagesData[currentPhoto].photo);
// $(".Popisok").text(imagesData[currentPhoto].photo);
// $(".podrobnyPopis").text(imagesData[currentPhoto].photo);



    let loadPhoto = (photoNumber) => {
      $('#image').attr('src', imagesData[photoNumber].photo);
      $(".Popisok").text(imagesData[currentPhoto].title);
      $(".podrobnyPopis").text(imagesData[currentPhoto].description);
  
    }
    
    loadPhoto(currentPhoto);
    
    $('.LBTN').click(() => {
      currentPhoto--;
      loadPhoto(currentPhoto);
    })

    $('.RBTN').click(() => {
      currentPhoto++;
      loadPhoto(currentPhoto);
    })

  

  $(function() {
    $("#Oak").on("click", function() {
      $("#image").attr("src", "Oak.jpeg"); 
      $(".Popisok").text("Oak tree"); 
      $(".podrobnyPopis").text("Very nice looking Oak tree");
    });

    $("#Palacinky").on("click", function() {
      $("#image").attr("src", "Palacinky.jpg"); 
      $(".Popisok").text("Palacinky"); 
      $(".podrobnyPopis").text("Delicious pancakes");  
    });


    $("#Zebra").on("click", function() {
      $("#image").attr("src", "Zebra.jpeg"); 
      $(".Popisok").text("Zebras"); 
      $(".podrobnyPopis").text("Magnificant zebras");    
    });

    $("#Vcela").on("click", function() {
      $("#image").attr("src", "Vcela.jpeg"); 
      $(".Popisok").text("The Bee"); 
      $(".podrobnyPopis").text("Detailed view fn the Bee");    
    });

    $("#Plaz").on("click", function() {
      $("#image").attr("src", "Plaz.jpeg"); 
      $(".Popisok").text("The Beach"); 
      $(".podrobnyPopis").text("Very beautiful place on the earth");    
    });

    $("#Tiger").on("click", function() {
      $("#image").attr("src", "Tiger.jpeg"); 
      $(".Popisok").text("Tiger"); 
      $(".podrobnyPopis").text("A little cat");    
    });
});   