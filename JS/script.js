var version = "windows";

getTitleFontSize = function(){
	var topPanelHeight = (7/10)*window.innerHeight;
	var botPanelHeight = (3/10)*window.innerHeight;
	var dominant = 0;
	version = "windows";
	if(window.innerWidth > window.innerHeight)
		dominant = window.innerWidth;
	else
		dominant = window.innerHeight;
	if(window.innerWidth < 750 || detectMob()){
		version = "android"
		dominant = window.innerWidth;
		var links = document.getElementById("styles");
		links.href = "CSS/stylesAndroid.css";
		return;
	}
	else{
		var links = document.getElementById("styles");
		links.href = "CSS/style.css";
	}
	if(dominant > 800)
		dominant = 800;
	var fontSize = (1/10)*dominant;
	
	var titles = document.getElementsByClassName("titleTop");
	for(var i = 0;i < 2;i++){
		if(version == "android")
			titles[i].style.top =  topPanelHeight - (4.5/10)*dominant;
		else
			titles[i].style.top = topPanelHeight - (3/10)*dominant;
	}
	
	titles = document.getElementsByClassName("titleBot");
	for(var i = 0;i < 2;i++){
		if(version == "android")
			titles[i].style.top = (1.5/5)*botPanelHeight;
		else
			titles[i].style.top = (1.5/5)*botPanelHeight;
	}
	
	titles = document.getElementsByClassName("title");
	for(var i = 0;i < 4; i++){
		titles[i].style.fontSize = fontSize;
	}
}

updateLogicAssets = function(){
	getTitleFontSize();
}

fixLogo = function(){
	var logo = document.getElementsByClassName("logo");
	logo[0].style.transform = "translate(0,0)";
}


moveOutLogo = function(direction){
	if(version == "android") return;
	var logo = document.getElementsByClassName("logo");
	if(direction == 1){
		logo[0].style.transform = "translate(5vh,5vh)";
	}
	if(direction == 2){
		logo[0].style.transform = "translate(-5vh,5vh)";
	}
	if(direction == 3){
		logo[0].style.transform = "translate(5vh,-5vh)";
	}
	if(direction == 4){
		logo[0].style.transform = "translate(-5vh,-5vh)";
	}
		
}

var loading;
aboutMeHovered = function(){
	moveOutLogo(1);
	var line = document.getElementsByClassName("aboutMeLine");
}


aboutMeLeft = function(){
	fixLogo();
	var line = document.getElementsByClassName("aboutMeLine");
}

openBituteh = function(){
	window.open("https://www.bituteh.com/");
}

openScrapy = function(){
	window.open("https://github.com/opiu516/scrapTrawler");
}

openIsland = function(){
	window.open("https://github.com/opiu516/islandCrash");
}

openAI = function(){
	window.open("https://github.com/opiu516/boleanAI");
}

openClicker = function(){
	window.open("https://github.com/opiu516/clicker");
}

openRecursion = function(){
	window.open("https://github.com/opiu516/recursion");
}

 function detectMob() {
    if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i))
	return true;
	return false;
}

addLogo = function(){
	return;
	document.getElementsByClassName("logo")[0].style.display = "block";
	console.log( "kur");
}

zoomIn = function(zoomer){
	if(version == "windows") return;
	scroll(0,0)
	var body = document.getElementsByTagName("body")[0];
	body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = "0";
    body.style.width = '100%';
	var logo = document.getElementsByClassName("logo")[0];
	logo.style.transitionProperty = "height,top";
	logo.style.transitionDelay = "0.5s";
	logo.style.transitionDuration = "0.6s";
	logo.style.height = "20vh";
	logo.style.top = "80vh";
}

zoomOut = function(){
	if(version == "windows") return;
	body = document.getElementsByTagName("body")[0];
	body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
	logo = document.getElementsByClassName("logo")[0];
	logo.style.top = "100vh";
	logo.style.height = "0";
	logo.style.transitionProperty = "height,top";
	logo.style.transitionDelay = "0s";
	logo.style.transitionDuration = "0.5s";
}

