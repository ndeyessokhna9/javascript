// var titre=document.getElementById('titre');
// console.log(titre);
// console.log(titre.style);
// titre.style.color="white";
// titre.style.paddingTop="15px";
// console.log(titre.style);

// titre.style.backgroundColor=prompt("veuillez entrer le nom d'une couleur en anglais");
// console.log(titre.style.backgroundColor);
// console.log(titre.style.color);
var titre=document.getElementById('titre');
console.log(titre.style);
console.log(titre);
var style=getComputedStyle(titre).width;

console.log(style);