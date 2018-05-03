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

});

function rm() {

    let weight = parseInt($("#weight").val());
    let reps = parseInt($("#reps").val());
    let repMax = weight * (1 + (reps / 30));
    $("#maxweight").html(Math.floor(repMax) + " kg");

    return false;
}