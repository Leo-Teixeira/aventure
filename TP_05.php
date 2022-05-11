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
		$nbPiecesEquip=1;
		$encombrement=10;
		// Contient les objets : La clé est le nom de l'objet
		$equipement=["Epée" =>10];
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
				</table>
				<p>Vous posséder '.$nbPiecesEquip.' objets pour un total de '.$encombrement .' encombrement.</p>
				';
		}
		
	?>
	</body>
</html>
