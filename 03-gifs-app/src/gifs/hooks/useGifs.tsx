import { useRef, useState } from "react";
import { getGifsByQueryAction } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// esta variable se dejo por fuera del componente 
// ya que al cambiar el estado el componente se vuelve a renderizar y se pierde el estado de la variable
//const gifCache:Record<string , Gif[]> = {}

export const useGifs = ()=>{

    const [ gifs , setGifs ] = useState<Gif[]>([])
    const [ previousSearches, setPreviousSearches ] = useState<string[]>([]) 
    const gifCache = useRef<Record<string , Gif[]>>({}) // No causa renders


    const handledSearchClick = async (term:string)=>{
        console.log(gifCache.current)
        if(gifCache.current[term]){
            setGifs(gifCache.current[term])
            return
        }
        
        const gifs = await getGifsByQueryAction(term)
        setGifs(gifs)
    } 

    const handleSearch = async ( query:string )=>{
        // Validar que el query no esté vacío
        const searchWord = query.trim().toLowerCase()
        if(searchWord.trim().length === 0 )return
        if(previousSearches.includes(searchWord))return

        // previousSearches.unshift(searchWord)   // inserta el elemento al inicio del array
        setPreviousSearches( [ searchWord , ...previousSearches.filter((item,index)=>index<=6 && item)])
        //setPreviousSearches( [ searchWord , ...previousSearches].splice(0,8))

        const gifs = await getGifsByQueryAction(searchWord)
        setGifs(gifs);
        gifCache.current[query] = gifs;       
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