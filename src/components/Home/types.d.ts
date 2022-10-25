export interface Post{
    id:number
    authorName:string
    authorProfilePicture:string
    horaPublicacion: string
    comentario: Array<Comment>
    reacciones: Array<Reaccion>
    categorias:Array<Categoria>
    descripcion?:string
    media?:string}

interface Comment{
    id:number
    authorName:string
    authorProfilePicture:string
    comment:string
}

interface Reaccion{
    authorName:string
    authorProfilePicture:string
    reaccion:string
}

interface Categoria{
    id:number
    nombre:string
}
