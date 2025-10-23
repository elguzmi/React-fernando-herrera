import { useState } from "react"
import { GifsContainer } from "./gifs/components/GifsContainer"
import { PreviousList } from "./gifs/components/PreviousList"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchInput } from "./shared/components/SearchInput"
import { getGifsByQueryAction } from "./gifs/actions/get-gifs-by-query.action"



export const GifsApp = () => {

    const [ previousSearches, setPreviousSearches ] = useState<string[]>([]) 

    const handledSearchClick = (term:string)=>{
        console.log(term);
    } 

    const handleSearch = async ( query:string )=>{
        // Validar que el query no esté vacío
        const searchWord = query.trim().toLowerCase()
        if(searchWord.trim().length === 0 )return
        if(previousSearches.includes(searchWord))return

        // previousSearches.unshift(searchWord)   // inserta el elemento al inicio del array
        setPreviousSearches( [ searchWord , ...previousSearches.filter((p,index)=>index<=6)])
        //setPreviousSearches( [ searchWord , ...previousSearches].splice(0,8))

        await getGifsByQueryAction(searchWord)
    }

 return (
    <>
        {/* header */}
        <CustomHeader title="Buscador de gifs" description="Descubre y comparte tus gifs favoritos" />


        {/* search container */}
        <SearchInput placeholder="Buscar Gifs" onSearch={handleSearch} />


        {/* busquedas previas */}
        <PreviousList Searches={previousSearches} onLabelClick={handledSearchClick} />


        {/* gifs container */}
        <GifsContainer gifs={mockGifs} />
    </>
  )
}