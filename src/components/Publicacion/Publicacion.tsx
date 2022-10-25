import  './Publicacion.css'
import { Post } from '../../types'
import { useEffect } from 'react'
interface Props{
    id:number
    authorName:string
    authorProfilePicture:string
    descripcion:string
}
const Publicacion =({id, authorName, authorProfilePicture, descripcion}:Props)=>{
    // console.log('entro ' + posts)
    useEffect(()=>{
        console.log(id)
    },[])
    
 return (
    <div className='publicacion'>
        <h2>{authorName}</h2>
        <img className='publicacionPic' src={authorProfilePicture} alt='profile pic'/>
        <p>{descripcion}</p>
    </div>
 )
}
export default Publicacion