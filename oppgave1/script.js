var dag = new Array();

dag[0] = ["Norsk","Norsk","Norsk","Norsk","Norsk","Norsk","Norsk","Norsk"];
dag[1] = ["Historie","Historie","Historie","Gym","Gym","Gym","Gym","Gym"];
dag[2] = ["Kjemi","Kjemi","Kjemi","Kjemi","Kjemi","Kjemi","Kjemi","Kjemi"];
dag[3] = ["Matte","Matte","Matte","Matte","Matte","Matte","Matte","Matte"];
dag[4] = ["IT","IT","IT","IT","IT","IT","IT","IT"];

function skrivUt() {
	var komboDag = document.getElementById("dag");
	var valgtDag = komboDag.options[komboDag.selectedIndex].value;

	var komboTime = document.getElementById("time");
	var valgtTime = komboTime.options[komboTime.selectedIndex].value;

	document.getElementById("resultat").innerHTML = dag[valgtDag][valgtTime];
}

