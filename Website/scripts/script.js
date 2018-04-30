
$(document).ready(function(){

  $("#table tbody tr").hide();
  $("#table tbody tr."+$("#choice").val()).show();
  $("#choice").change(function(){
      $("#table tbody tr").hide();
      $("#table tbody tr."+$(this).val()).show('fast');
    });

    $("#macros").submit(function(){
      let weight = parseInt( $("#bodyweight").val());
      let calories = 2000;
      let protein = weight;
      let fat = weight * 0.3;
      let carbs = (calories - ((protein * 4) + (fat * 9)))/4;
      $("#protein").html( protein+ "g of protein" );
      $("#fat").html( fat + "g of fat");
      $("#carbs").html("<p>" + carbs + "g of carbs </p>");
      return false;
    });

});