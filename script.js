

// Get DOM Elements
const modal = document.querySelector('#my-modal');
// Events
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


//Subscribe us





 function subscribeus(){
    
			var email = $('#Sender1').val();
			var Body='Subscriber : '+email;
			Email.send({
                SecureToken:"84e3503b-e550-4666-bc68-cbc4ba528d65",
				To: "mdsanaulhaqueshanto@gmail.com",
				From: "filosopharstone@gmail.com",
				Subject: "New Subscriptions from "+email,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					document.getElementById("statuss").innerHtml = 'You will get exciting news from us.';
					closeModal();
					}
					else{
						console.error (message);
						document.getElementById("statuss").innerHtml = 'There is error at Subscriptions. Contact Us.';
						
					}

				}
			);



		}





$(document).ready(function(){
	var Mod = document.getElementById('my-modal');
	var key = 'hadModal',
	hadModal = localStorage.getItem(key);

	if(!hadModal){
		Mod.style.display = 'block';
	}

	$('#my-modal').on('submit',function(event){
		localStorage.setItem(key, true);
	})
});





//Browser Compactibility


browser = {};
if (/(Edge\/[0-9]{2})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(Edge\/[0-9]{2})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(Edge\/[0-9]{2})/i)[0].split("/")[1]);
} else if (/(chrome\/[0-9]{2})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(chrome\/[0-9]{2})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(chrome\/[0-9]{2})/i)[0].split("/")[1]);
} else if (/(firefox\/[0-9]{2})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(firefox\/[0-9]{2})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(firefox\/[0-9]{2})/i)[0].split("/")[1]);
} else if (/(MSIE\ [0-9]{1})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(MSIE\ [0-9]{1})/i)[0].split(" ")[0];
    browser.version = parseInt(navigator.userAgent.match(/(MSIE\ [0-9]+)/i)[0].split(" ")[1]);
} else if (/(Opera\/[0-9]{1})/i.test(navigator.userAgent)) {
    browser.agent = navigator.userAgent.match(/(Opera\/[0-9]{1})/i)[0].split("/")[0];
    browser.version = parseInt(navigator.userAgent.match(/(Opera\/[0-9]{1})/i)[0].split("/")[1]);
} else if (/(Trident\/[7]{1})/i.test(navigator.userAgent)) {
    browser.agent = "MSIE";
    browser.version = 11;
} else {
    browser.agent = false;
    browser.version = false;
}

if (/(Windows\ NT\ [0-9]{1}\.[0-9]{1})/.test(navigator.userAgent)) {
    browser.os = "Windows";

    switch (parseFloat(navigator.userAgent.match(/(Windows\ NT\ [0-9]{1}\.[0-9]{1})/)[0].split(" ")[2])) {
        case 6.0:
            browser.osversion = "Vista";
            break;
        case 6.1:
            browser.osversion = "7";
            break;
        case 6.2:
            browser.osversion = "8";
            break;
        default:
            browser.osversion = false;
    }
} else if (/(OS\ X\ [0-9]{2}\.[0-9]{1})/.test(navigator.userAgent)) {
    browser.os = "OS X";
    browser.osversion = navigator.userAgent.match(/(OS\ X\ [0-9]{2}\.[0-9]{1})/)[0].split(" ")[2];
} else if (/(Linux)/.test(navigator.userAgent)) {
    browser.os = "Linux";
    browser.osversion = false;
}

if (browser.agent === "Chrome" || browser.agent === "chrome") {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "";
    document.body.insertBefore(newDiv, document.body.firstChild);
} else { //TODO: Remove for Prod only added to show some flexibility and testing 
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<b>" + browser.agent + "</b> is <i>not</i> supported. Only Google Chrome support our full functionality. Please download updated Chrome web browser.";
    newDiv.setAttribute("style", "background-color:red;color:white;padding:12px;");
    document.body.insertBefore(newDiv, document.body.firstChild);
}



var OSName = "Unknown OS";
  if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
  if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
  if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
  if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
  if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
  console.log('Your OS: ' + OSName);
if (OSName === "Android" ) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<b>" + OSName + "</b> is <i>not</i> supported. Only Computer device support our full functionality. Please, use Computer/Laptop/Mac Chrome browser for practice.";
    newDiv.setAttribute("style", "background-color:red;color:white;padding:12px;");
    document.body.insertBefore(newDiv, document.body.firstChild);

} else { 
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "";
    document.body.insertBefore(newDiv, document.body.firstChild);
}


//Code for SW

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("SW Registered!");
    console.log(registration);
  }).catch(error => {
    console.log("SW Registration Failed!");
    console.log(error);
  })
}
//share

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  const pinterestImg = document.querySelector(".pinterest-img");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Are you planning to take IELTS or TOEFL or PTE or Duolingo English Test? But didn't found anything handy that help you to fluent in English as Native Speaker? All platform charges exorbitant fees? eptOnline comes with this ideas to serve you free of cost. You can practice thousands of topics for speaking, listening, writing, and interview. Just visit : ");
  let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  pinterestBtn.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
  );

  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();


//Ads Block JS

const detect = document.querySelector("#detect");
    const wrapper = document.querySelector(".wrapper");
    const button = wrapper.querySelector("button");

    let adClasses = ["ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"];
    for(let item of adClasses){
      detect.classList.add(item);
    }
    let getProperty = window.getComputedStyle(detect).getPropertyValue("display");
    if(!wrapper.classList.contains("show")){
      getProperty == "none" ? wrapper.classList.add("show") : wrapper.classList.remove("show");
    }
    button.addEventListener("click", ()=>{
      wrapper.classList.remove("show");
    });
