import './buscador.css'
import { Buscar } from './Iconss'

function Buscador({busqueda, setBusqueda, buscarPokemon}){

return(

    <>
    
    <h3 className='titulo'>ELige tu favorito</h3>
    
    <form className='container-buscador' onSubmit={buscarPokemon}>
 <input type='text' placeholder='Buscar Pokemon' className='input-buscar'  
 value={busqueda} 
 onChange={(e) => setBusqueda(e.target.value)}/>
   <button className='btn-buscar' type='submit'>
    <Buscar />
    Buscar Pokemon
   </button>

    </form>
    
    
    </>


)

}

export default Buscador