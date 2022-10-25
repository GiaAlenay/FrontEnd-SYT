import { useState } from 'react'
import './SearchBar'
interface SearchBarStates{
    text:string
}
export default function SearchBar(){
    const[text, setText]=useState<SearchBarStates["text"]>('')
    const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        alert('guardado')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='search'
                        className="input"
                        onChange={onChangeHandler}
                        value={text} />
                <button  type="submit">Buscar</button>
            </form>
        </div>
    )
}