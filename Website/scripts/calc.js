$(document).ready(function () {

  
    $("#macros").submit(function () {
      let weight = parseInt($("#bodyweight").val());
      let calories = 2000;
      let protein = weight;
      let fat = weight * 0.3;
      let carbs = (calories - ((protein * 4) + (fat * 9))) / 4;
      $("#protein").html(protein + "g of protein");
      $("#fat").html(fat + "g of fat");
      $("#carbs").html("<p>" + carbs + "g of carbs </p>");
      return false;
    });
    $("calcButton").click(function(){
        $("1rm").submit();
    });
    $("#1rm").submit(function () {
        let weight = parseInt($("#weight").val());
        console.log(weight);
        let reps = parseInt($("#reps").val());
        console.log(reps);
        let repMax = weight * (1 + (reps/30));
    
        $("#maxweight").html(repMax + " kg");
        
        return false;
    });
    
});