
 var arr2 = ["efficient","range","strategy","partial","deposit","adverse","retain","sequence"];

var data1 = {                                          
 "questions": ["efficient","yunned","range","badit","vicket","strategy","partial","deposit","tructly","adverse","bareque","retain","janed","jonts","sequence","buction","gluct","vept"]
},


select = $('select[name=language]');
$.each( data1.questions, function(i, date) {
  select.append( $('<option/>',{text:date}) );
});

//Sounds for funs

var achievements = new Audio('https://eptonline.org/assets/achievements.mp3');
var wrongs = new Audio('https://eptonline.org/assets/wrongs.mp3');






class CustomSelect {
  constructor(originalSelect) {
    this.originalSelect = originalSelect;
    this.customSelect = document.createElement("div");
    this.customSelect.classList.add("select");

    this.originalSelect.querySelectorAll("option").forEach((optionElement) => {
      const itemElement = document.createElement("div");

      itemElement.classList.add("select__item");
      itemElement.textContent = optionElement.textContent;
      this.customSelect.appendChild(itemElement);

      if (optionElement.selected) {
        this._select(itemElement);
      }

      itemElement.addEventListener("click", () => {
        if (
          this.originalSelect.multiple &&
          itemElement.classList.contains("select__item--selected")
        ) {
          this._deselect(itemElement);
        } else {
          this._select(itemElement);
        }
      });
    });

    this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
    this.originalSelect.style.display = "none";
  }

  _select(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);

    if (!this.originalSelect.multiple) {
      this.customSelect.querySelectorAll(".select__item").forEach((el) => {
        el.classList.remove("select__item--selected");
      });
    }

    this.originalSelect.querySelectorAll("option")[index].selected = true;
    itemElement.classList.add("select__item--selected");


   



    
  }

  _deselect(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);

    this.originalSelect.querySelectorAll("option")[index].selected = false;
    itemElement.classList.remove("select__item--selected");
  }
}

document.querySelectorAll(".custom-select").forEach((selectElement) => {
  new CustomSelect(selectElement);
});







//Update Timer on screen
function updateTimer() {
  if (time == 0) {
    //End test if timer reaches 0
    getSelected();
  } else {
    document.getElementById("timer").innerText = --time + "s";
  }
}

//Sets timer
const timeReduce = () => {
  time = 30;
  timer = setInterval(updateTimer, 1000);
};




window.onload = () => {
timer = "";
timeReduce();
document.getElementById("rsltr").style.display = "none";

};

 function reload() {
       location.reload();
 }




var final;

function getSelected(select) {
 clearInterval(timer);


var options = document.getElementById('rst1').selectedOptions;
var values = Array.from(options).map(({ text }) => text);

 final = arr2.filter(function(item) {
  return !values.includes(item);



})


//display the rounded value
//document.getElementById("result").innerHTML = calc2 + "% .";
 document.getElementById("rsltr").style.display = "none";
//document.getElementById("result").innerHTML = arr2.join(", ");
if(arr2.length===(arr2.length - final.length) && arr2.length===values.length){
  message001.innerHTML = "<text style= color:#eb8a0c >Congratulation! You have successfully finished this section.</text>";
                disappear001.innerHTML = "";
                   achievements.play();
                   confetti.start();
            setTimeout(function() {confetti.stop()}, 2000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
                reload1.innerHTML = "<div id=center001><button class=button001 onclick=reload()>Try Again</button></div>";
               
}

if(arr2.length!=(arr2.length - final.length) || arr2.length!=values.length){
  message001.innerHTML = "<text style= color:red >You Are Lost! Try Again.</text>" ;
                disappear001.innerHTML = "";
                wrongs.play();
                reload1.innerHTML = "<div id=center001><button class=button001 onclick=reload()>Try Again</button></div>";

}


    }

