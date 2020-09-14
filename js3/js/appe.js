// var maVariable = 0;
var message;

// if ( typeof maVariable !=='undefined' && maVariable) {
// 	alert('contient des informations');
// }
// else{
// 	alert('ne contient pas de grande chose ');
// }
var langagePrefere=prompt('quel est votre langage de programmation prefere');
// if (langagePrefere == 'PHP'){

// 	alert('pas mal mais y\' a miex :p');
// }
// else if(langagePrefere == 'JS'){
// 	alert('parfait');

// }

// else if(langagePrefere == 'RUBY' ){
// 	alert('genial!');
	
// }
// else if(langagePrefere == 'PYTON'){
// 	alert('mouais bof');
	
// }
// else{
// 	alert("je n'ai aucun info consernant ton langage...donc il ne doit pas etre si genial");
// }
switch (langagePrefere){

		case "PHP":

		message ='pas mal mais y\' a miex :p';

		break;
		case "JS":
		
			message='parfait';
		break;
		case "RUBY":
			
			message='genial!';
			break;
			case "PYTON":
			
			message='mouais bof!';
			break;
			default:
				
			message="je n'ai aucun info consernant ton langage...donc il ne doit pas etre si genial";
			}
			alert(message);
			console.log(message);
			// if (langagePrefere == 'PHP'){
			// 	alert('coul : D');
			// }
			// else{
			// 	alert('dommage : P');
			// }
			
			 alert((langagePrefere=="PHP" || langagePrefere=="JS") ? true : false);
			 






