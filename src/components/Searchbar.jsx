import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({search}) {
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    function handleSubmit(e) {
        (search(name))
    }
    

return(
    <div class="flex justify-center mt-10">
    <div class="rounded-lg bg-gradient-to-r from-orange-400 via-pink-600 to-purple-800" style={{padding:"2px"}}>
        <div class="p-1 bg-black rounded-lg" style={{width:"25vw", height:"35px"}}>
        <input
        style={{width:"90%"}}
        class="pl-2 bg-transparent text-pink outline-0 placeholder-pink-600 text-pink-600"
        type= 'text'
        placeholder = "Search"
        onChange = {(e) => handleInputChange(e)}
        />
        <button style={{width:"10%"}} class='searchbar text-pink-600' onClick={(e) => handleSubmit(e)}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</button>
        </div>
    </div>
    </div>
)

}