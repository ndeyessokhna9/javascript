//var utilisateur  =   {nom:"Paul",age:25,sexe:"M"};
// console.log(utilisateur);
function Personne(nom,age,sexe){
	this.nom=nom;
	this.age=age;
	this.sexe=sexe;
}
function Voiture(fab,an,prop){
	this.fabricant=fab;
	this.annee=an;
	this.proprietaire=prop;

	this.genererMessage=function(){

		alert(this.proprietaire.nom +'possede une'+this.fabricant +'de'+this.annee);
	};

}
var v = new Voiture ("Peugeot",2005,  utilisateur1);
	v.genererMessage();

var utilisateur1= new Personne("Paul",25,"M");
var utilisateur2= new Personne("Mattieu",17,"M");

// var voiture = new Voiture ("Peugeot",2005,utilisateur1);
// utilisateur1.nom ="Jean";
// console.log(voiture);
// console.log(utilisateur1);
// alert(voiture.proprietaire.age);
//utilisateur2.nom="Jean";
 //console.log(utilisateur2);