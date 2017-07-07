$(document).ready(function(){
  $("#trackForm").submit(function(event){
    $("#formRow").hide();
    $("#answerRow").show();
    event.preventDefault();
  });
});
