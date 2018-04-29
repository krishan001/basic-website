
$("#choice").change(function(){
    $("#table tbody tr").hide();
    $("#table tbody tr."+$(this).val()).show('fast');
  });

  