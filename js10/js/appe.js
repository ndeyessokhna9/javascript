// var paragraphe  = document.getElementById("paragraphe");
 // alert(paragraphe.innerHTML);
 // paragraphe.innerHTML="Du text plus long...";
// var pseudo= prompt("veillez entrz votre pseudo");
// paragraphe.innerHTML = 'Bonjours <b> ' + pseudo + ' </b> !';
// var image=document.getElementById("image");
// var srcImage=image.getAttribute('src');
// var paragraphe  = document.getElementById("src-image");
// paragraphe.innerHTML='la source de l\'image est : '+ srcImage;
// alert(image.whidth);
// image.setAttribute('src','images/new-york.jpg');

// var image=document.getElementById("image");
// var paragraphe  = document.getElementById("src-image");
// // paragraphe.innerHTML = 'Bonjours <b> ' + ' </b> !';
// // console.log(paragraphe.innerHTML);
//  paragraphe.innerHTML='la source de l\'image est : ';
// image.src ='images/new-york.jpg';
// paragraphe.innerHTML='la source de l\'image est : ' + image.src;
var image=document.getElementById("image");
// alert(image.getAttribute('class'));
// image.className=prompt('veuillez entrer une css: "petit" ou "grand"');
// alert(image.className);
image.classList.add('bords');
image.classList.remove('petit');
console.log(image.classList);
if(image.classList.contains('bords')){
	alert("l'image posséde des borbs");
}
else{
	alert("l'image ne posséde pas des bords");
}
