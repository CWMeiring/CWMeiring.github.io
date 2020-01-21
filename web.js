//about var
var a = 21;
var b = 17;
var c = 26; 

//work var
var d = 21;
var e = 17;
var f = 26;

//blog var
var g = 21;
var h = 17;
var i = 26;

//skills var
var j = 21;
var k = 17;
var l = 26;

if (screen.width <= 699) {
document.location = "mobi.html";
}

function HandMade(){
	document.documentElement.scrollTop = +1000;
}
function about(){
	d = 21;
	e = 17;
	g = 21;
	h = 17;
	j = 21;
	k = 17;
	var aD =
	document.getElementById("aboutD");
	aD.style.opacity = 1;
	var wD =
	document.getElementById("workD");
	wD.style.opacity = 0.0;
	var skiD =
	document.getElementById("skillsD");
	skiD.style.opacity = 0.0;
	var bD =
	document.getElementById("blogD");
	bD.style.opacity = 0.0;
	var hHome =
	document.getElementById("homeD");
	hHome.style.opacity = 0.0;
	var skillsWidth =
	document.getElementById("skills");
	skillsWidth.style.width = k + "vw";
	var aboutWidth =
	document.getElementById("about");
	aboutWidth.style.width = c + "vw";
	var workWidth =
	document.getElementById("work");
	workWidth.style.width = e + "vw";
	var blogWidth =
	document.getElementById("blog");
	blogWidth.style.width = h + "vw";	
	b = 26;
	a = 26;
	
};

function work(){
	b = 17;
	a = 21;
	g = 21;
	h = 17;
	j = 21;
	k = 17;
	var abD =
	document.getElementById("aboutD");
	abD.style.opacity = 0.0;
	var woD =
	document.getElementById("workD");
	woD.style.opacity = 1;
	woD.style.zIndex ="1"
	var blD =
	document.getElementById("blogD");
	blD.style.opacity = 0.0;
	var hHome =
	document.getElementById("homeD");
	hHome.style.opacity = 0.0;
	var skiD =
	document.getElementById("skillsD");
	skiD.style.opacity = 0.0;
	skiD.style.zIndex ="0"
	var skillsWidth =
	document.getElementById("skills");
	skillsWidth.style.width = k + "vw";
	var workWidth =
	document.getElementById("work");
	workWidth.style.width = f + "vw";
	var aboutWidth =
	document.getElementById("about");
	aboutWidth.style.width = b + "vw";
	var blogWidth =
	document.getElementById("blog");
	blogWidth.style.width = h + "vw";
	d = 26;
	e = 26;
};

function blog(){
	b = 17;
	a = 21;
	d = 21;
	e = 17;
	j = 21;
	k = 17;
	var aboD =
	document.getElementById("aboutD");
	aboD.style.opacity = 0.0;
	var worD =
	document.getElementById("workD");
	worD.style.opacity = 0.0;
	var bloD =
	document.getElementById("blogD");
	bloD.style.opacity = 1;
	var skiD =
	document.getElementById("skillsD");
	skiD.style.opacity = 0.0;
	var hHome =
	document.getElementById("homeD");
	hHome.style.opacity = 0.0;
	var skillsWidth =
	document.getElementById("skills");
	skillsWidth.style.width = k + "vw";
	var blogWidth =
	document.getElementById("blog");
	blogWidth.style.width = i + "vw";
	var aboutWidth =
	document.getElementById("about");
	aboutWidth.style.width = b + "vw";
	var workWidth =
	document.getElementById("work");
	workWidth.style.width = e + "vw";	
	g = 26;
	h = 26;
};

function skills(){
	b = 17;
	a = 21;
	d = 21;
	e = 17;
	g = 21;
	h = 17;
	var aboD =
	document.getElementById("aboutD");
	aboD.style.opacity = 0.0;
	var worD =
	document.getElementById("workD");
	worD.style.opacity = 0.0;
	worD.style.zIndex = 0;
	var bloD =
	document.getElementById("blogD");
	bloD.style.opacity = 0.0;
	var skiD =
	document.getElementById("skillsD");
	skiD.style.opacity = 1;
	skiD.style.zIndex = 1;
	var hHome =
	document.getElementById("homeD");
	hHome.style.opacity = 0.0;
	var skillsWidth =
	document.getElementById("skills");
	skillsWidth.style.width = l + "vw";
	var blogWidth =
	document.getElementById("blog");
	blogWidth.style.width = h + "vw";
	var aboutWidth =
	document.getElementById("about");
	aboutWidth.style.width = b + "vw";
	var workWidth =
	document.getElementById("work");
	workWidth.style.width = e + "vw";	
	j = 26;
	k = 26;
};

//about hover
function aboutHoverOn(){
	var aboutWidth =
	document.getElementById("about");
	aboutWidth.style.width = a + "vw";

};

function aboutHoverout(){
	var aboutWidth =
	document.getElementById("about");
	aboutWidth.style.width = b + "vw";
};

//work hover
function workHoverOn(){
	var workWidth =
	document.getElementById("work");
	workWidth.style.width = d + "vw";

};

function workHoverout(){
	var workWidth =
	document.getElementById("work");
	workWidth.style.width = e + "vw";
};

//blog hover
function blogHoverOn(){
	var blogWidth =
	document.getElementById("blog");
	blogWidth.style.width = g + "vw";

};

function blogHoverout(){
	var blogWidth =
	document.getElementById("blog");
	blogWidth.style.width = h + "vw";
};

//skills hover
function skillsHoverOn(){
	var skillsWidth =
	document.getElementById("skills");
	skillsWidth.style.width = j + "vw";

};

function skillsHoverout(){
	var skillsWidth =
	document.getElementById("skills");
	skillsWidth.style.width = k + "vw";
};

//Home
function home(){
	a = 21;
	b = 17;
	d = 21;
	e = 17;
	g = 21;
	h = 17;
	j = 21;
	k = 17;
	var hHome =
	document.getElementById("homeD");
	hHome.style.opacity = 1;
	var hAbout =
	document.getElementById("aboutD");
	hAbout.style.opacity = 0.0;
	var hWork =
	document.getElementById("workD");
	hWork.style.opacity = 0.0;
	var hBlog =
	document.getElementById("blogD");
	hBlog.style.opacity = 0.0;
	var hSkills =
	document.getElementById("skillsD");
	hSkills.style.opacity = 0.0;
	var blogWidth =
	document.getElementById("blog");
	blogWidth.style.width = h + "vw";
	var skillsWidth =
	document.getElementById("skills");
	skillsWidth.style.width = k + "vw";
	var aboutWidth =
	document.getElementById("about");
	aboutWidth.style.width = b + "vw";
	var workWidth =
	document.getElementById("work");
	workWidth.style.width = e + "vw";
};

function backTop(){
	document.documentElement.scrollTop = 0;
}

//#################################################Carousel

function blurDiv(){

	var blurVar =
document.getElementById("Carousel")
	var blurVarTwo=
document.getElementById("educationtwo")
	var blurVarthree=
document.getElementById("skillsthree")	

blurVarTwo.style.zIndex ="0";
blurVar.style.zIndex ="1";
blurVarTwo.style.filter = "blur" + "(3px)";
blurVarthree.style.filter = "blur" + "(3px)";
blurVar.style.opacity = "1.0";
};

function exitblur(){

	var blurVar =
document.getElementById("Carousel")
	var blurVarTwo=
document.getElementById("educationtwo")
	var blurVarthree=
document.getElementById("skillsthree")	

blurVarTwo.style.zIndex ="1";
blurVar.style.zIndex ="0";
blurVarTwo.style.filter = "blur" + "(0px)";
blurVarthree.style.filter = "blur" + "(0px)";
blurVar.style.opacity = "0.0";
};











