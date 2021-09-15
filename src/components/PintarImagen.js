import React,{Fragment,useState} from 'react';

const PintarImagen=(url)=>{
var imagen= url.url;
	return(
		<Fragment>
		<h1>imagen</h1>
		 <img src={imagen}/>
		 </Fragment>
	)

}

export default PintarImagen;