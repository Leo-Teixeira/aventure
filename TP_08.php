<!DOCTYPE html>
<html>
	<head>
        <title>TC6 TP Noté</title>
        <meta charset="utf-8">
		<link  href="style.css" rel="stylesheet">
		<script src="script.js"></script>
    </head>
    
    <body>
        <h1>Mon équipement</h1>
	<?php
		$encombrement=0;
		// Contient les objets : La clé est le nom de l'objet
		$equipement=["Epée" =>10,"Armure en cuir" => 20,"Bottes" => 5,"Casque" =>5];
		// Récupération du nombre d'élément du tableau
		$nbPiecesEquip=count($equipement); 
		if ($nbPiecesEquip==0)//Si nombre de pieces d'equipement égal 0
		{
			echo '<p class="para">Vous ne possédez aucun équipement pour le moment.</p>';			
		}
		else //Sinon 
		{
			echo '<p class="para">Voici votre équipement !</p>
				<table border=1>
				<tr><td>Objet</td><td>Encombrement</td></tr>';
			// Parcours de la table équipement	le nom va dans item et l'encombrement dans Value
			foreach ($equipement as $item => $value)//Boucle d'affichage
			{
				echo'<tr><td>'.$item.'</td><td>'.$value.'</td></tr>';
				$encombrement+=$value;
			}
			echo'</table>';
			echo'<p>Vous posséder '.$nbPiecesEquip.' objets pour un total de '.$encombrement .' encombrement.</p>';
		}
	?>
	

	<form id="formEquip">
		<h1>Ajouter un équipement</h1>
		<table>
		<tr><td><label for="formObjet">Objet :</label></td><td><input id="formObjet"><div id="formObjetError" class=""></div></td></tr>
		<tr><td><label for="formEncombrement">Encombrement :</label></td><td><input id="formEncombrement">
		<div id="formEncombrementError" class=""></div></td></tr>
		<tr><td>&nbsp;</td><td><input type="submit" id="btn_formEquip" name="" onclick="validationFormEquip()"></td></tr>
		</table>
	</form>
	<div id="nouvelEquipement"></div>

</html>
