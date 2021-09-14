import React,{Fragment,useState} from 'react';
import App from '../App';
const Formulario=()=>{
	const [datos,setDatos] = useState({
		valor:0
	})
	const [tabla,setTabla]=useState([]);
	const crearTabla=(event)=>{
		//console.log(event.target.value);
		setDatos({
			...datos,[event.target.name]:event.target.value
		})
	}
	const datost =[];
	var objTabla={};
	const enviardatos=(event)=>{

		event.preventDefault();
		console.log(datos.valor);
		
		for (var i = 1; i <= 10; i++) {
			var operacion =0;
			operacion=(datos.valor*i);
			 objTabla={
				num1:i,
				signo:"x",
				valor:datos.valor,
				resultado:operacion

			}
			setTabla(tabla.concat(...tabla,{objTabla}));
		}
	
		valoresTabla();

	}


	function valoresTabla(){
		console.log("entro a valores")
		console.log(tabla);
		
	}


	return(
		<Fragment>
		<div>
		 <form onSubmit={enviardatos}>
			<input type="number" name="valor" onChange={crearTabla}/>
  			<button type="submit">Calcular</button>		 
		 </form>
		
		</div>
		<h3>{datos.valor}</h3>
		<h4>tabla</h4>
		{
			Object.keys(objTabla).map((valor,index)=>
			<p key={index}>{valor.num1} {valor.signo} {valor.valor} = {valor.resultado}</p>
			)
		}
		
		</Fragment>
	);

}
export default Formulario;
