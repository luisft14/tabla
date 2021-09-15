import React,{Fragment,useState} from 'react';
const ComPerro=()=>{
		var url="";
const mostrarImagen=(e)=>{
	console.log(e.target.id);
	url="https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_cubs/story_full_width/16pc7wohn2_Small_WW22791.jpg";
	var dis='<img src="https://es.himgs.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-t.jpg" width="400px" height="400px"/>';
	document.getElementById("pintar").innerHTML=dis;


}
	return(
		<Fragment>
		<div id="cajaPerro">
			<h1>Perro</h1>
			<button className="btn btn-danger"onClick={mostrarImagen}>Perro</button>		
		</div>
		<div id="pintar"></div>
		 </Fragment>
	);
}

export default ComPerro;