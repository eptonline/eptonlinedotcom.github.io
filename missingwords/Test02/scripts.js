//Sounds for funs

var achievements = new Audio('https://eptonline.org/assets/achievements.mp3');
var wrongs = new Audio('https://eptonline.org/assets/wrongs.mp3');



        var g;
        var h;
        var i;
        var j;
        var k;

        var g1;
        var h1;
        var i1;
        var j1;
        var k1;

        var g2;
        var h2;
        var i2;
        var j2;
        var k2;



function submit001() {
  clearInterval(timer);

            b = input001.value;
            c = input002.value;
            d = input003.value;
            e = input004.value;
            f = input005.value;

            b1 = input006.value;
            c1 = input007.value;
            d1 = input008.value;
            e1 = input009.value;
            f1 = input010.value;

    




            if (b == "oing") {
                g = 1;
                input001.value = b;
                check001.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input001.value = b;
                check001.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (c == "o") {
                h = 1
                input002.value = c;
                check002.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input002.value = c;
                check002.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (d == "he") {
                i = 1;
                input003.value = d;
                check003.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input003.value = d;
                check003.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (e == "ened") {
                j = 1;
                input004.value = e;
                check004.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input004.value = e;
                check004.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (f == "se") {
                k = 1;
                input005.value = f;
                check005.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input005.value = f;
                check005.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }



            if (b1 == "ridge") {
                g1 = 1;
                input006.value = b1;
                check006.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input006.value = b1;
                check006.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (c1 == "nished") {
                h1 = 1
                input007.value = c1;
                check007.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input007.value = c1;
                check007.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (d1 == "ngest") {
                i1 = 1;
                input008.value = d1;
                check008.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input008.value = d1;
                check008.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (e1 == "orld") {
                j1 = 1;
                input009.value = e1;
                check009.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input009.value = e1;
                check009.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (f1 == "otpath") {
                k1 = 1;
                input010.value = f1;
                check010.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input010.value = f1;
                check010.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }




            



            if (g == 1 && h == 1 && i == 1 && j == 1 && k == 1 && g1 == 1 && h1 == 1 && i1 == 1 && j1 == 1 && k1 == 1) {
                message001.innerHTML = "Congratulation! You have successfully finished this quiz.";
                disappear001.innerHTML = "";
                 achievements.play();
                   confetti.start();
                setTimeout(function() {confetti.stop()}, 2000);
                reload001.innerHTML = "<div id=center001><button class=button001 onclick=repeat001()>Repeat</button></div>";
            }else{
                  message001.innerHTML = "You lost! Try Again.";
                disappear001.innerHTML = "";
                 wrongs.play();
                reload001.innerHTML = "<div id=center001><button class=button001 onclick=repeat001()>Repeat</button></div>";
            
            }
        }

            function repeat001() {
                location.reload();
            }





//Update Timer on screen
function updateTimer() {
  if (time == 0) {
    //End test if timer reaches 0
    submit001();
  } else {
    document.getElementById("timer").innerText = --time + "s";
  }
}

//Sets timer
const timeReduce = () => {
  time = 180;
  timer = setInterval(updateTimer, 1000);
};

//OnLoad Functions
window.onload = () => {
timer = "";
timeReduce();
};

