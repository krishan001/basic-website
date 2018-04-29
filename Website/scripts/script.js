
$(document).ready(function(){

  $("#table tbody tr").hide();
  $("#table tbody tr."+$("#choice").val()).show('fast');
  $("#choice").change(function(){
      $("#table tbody tr").hide();
      $("#table tbody tr."+$(this).val()).show('fast');
    });

    $("#tdee").submit(function(){
      let value = parseInt( $("#bodyweight").val());
      value = value + 10;
      $("#result").html(value);
      return false;
    });

});