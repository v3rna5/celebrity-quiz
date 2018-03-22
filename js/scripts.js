$(document).ready(function() {
  $("#quiz1").submit(function(event) {
    console.log("I AM THE QUIZ");
    var gender1 = $("select#gender").val();
    console.log(gender1);
    var food = $("select#food1").val();
    var color = $("select#color1").val();

    if (gender1 === 'other' && food === 'pizza' && color === 'blue') {
        $(".celebrity #tomhardy").show();
      }

    if (gender1 === 'male' && food === 'burgers' && color === 'purple') {
       $(".celebrity #jennifer").show();
     }




    event.preventDefault();
  });
});
