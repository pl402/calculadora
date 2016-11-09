<?php 
style('calculadora', 'calculadora');
script('calculadora', 'numeral.min');
script('calculadora', 'calcula');

?>

<form action="#">
	<div id="pDivTabla">
		<table id="pTabla">
			<tr>
				<th>Equipos</th>
				<th>Momio</th>
			</tr>
			<tr>
				<td>1.</td>
				<td><input type="text" name="pMomio1" id="pTeam1" value=""  placeholder="Momio 1"></td>
			</tr>
			<tr>
				<td>2.</td>
				<td><input type="text" name="pMomio2" id="pTeam2" value=""  placeholder="Momio 2"></td>
			</tr>
			<tr>
				<td>3.</td>
				<td><input type="text" name="pMomio3" id="pTeam3" value=""  placeholder="Momio 3"></td>
			</tr>
			<tr>
				<td>4.</td>
				<td><input type="text" name="pMomio4" id="pTeam4" value=""  placeholder="Momio 4"></td>
			</tr>
			<tr>
				<td>5.</td>
				<td><input type="text" name="pMomio5" id="pTeam5" value=""  placeholder="Momio 5"></td>
			</tr>
			<tr>
				<td>6.</td>
				<td><input type="text" name="pMomio6" id="pTeam6" value=""  placeholder="Momio 6"></td>
			</tr>
			<tr>
				<td>7.</td>
				<td><input type="text" name="pMomio7" id="pTeam7" value=""  placeholder="Momio 7"></td>
			</tr>
			<tr>
				<td>8.</td>
				<td><input type="text" name="pMomio8" id="pTeam8" value=""  placeholder="Momio 8"></td>
			</tr>
			<tr>
				<td>Apuesta:</td>
				<td><input type="text" name="pApuesta" id="pApuesta" value="200"></td>
			</tr>
			<tr>
				<td>Ganancia:</td>
				<td><div id="pGana">$ 0.00</div></td>
			</tr>
			<tr>
				<td><div id="pReset" class="inlineblock button">Resetear</div></td>
				<td><div id="pCalcula" class="inlineblock button">Calcular Parlay</div></td>
			</tr>			
			<tr>
				<td colspan="2"><div id="nota">Nota: La ganancia no incluye la apuesta.</div></td>
			</tr>
		</table>
	</div>
</form> 

<?php if ($_['is_admin']) {
	print_unescaped($this->inc('part.add'));
} ?>
