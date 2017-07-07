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
    $("#myLocation").text(location);

    $("#formRow").hide();
    $("#answerRow").show();
    event.preventDefault();
  });
});
