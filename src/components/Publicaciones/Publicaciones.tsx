import './Publicaciones'
import Publicacion from '../Publicacion/Publicacion'
import { Post } from '../../types'
import { useEffect } from 'react'
const initialPublicaciones=[
    {
        id:1,
        authorName:'Julio R',
        authorProfilePicture:'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
        horaPublicacion: ' 1/27/2020, 9:30:00 PM',
        // comentario: Array<Comment>,
        // reacciones: Array<Reaccion>,
        // categorias:Array<Categoria>,
        descripcion:'Odio Vivir'
        // media?:string}
    },
    {
        id:2,
        authorName:'Rebeca Wilson',
        authorProfilePicture:'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427',
        horaPublicacion: ' 1/27/2020, 9:30:00 PM',
        // comentario: Array<Comment>,
        // reacciones: Array<Reaccion>,
        // categorias:Array<Categoria>,
        descripcion:'Yo tambien'
        // media?:string}

    }
]

const Publicaciones = ()=>{
    
    return (
        <div>
            {initialPublicaciones.map(iP=>{return(
            <div key={iP.id}>
                <Publicacion id={iP.id}
                           authorName={iP.authorName}
                            authorProfilePicture={iP.authorProfilePicture}
                            descripcion={iP.descripcion}/> 
            </div>)})}
            
        </div>
    )
}

export default Publicaciones