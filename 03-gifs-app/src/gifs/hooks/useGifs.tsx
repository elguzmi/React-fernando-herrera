import { useState } from "react";
import { getGifsByQueryAction } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = ()=>{

    const [ gifs , setGifs ] = useState<Gif[]>([])
    const [ previousSearches, setPreviousSearches ] = useState<string[]>([]) 

    const handledSearchClick = async (term:string)=>{
        const gifs = await getGifsByQueryAction(term)
        setGifs(gifs)
    } 

    const handleSearch = async ( query:string )=>{
        // Validar que el query no esté vacío
        const searchWord = query.trim().toLowerCase()
        if(searchWord.trim().length === 0 )return
        if(previousSearches.includes(searchWord))return

        // previousSearches.unshift(searchWord)   // inserta el elemento al inicio del array
        setPreviousSearches( [ searchWord , ...previousSearches.filter((item,index)=>index<=6)])
        //setPreviousSearches( [ searchWord , ...previousSearches].splice(0,8))

        const gifs = await getGifsByQueryAction(searchWord)
        setGifs(gifs)
        
    }

    return {
        //values
        gifs,
        previousSearches,
        
        //methods
        handledSearchClick,
        handleSearch
    }
}