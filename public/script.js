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
	  phone: document.getElementById("phoneNum").value,
    };
	
	const nameRange = /^[A-Za-z]+$/;
	const emailRange = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const numRangeS = /^\d{3}\s\d{3}\s\d{4}$/; // num range including spaces e.g: 123 456 7890
	const numRange = /^\d{3}\d{3}\d{4}$/; // num range with no spaces e.g: 1234567890
    const serviceID = "service_wdij9sr"; 
    const templateID = "template_895w0eq";
	let name = document.getElementById("name").value
	let email = document.getElementById("email").value
	let phone = document.getElementById("phoneNum").value
	if(name === "" || !nameRange.test(name)) {
		alert("Please enter a valid name.")
		document.getElementById("name").value = "";

	}
	else {
		alert
		if(email ==="" || !emailRange.test(email)) {
			alert("Please enter a valid email.")
			document.getElementById("email").value = "";
		}
		else {
			if(phone ==="" || (!numRangeS.test(phone) && !numRange.test(phone))) {
				alert("Please enter a valid phone number.")
				document.getElementById("phoneNum").value = "";
			}
		}
		
		// emailjs.send(serviceID, templateID, params)
     	// .then(res=>{
			//document.getElementById("name").value = "";
			//document.getElementById("email").value = "";
			//document.getElementById("message").value = "";
			//document.getElementById("phoneNum").value = "";
			//console.log(res);
			//alert("Your message sent successfully!!")
  
      		//})
      		//.catch(err=>console.log(err));
	}
	

      
	
  }

function resetFields() {	
	
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
		document.getElementById("phoneNum").value = "";
}


