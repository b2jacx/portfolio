function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin");
	var parameter = getParams();
	console.log(parameter["username"]);
	console.log(parameter["password1"]);
	form.onsubmit = checkLogin;

}
function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	uname = document.forms["myLogin"]["username"].value;
	pword = document.forms["myLogin"]["password"].value;
	var parameter = getParams();
	console.log(parameter.firstname);

	if(parameter["username"] == username && parameter["password"] == password){
		alert("Correct");
		return true;
	}

	else {
		alert("Please Check your username and password");
		return false;
	}
}

/*

function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	
	var form = document.getElementById("myLogin");
	form.onsubmit  = checkLogin;
	
}

function checkLogin(){
	var username = document.forms["myLogin"]["username"].value;
	var password = document.forms["myLogin"]["password1"].value;
	var parameter = getParams();
	console.log(parameter.firstname);
	// alert(username);
    if(parameter.username == username && parameter.password1 == password1){
        // var form = document.getElementById("errormsg");
        // form.innerHTML = "Passwordไม่ตรงกัน";
        //return true;
        alert(true);
    } else{
         
		 alert("Fill_again");
		 return false;
		 
    }
	
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			
/*

function getParams() {
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
   }
	return params;
}

window.onload = loginLoad;
function loginLoad(){
  // วิธีใช้ getParams()
  
  var form = document.getElementById("myLogin");
  form.onsubmit  = checkLogin;
  
}

function checkLogin(){
  var username = document.forms["myLogin"]["username"].value;
  var password = document.forms["myLogin"]["password"].value;
  var parameter = getParams();
  console.log(parameter.firstname);
  // alert(username);
  if(parameter.username == username && parameter.password == password){
	  // var form = document.getElementById("errormsg");
	  // form.innerHTML = "Passwordไม่ตรงกัน";
	  //return true;
	  alert(true);
  } else{
	   
	   alert("Fill_again");
	   return false;
	   
  }
  
  //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}*/