function openNav(){
			var x=document.getElementById("sidePanel").style.width;
			if(x=="24px"){
				document.getElementById("sidePanel").style.width="180px";
				document.getElementById("sideHandle").style.borderRadius="0px";
			}
			else{
				document.getElementById("sidePanel").style.width="24px";
				document.getElementById("sideHandle").style.borderRadius=" 0 10px 10px 0";
			}

		}

function validateLogIn(){
	var mail = document.getElementById("mail");
	var pass = document.getElementById("pass");

	if(mail.value != "" && pass.value != "")
		document.write("<h1 align = \"center\">Login Successful!</h1>");
	else{
		document.getElementById("errMsg").innerHTML = "*All fields are mandatory!";
	}
}

function validateSignUp(){
	var fn = document.getElementById("fn").value != "";
	var ln = document.getElementById("ln").value != "";
	var un = document.getElementById("un").value != "";
	var mail = document.getElementById("mail").value != "";
	var pass = document.getElementById("pass").value != "";
	var cpass = document.getElementById("cpass").value != "";

	if(fn && ln && un && mail && pass && cpass){
		if(document.getElementById("pass").value == document.getElementById("cpass").value)
			document.write("<h1 align = \"center\">Signup Successful!</h1>");
		else
			document.getElementById("errMsg").innerHTML = "*password doesn't match";
	}
	else{
		if(!fn)
			document.getElementById("errfn").innerHTML = "*";
		if(!ln)
			document.getElementById("errln").innerHTML = "*";
		if(!un)
			document.getElementById("errun").innerHTML = "*";
		if(!mail)
			document.getElementById("errmail").innerHTML = "*";
		if(!pass)
			document.getElementById("errpass").innerHTML = "*";
		if(!cpass)
			document.getElementById("errcpass").innerHTML = "*";

		document.getElementById("errMsg").innerHTML = "*All fields are mandatory";
	}

} 