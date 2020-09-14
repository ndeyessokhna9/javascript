// var pseudo = 'primfx';
// var tableau = [ 'PHP' ,  'c++' , 'Ruby', 5 , 'c#' , pseudo];
// // tableau[5]='pyton';
// // tableau.pop();
// // tableau.push('html','css');
// // tableau.pop();
// // tableau.shift();
// // console.log(tableau);
// // console.log(tableau[1]);
// console.log(tableau[0]);
// console.log(tableau);
// tableau.shift();
// console.log(tableau[0]);
// // console.log(tableau);
// var langageProg=[ ];
// while(true){
// 	var promptText=prompt('entrez un langage de programmation');
// 	if(promptText != ""){
// 		langageProg.push(promptText);
// 	}
// 	else {
// 		break;

// 	}
// }
// console.log(langageProg);



// var langageProg = ['c++' , 'c#' ,'Ruby',  'pyton'];
// // var promptText= prompt('entrez le nom d\'un langage de programmation');
// // if(langageProg.indexOf(promptText) != -1 ){
// // 	alert('ton langage existe');

// // }
// // else
// // {
// // 	alert("ton langage n'existe pas ");
// // }

// // console.log(langageProg);
// // langageProg.splice(1,2,'PHP' ,'JS');
// console.log(langageProg);
// // for(var i=0; i< langageProg.length ;i++){
// // 	console.log('Indexe =>  '+i+' | valeur => '+langageProg[i]);
// // }
// var langageProgText=langageProg.join('et');
// langageProg.push('php');
// console.log(langageProgText);


var langageProg='c++ - c# -Ruby';
langageProgArray=langageProg.split(' - ');
langageProgArray.shift();
 console.log(langageProg);
 console.log(langageProgArray);


