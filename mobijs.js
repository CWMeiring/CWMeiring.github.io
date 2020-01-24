
function displaydropdown(){
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "block";
};

function hidedropdown(){
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
};

function Home(){
	document.documentElement.scrollTop = 0;
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
}

function About(){
	var elmnt = document.getElementById("aboutdiv");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
}

function Skill(){
	var elmnt = document.getElementById("skillsdiv");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
}

function Education(){
	var elmnt = document.getElementById("educationdiv");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
}

function Employment(){
	var elmnt = document.getElementById("employmentdiv");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
}

function Contact(){
	var elmnt = document.getElementById("contactdiv");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
}

