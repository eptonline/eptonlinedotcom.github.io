

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
    modal.style.display = 'block';
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

