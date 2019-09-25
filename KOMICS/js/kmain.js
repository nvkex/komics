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