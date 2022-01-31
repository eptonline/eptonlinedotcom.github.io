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

            f1 = input010.value;

            b2 = input011.value;
            c2 = input012.value;
            d2 = input013.value;
            e2 = input014.value;
           



            if (b == "any") {
                g = 1;
                input001.value = b;
                check001.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input001.value = b;
                check001.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (c == "tries") {
                h = 1
                input002.value = c;
                check002.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input002.value = c;
                check002.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (d == "ng") {
                i = 1;
                input003.value = d;
                check003.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input003.value = d;
                check003.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (e == "rating") {
                j = 1;
                input004.value = e;
                check004.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input004.value = e;
                check004.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (f == "hday") {
                k = 1;
                input005.value = f;
                check005.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input005.value = f;
                check005.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }



            if (b1 == "re") {
                g1 = 1;
                input006.value = b1;
                check006.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input006.value = b1;
                check006.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (c1 == "her") {
                h1 = 1
                input007.value = c1;
                check007.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input007.value = c1;
                check007.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (d1 == "ke") {
                i1 = 1;
                input008.value = d1;
                check008.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input008.value = d1;
                check008.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (f1 == "rated") {
                k1 = 1;
                input010.value = f1;
                check010.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input010.value = f1;
                check010.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }




            if (b2 == "ndles") {
                g2 = 1;
                input011.value = b2;
                check011.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input011.value = b2;
                check011.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (c2 == "me") {
                h2 = 1
                input012.value = c2;
                check012.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input012.value = c2;
                check012.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (d2 == "ber") {
                i2 = 1;
                input013.value = d2;
                check013.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input013.value = d2;
                check013.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (e2 == "me") {
                j2 = 1;
                input014.value = e2;
                check014.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input014.value = e2;
                check014.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            


            if (g == 1 && h == 1 && i == 1 && j == 1 && k == 1 && g1 == 1 && h1 == 1 && i1 == 1 && k1 == 1 && g2 == 1 && h2 == 1 && i2 == 1 && j2 == 1) {
                message001.innerHTML = "<text style= color:#eb8a0c >Congratulation! You have successfully finished this section.</text>";
                disappear001.innerHTML = "";
                 achievements.play();
                   confetti.start();
                setTimeout(function() {confetti.stop()}, 2000);
                reload001.innerHTML = "<div id=center001><button class=button001 onclick=repeat001()>Repeat</button></div>";
            }else{
                  message001.innerHTML = "<text style= color:red >You Are Lost! Try Again.</text>";
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

