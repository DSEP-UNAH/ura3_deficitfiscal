// JavaScript Document
$(document).ready(function() {
	var ancho=window.innerWidth;
	console.log(ancho);
	if(ancho<600)
		dimension="width=100%"
	else if(ancho<800)
		dimension="width=90%"
	else if(ancho<1024)
		dimension="width=70%"
	else
		dimension="width='50%'"
	$("iframe[src*='hvp/embed.php']").wrap("<table align='center' "+dimension+"><tr><td></td></tr></table>");
});