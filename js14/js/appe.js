
var demo=document.getElementById("demo");
function loadDoc(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	// console.log(this);

	if (this.readyState == 4 && this.status ==200 ){

		 document.getElementById("demo").innerHTML =
      this.responseText;
		
	}
	else if (this.readyState == 4 && this.status == 404) {
			alert("Erreur 404:/ " );""
		}
};
xhr.open("GET","async/texte.txt", true);
// xhr.open("GET","async/donnees.txt",true);
xhr.send();
xhr.responseType = "text";
}
