var win = 1;
var lost =1;
function winning(){
    document.getElementById('score_won').innerHTML = win;
	var w = 1;
	win += w;
}
function loosing(){
    document.getElementById('score_lost').innerHTML = lost;
	var l = 1;
	lost += l;
}
function play1(){
	uchoice = 1;
	var cchoice = Math.floor(Math.random() * 3) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice == 1){
		var o = "YOU WON"
		document.getElementById("comments").innerHTML = o;
		winning();
	}
	else{
		var c = "YOU LOST";
		document.getElementById("comments").innerHTML = c;
		loosing();
	}
}

function play2(){
	uchoice = 2;
	var cchoice = Math.floor(Math.random() * 3) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 2){
		var o = "YOU WON";
		document.getElementById("comments").innerHTML = o;
		winning();
	}
	else{
		var c = "YOU LOST";
		document.getElementById("comments").innerHTML = c;
		loosing();
	}
}

function play3(){
	uchoice = 3;
	var cchoice = Math.floor(Math.random() * 3) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 3){
		var o = "YOU WON";
		document.getElementById("comments").innerHTML = o;
		winning();
	}
	else{
		var c = "YOU LOST";
		document.getElementById("comments").innerHTML = c;
		loosing();
	}
}