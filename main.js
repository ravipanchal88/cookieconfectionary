

var z;
var x = 0;
Cookies.set("totalcookie",0);
Cookies.set("cookie1",0);
Cookies.set("cookie2",0);
Cookies.set("cookie3",0);

function getCookieCounts(){
   z = parseInt((Cookies.get("totalcookie")));
   return(z);
}

function update_totalcookie(count){
	z=z+1;
	Cookies.set("totalcookie",z);
}

function recordcookie1(){
	getCookieCounts();
	current_x = parseInt((Cookies.get("cookie1")));
	x = current_x + 1;
	update_totalcookie(x);
	Cookies.set("cookie1", parseInt(x));
	displaycookie_count();
}

function recordcookie2(){
	getCookieCounts();
	current_x = parseInt((Cookies.get("cookie2")));
	x = current_x + 1;
	update_totalcookie(x);
	Cookies.set("cookie2", parseInt(x));
	displaycookie_count();
	
}

function recordcookie3(){
	getCookieCounts();
	current_x = parseInt((Cookies.get("cookie3")));
	x = current_x + 1;
	update_totalcookie(x);
	Cookies.set("cookie3", parseInt(x));
	displaycookie_count();
	
}


function displaycookie_count(){
	getCookieCounts();
	document.getElementById('cookie1_count').innerHTML = parseInt((Cookies.get("cookie1")));
	document.getElementById('cookie2_count').innerHTML = parseInt((Cookies.get("cookie2")));
	document.getElementById('cookie3_count').innerHTML = parseInt((Cookies.get("cookie3")));
	document.getElementById('total_count').innerHTML = parseInt((Cookies.get("totalcookie")));

}

function clearcookies(){
	Cookies.set("cookie1", 0);
	Cookies.set("cookie2", 0);
	Cookies.set("cookie3", 0);
	Cookies.set("totalcookie", 0);
	displaycookie_count();
}
