

// A commenter
function modifCar(caracteristique, valeur) {
	
	const POINT_TOTAL=50;
	const POINT_MIN=0;
	const VALEUR_MAX=20;
	const VALEUR_MIN=0;
	
	// A commenter
    let force = Number(document.getElementById("form2force").value);
    let agilite = Number(document.getElementById("form2agilite").value);
    let dexterite = Number(document.getElementById("form2dexterite").value);
    let constitution = Number(document.getElementById("form2constitution").value);
    let magie = Number(document.getElementById("form2magie").value);

    let totalCarac = force + agilite + dexterite + constitution + magie;
	
	// A commenter
	if ((totalCarac < POINT_TOTAL && totalCarac > 0) || (totalCarac === POINT_TOTAL &&  valeur < 0) || (totalCarac === POINT_MIN &&  valeur > 0))
	{
		// A commenter
		valeurCarac=Number(document.getElementById("form2" + caracteristique).value);
		if ((valeurCarac < VALEUR_MAX && valeurCarac > 0) || (valeurCarac === VALEUR_MAX &&  valeur < 0) || (valeurCarac === VALEUR_MIN &&  valeur > 0))  
		{	
			document.getElementById("form2" + caracteristique).value = Number(document.getElementById("form2" + caracteristique).value)+valeur;
			document.getElementById("form2" + caracteristique+"BM").value = Number(document.getElementById("form2" + caracteristique).value)-10 ;
		}
	} 
}

// A commenter
function validationMdp() { 
	var estCorrect=true;
	var str = document.getElementById("form2Mdp").value; 
	// A commenter
	if (!str.match( /[0-9]/g) || 
			!str.match( /[A-Z]/g) || 
			!str.match(/[a-z]/g) || 
			!str.match( /[^a-zA-Z\d]/g) ||
			!str.length >= 10)
	{
		estCorrect=false;
	}
	return estCorrect;
} 

// A commenter
function validationEmail(emailAVerifier) {
	var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
	if (expressionReguliere.test(emailAVerifier))
	{ 
		return(true);
	}
	return(false);
}

// A commenter
function validationInscription() {
	var formInsc  = document.getElementById('formInscription');
	// A commenter
	formInsc.addEventListener("submit", function (event) {
		var inscriptionValide = true;
		// A commenter
		document.getElementById("form2AvatarNomError").className="";		
		document.getElementById("form2GenreError").className="";
		document.getElementById("form2CaracError").className="";
		document.getElementById("form2LoginError").className="";
		document.getElementById("form2MdpError").className = "";
		document.getElementById("form2AvatarNomError").innerHTML="";		
		document.getElementById("form2GenreError").innerHTML="";
		document.getElementById("form2CaracError").innerHTML="";
		document.getElementById("form2LoginError").innerHTML="";
		document.getElementById("form2MdpError").innerHTML = "";

		// A commenter
		if (document.getElementById("form2AvatarNom").value=="")
		{
			errorHTML="Vous devez choisir un nom pour votre avatar !";
			document.getElementById("form2AvatarNomError").innerHTML = errorHTML	
			document.getElementById("form2AvatarNomError").className="formErrorMsg";
			inscriptionValide=false;
		}
		// A commenter
		if (document.getElementById("form2Genre").value=="0")
		{
			errorHTML="Vous devez sélectionner un genre !";
			document.getElementById("form2GenreError").innerHTML = errorHTML	
			document.getElementById("form2GenreError").className="formErrorMsg";
			inscriptionValide=false;
		}

		// A commenter
	    let force = Number(document.getElementById("form2force").value);
		let agilite = Number(document.getElementById("form2agilite").value);
		let dexterite = Number(document.getElementById("form2dexterite").value);
		let constitution = Number(document.getElementById("form2constitution").value);
		let magie = Number(document.getElementById("form2magie").value);
		let totalCarac = force + agilite + dexterite + constitution + magie;
		if (totalCarac!=50)
		{
			errorHTML=" Le montant total des caracteristiques doit être de 50 !";
			document.getElementById("form2CaracError").innerHTML = errorHTML	
			document.getElementById("form2CaracError").className="formErrorMsg";
			inscriptionValide=false;
		}
		// A commenter
	  	if (!validationEmail(document.getElementById("form2Login").value))
		{
			errorHTML=" L'adresse email n'est pas valide !";
			document.getElementById("form2LoginError").innerHTML = errorHTML
			document.getElementById("form2LoginError").className="formErrorMsg";
			inscriptionValide=false;
		}
		// A commenter
		var mdp = document.getElementById("form2Mdp").value; 
		if (!mdp.match( /[0-9]/g) || 
				!mdp.match( /[A-Z]/g) || 
				!mdp.match(/[a-z]/g) || 
				!mdp.match( /[^a-zA-Z\d]/g))
		{
			errorHTML=" Le mot de passe doit contenir :<br> Une majuscule, une minuscule, un chiffre, un caractère spécial!";
			document.getElementById("form2MdpError").innerHTML = errorHTML
			document.getElementById("form2MdpError").className="formErrorMsg";
			inscriptionValide=false;
		}
		// A commenter
		if (!inscriptionValide) {
			event.preventDefault();
		}
	}, false);
}

// A commenter
function validationConnexion() {
	var formInsc  = document.getElementById('formConnexion');
	// A commenter
	formInsc.addEventListener("submit", function (event) {
		var inscriptionValide = true;
		// A commenter
		document.getElementById("form1LoginError").className="";
		document.getElementById("form1MdpError").className = "";
		document.getElementById("form1LoginError").innerHTML="";
		document.getElementById("form1MdpError").innerHTML = "";

		// A commenter
	  	if (!validationEmail(document.getElementById("form1Login").value))
		{
			errorHTML=" L'adresse email n'est pas valide !";
			document.getElementById("form1LoginError").innerHTML = errorHTML
			document.getElementById("form1LoginError").className="formErrorMsg";
			inscriptionValide=false;
		}
		// A commenter
		if (document.getElementById("form1Mdp").value=="" )
		{
			errorHTML="Vous devez saisir un mot de passe !";
			document.getElementById("form1MdpError").innerHTML = errorHTML
			document.getElementById("form1MdpError").className="formErrorMsg";
			inscriptionValide=false;
		}
		// A commenter
		if (!inscriptionValide) {
			event.preventDefault();
		}
	}, false);
}

