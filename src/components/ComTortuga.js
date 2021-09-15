import React,{Fragment,useState} from 'react';
const ComTortuga=()=>{

		var url="";
const mostrarImagen=(e)=>{
	console.log(e.target.id);
	url="https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_cubs/story_full_width/16pc7wohn2_Small_WW22791.jpg";
	var dis='<img src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/curiosidades.batanga.com/files/93385233.jpg" width="400px" height="400px"/>';
	document.getElementById("pintar").innerHTML=dis;


}
		return(
			<Fragment>
			<div id="cajaTortuga">
				<h1>Tortuga</h1>
				<button className="btn btn-secondary" onClick={mostrarImagen}>Tortuga</button>
			</div>
			<div id="pintar"></div>
		 </Fragment>
	);
}

export default ComTortuga;