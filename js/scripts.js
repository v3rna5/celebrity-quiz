$(document).ready(function() {
  $("#quiz1").submit(function(event) {
    console.log("I AM THE QUIZ");
    var gender1 = $("select#gender").val();
    console.log(gender1);


    if (gender1 === 'male') {
        $(".celebrity #tomhardy").show();
      }

    event.preventDefault();
  });
});
