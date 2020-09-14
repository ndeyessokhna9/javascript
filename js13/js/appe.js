// document.getElementById("inscription").addEventListener('submit',  function(e){
	
// 	var erreur;
// 	var inputs=document.getElementsByTagName("input");
// 	for (var i=0;i<inputs.length;i++) {
// 		if (!inputs[i].value) {
// 			erreur="veuillez renseigner tous les champs";
// 		}
// 	}
// 	if (erreur) {
// 	e.preventDefault();
// 	document.getElementById("erreur").innerHTML= erreur;
// 	 	return false;
// 	 }

	// else{
	// 	alert('Formulaire envoyé!');
	// var pseudo=document.getElementById("pseudo");
	// var email =document.getElementById("email");
	// var email2=document.getElementById("email2");
	// var mdp =document.getElementById("mdp");
	// if (!pseudo.value) {
	// 	erreur="veuillez renseigner un pseudo";
	// }
	// 	if (!email.value) {
	// 	erreur="veuillez renseigner un email";
	// }
	// 	if (!mdp.value) {
	// 	erreur="veuillez renseigner un mot de passe";
	// }
	// if (erreur) {
	// 	e.preventDefault();
	// 	document.getElementById("erreur").innerHTML= erreur;
	// 	return false;
	// }
	// else{
	// 	alert('Formulaire envoyé!');

// 	else{
// 	 	alert('Formulaire envoyé!');
// 	}
// });
	document.getElementById("email2").addEventListener("input",function(){
		
		if(this.value != document.getElementById("email").value){
			paragrapheErreur.innerHTML= "les deux adresses email ne correspondent pas ";

		}
		else{
			paragrapheErreur.innerHTML=" ";

		}

	})

console.log(document.forms["inscription"]["email-confirmation"]);
console.log(document.forms["inscription"])
 document.forms["inscription"].addEventListener('submit',  function(e){
	
 	var erreur;
//traitement cas par cas(input unique)
var inputs=this.getElementsByTagName("input");
if (inputs["email"].value != primf@xgmail.com) {
			erreur="Adresse email incorrecte";
		}
	
	//traitement generique
 	for (var i=0;i<inputs.length;i++) {
 		console.log(inputs[i]);
	if (!inputs[i].value) {
 		erreur="veuillez renseigner tous les champs";
  		}
 	} 	if (erreur) {
 	e.preventDefault();
 	  	document.getElementById("erreur").innerHTML= erreur;
 	 	return false;
 	 }

 	else{
	 	alert('Formulaire envoyé!');
 	 }
 	  	});