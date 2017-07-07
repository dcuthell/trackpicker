$(document).ready(function(){
  $("#trackForm").submit(function(event){
    var name = $("input#inputName").val();
    var location = $("#inputLocation").val();
    var size = $("input:radio[name=inputSize]:checked").val();
    var web = $("input:radio[name=inputWeb]:checked").val();
    var backend = $("input:radio[name=inputBackend]:checked").val();
    var popular = $("input:radio[name=inputPopular]:checked").val();
    var apps = $("input:radio[name=inputApps]:checked").val();

    $("#myName").text(name);


    $("#formRow").hide();
    $("#answerRow").show();
    $("#feedback").show("slow");

    if(location !== "Elsewheres"){
      var outputLocation = location + ", that's cool! Check out these tracks being offered in your area."
      $("#myLocation").text(outputLocation);
    } else {
      var outputLocation = location + ". Have you considered moving to Portland or Seattle? Here are some tracks being offered in those cities."
      $("#myLocation").text(outputLocation);
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
