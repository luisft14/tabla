import React,{Fragment,useState} from 'react';
const ComTiburon=()=>{
		var url="";
const mostrarImagen=(e)=>{
	console.log(e.target.id);
	url="https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_cubs/story_full_width/16pc7wohn2_Small_WW22791.jpg";
	var dis='<img src="https://cronicasdeunamonite.files.wordpress.com/2019/06/conocer-naturaleza-tiburon-limon-bruce-buscando-a-nemo-xlsemanal-2.jpg?w=800&h=568&crop=1" width="400px" height="400px"/>';
	document.getElementById("pintar").innerHTML=dis;


}
	return(
		<Fragment>
		<div id="cajaTiburon">
			<h1>Tiburon</h1>
			<button className="btn btn-warning"onClick={mostrarImagen}>Tiburon</button>
		</div>
		<div id="pintar"></div>
		</Fragment>
	);
}

export default ComTiburon;