
    var i = 0;
    var txt = "Greetings and salutations.";
    var speed = 75;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("title-text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }


    