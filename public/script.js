let click1 = 0;
let click2 = 0;
let click3 = 0;
function flipCard1(card) {

	
	if (click1 === 0) {
		card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
		click1 = 1;
	}
	else if (click1 === 1) {
		card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
		click1 = 0;
	}
}
function flipCard2(card) {

	
	if (click2 === 0) {
		card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
		click2 = 1;
	}
	else if (click2 === 1) {
		card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
		click2 = 0;
	}
}
function flipCard3(card) {

	
	if (click3 === 0) {
		card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
		click3 = 1;
	}
	else if (click3 === 1) {
		card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
		click3 = 0;
	}
}



function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
	
	const nameRange = /^[a-zA-Z]+$/;
	const emailRange = "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$";
	const numRange = /^0-9]+$/;
    const serviceID = "service_wdij9sr"; 
    const templateID = "template_895w0eq";
	if(name === "" || !nameRange.test(name)) {
		alert("Please enter a valid name.")
		document.getElementById("name").value = "";

	}
	if(email ==="" || !emailRange.test(email)) {
		alert("Please enter a valid name.")
		document.getElementById("email").value = "";
	}
	if(Number ==="" || !emailRange.test(email)) {
		alert("Please enter a valid name.")
		document.getElementById("email").value = "";
	}
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
	
  }

function resetFields() {	
	
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
}


