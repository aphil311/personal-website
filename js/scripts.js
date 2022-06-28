$(document).ready(function(){
    var i = 0;
    var txt = "Greetings and salutations.";
    var speed = 75;
    setTimeout(typeWriter, 75);

    function typeWriter() {
        if (i < txt.length) {
        document.getElementById("title-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
    }

    $("#subtitle").append("I'm Aidan Phillips, a second-year computer science student at Princeton University and startup founder.");
    $("#subtitle").hide().delay(2500).fadeIn(1000);
});

