
import usePokemones from '../hooks/usePokemones'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import './pokemones.css'
import Cargando from './Cargando'
import Detallepokemon from './DetallePokemon'
import Buscador from './Buscador'



    function Pokemon({ id, nombre, imagen, verPokemon }) {

        return (
            <div className='pokemon-card' onClick={verPokemon}>
                <img src={imagen} alt={nombre} className='pokemon-imagen' />
                <p className='pokemon-titulo'>
                    <span>#{id}</span>
                    <span>{nombre}</span>

                </p>
            </div>
        )

    }


    function Pokemones() {

        const { pokemones, masPokemones, verMas, searchPokemon} = usePokemones()
         const [busqueda, setBusqueda] = useState('')

        const [mostrar, setMostrar] = useState ({mostrar: false, pokemon: {} })
 
        const verPokemon = (pokemon) => setMostrar ({mostrar: true, pokemon})
        const noVerPokemon = () => {
            setMostrar ({ mostrar: false, pokemon: {} })
            setBusqueda ('')
        }
          
        const buscarPokemon = async (e) =>{

        e.preventDefault()

          if(!busqueda) return

          const pokemon = await searchPokemon(busqueda)

          setMostrar({mostrar: true, pokemon})

        }


    return (
    <>
    <Detallepokemon {...mostrar} cerrar={noVerPokemon}/>

    <Buscador busqueda={busqueda} setBusqueda={setBusqueda} buscarPokemon={buscarPokemon}/>

    <InfiniteScroll
        dataLength={pokemones.length} 
        next={masPokemones}
        hasMore={verMas}
        loader= {<Cargando />}
        endMessage={ <h3 className='titulo' style={{gridAutoColumns: '1/6'}}>No hay mas pokemones para mostrar</h3>}
        className='pokemon-container'>

            {pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)} />)}
        
        </InfiniteScroll>
    
    </>

    )


}

export default Pokemones