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
		if ($nbPiecesEquip==0)//Si nombre de pieces d'equipement égal 0
		{
			echo '<p class="para">Vous ne possédez aucun équipement pour le moment.</p>';			
		}
		else //Sinon 
		{
			echo '<p class="para">Bientôt ici votre équipement !</p>';
		}
	?>
	</body>
</html>
