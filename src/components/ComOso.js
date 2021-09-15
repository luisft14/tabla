import React,{Fragment,useState} from 'react';
import PintarImagen from './PintarImagen';

const ComOso=()=>{
	var url="";
const mostrarImagen=(e)=>{
	console.log(e.target.id);
	url="https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_cubs/story_full_width/16pc7wohn2_Small_WW22791.jpg";
	var dis='<img src="https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_cubs/story_full_width/16pc7wohn2_Small_WW22791.jpg" width="400px" height="400px"/>';
	document.getElementById("pintar").innerHTML=dis;


}

	return(
		<Fragment>
		<div id="cajaOso">
			<h1>Oso</h1>
			<button id="oso" onClick={mostrarImagen}>Oso</button>
		</div>
		<PintarImagen url={url}/>
		<div id="pintar"></div>
		</Fragment>
	);
}

export default ComOso;