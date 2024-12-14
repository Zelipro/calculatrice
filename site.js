const info = document.querySelector('.info')/*Cette maniere de selectionner ne fonctionne que pour les attributs class*/

const allbut = document.querySelectorAll('input[type="button"]')

function val(resul) 
{
	 	info.innerText=""
	 form.entry.value = form.entry.value + resul
}


function egal()
{
	if (form.entry.value == "")
	{
		info.innerText="Rien à Calculer !"
	}
	else
	{
			form.entry.value=eval(form.entry.value)
	}
}

function supp()
{
	form.entry.value=""
}
