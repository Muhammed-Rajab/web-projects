// getting time div
let timeDiv = document.getElementById("time");
let greeting = document.querySelector(".greeting");

setInterval(function(){
	let date = new Date();
	let hour = Number(date.getHours()) <= 9 ? `0${date.getHours()}` : date.getHours();
	let minute = Number(date.getMinutes()) <= 9 ? `0${date.getMinutes()}` : date.getMinutes();
	timeDiv.textContent = `${hour}:${minute}`;
}, 1000);

setInterval(function(){
	let date = new Date();
	if (date.getHours() >= 0 && date.getHours() < 12) {
		greeting.textContent = "Good Morning, Jisa."
	} else 	if (date.getHours() >= 12 && date.getHours() < 16) {
		greeting.textContent = "Good AfterNoon, Jisa."
	} else{
		greeting.textContent = "Good Evening, Jisa."
	}

}, 1000);