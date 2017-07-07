$(document).ready(function(){
  $("#trackForm").submit(function(event){
    var name = $("input#inputName").val();
    var location = $("#inputLocation").val();
    var size = $("input:radio[name=inputSize]:checked").val();
    var web = $("input:radio[name=inputWeb]:checked").val();
    var backend = $("input:radio[name=inputBackend]:checked").val();
    var popular = $("input:radio[name=inputPopular]:checked").val();
    var apps = $("input:radio[name=inputApps]:checked").val();
    var outputLocation = "";

    $("#myName").text(name);


    $("#formRow").hide();
    $("#answerRow").show();
    $("#feedback").show("slow");

    if(location !== "Elsewheres"){
      outputLocation = location + ", that's cool! We've narrowed down your results to show Epicodus tracks in your city."
      $("#myLocation").text(outputLocation);
      $("#myCity").text(location);
      if(location === "Portland"){
        $("#mySite").attr("href", "https://www.epicodus.com/portland/");
      }
      if(location === "Seattle"){
        $("#mySite").attr("href", "https://www.epicodus.com/seattle/");
      }

    } else {
      outputLocation = location + ". Have you considered moving to Portland or Seattle? Here are some tracks being offered in those cities."
      $("#myLocation").text(outputLocation);
      $("#mySite").attr("href", "https://www.epicodus.com/");
    }



    if(size === "true"){
      $("#cssDesign").show();
      $("#cssReact").show();
      $("#csharpDotnet").show();
      $("#javaAndroid").show();
    }

    if(web === "true"){
      $("#cssDesign").show();
      $("#cssReact").show();
      $("#rubyRails").show();
    }

    if(backend === "true"){
      $("#cssDesign").show();
      $("#cssReact").show();
      $("#csharpDotnet").show();
      $("#rubyRails").show();
    }

    if(popular === "true"){
      $("#cssDesign").show();
      $("#cssReact").show();
      $("#csharpDotnet").show();
      $("#javaAndroid").show();
    }

    if(apps === "true"){
      $("#javaAndroid").show();
      $("#rubyRails").show();
    }

    if(location === "Portland"){
      $("#javaAndroid").hide();
    }

    if(location === "Seattle"){
      $("#csharpDotnet").hide();
      $("#cssReact").hide();
    }

    event.preventDefault();
  });
});
