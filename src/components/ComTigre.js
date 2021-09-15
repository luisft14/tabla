import React,{Fragment,useState} from 'react';
const ComTigre=()=>{
		var url="";
const mostrarImagen=(e)=>{
	console.log(e.target.id);
	url="https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_cubs/story_full_width/16pc7wohn2_Small_WW22791.jpg";
	var dis='<img src="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg" width="400px" height="400px"/>';
	document.getElementById("pintar").innerHTML=dis;


}
	return(
		<Fragment>
		<div id="cajaTigre">
			<h1>Tigre</h1>
		 	<button className="btn btn-success" onClick={mostrarImagen}>Tigre</button>
		</div>
		<div id="pintar"></div>
		 </Fragment>
	);
}

export default ComTigre;