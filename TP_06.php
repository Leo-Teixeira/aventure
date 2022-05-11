<!DOCTYPE html>
<html>
	<head>
        <title>TC6 TP Noté</title>
        <meta charset="utf-8">
		<link  href="style.css" rel="stylesheet">
    </head>
    
    <body>
        <h1>Mon équipement</h1>
	<?php
		$nbPiecesEquip=4; 
		$encombrement=40;
		// Contient les objets : La clé est le nom de l'objet
		$equipement=["Epée" =>10,"Armure en cuir" => 20,"Bottes" => 5,"Casque" =>5];
		if ($nbPiecesEquip==0)//Si nombre de pieces d'equipement égal 0
		{
			echo '<p class="para">Vous ne possédez aucun équipement pour le moment.</p>';			
		}
		else //Sinon 
		{
			echo '<p class="para">Voici votre équipement !</p>
				<table border=1>
				<tr><td>Objet</td><td>Encombrement</td></tr>
				<tr><td>Epée</td><td>'.$equipement["Epée"].'</td></tr>
				<tr><td>Armure en cuir</td><td>'.$equipement["Armure en cuir"].'</td></tr>
				<tr><td>Bottes</td><td>'.$equipement["Bottes"].'</td></tr>
				<tr><td>Casque</td><td>'.$equipement["Casque"].'</td></tr>
				</table>
				<p>Vous posséder '.$nbPiecesEquip.' objets pour un total de '.$encombrement .' encombrement.</p>
				';
		}
		
	?>
	</body>
</html>
