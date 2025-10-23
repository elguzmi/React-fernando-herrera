import { useState } from "react"
import { GifsContainer } from "./gifs/components/GifsContainer"
import { PreviousList } from "./gifs/components/PreviousList"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchInput } from "./shared/components/SearchInput"



export const GifsApp = () => {

    const [ previousSearches, setPreviousSearches ] = useState<string[]>([]) 

    const handledSearchClick = (term:string)=>{
        console.log(term);
    } 

    const handleSearch = ( query:string )=>{
        // Validar que el query no esté vacío
        const searchWord = query.trim().toLowerCase()
        if(searchWord.trim().length === 0 )return
        if(previousSearches.includes(searchWord))return
        setPreviousSearches( [ searchWord , ...previousSearches.filter((p,index)=>index<=6)])
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