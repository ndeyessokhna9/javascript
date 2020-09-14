document.getElementById("inscription").addEventListener('submit',  function(e){
	e.preventDefault();
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		console.log(this);
	};
	xhr.open("GET","/async/script.php",true);
	xhr.send();
	return false;
	});
	