import React,{Fragment,useState} from 'react';
import App from '../App';
const Formulario=()=>{

const enviardatos=(event)=>{
	event.preventDefault();
	const numeroTabla= document.getElementById("valor").value;
	var dise='<h3>Tabla</h3>';
	for (var i = 1; i <=10; i++) {
		dise+= i +" x "+numeroTabla+" = "+(i*numeroTabla)+"<br/>";
	}
	document.getElementById("tablaFinal").innerHTML= dise;

}

	return(
		<Fragment>
		
		<label>Seleccione un boton</label>
		
		</Fragment>
	);

}
export default Formulario;
