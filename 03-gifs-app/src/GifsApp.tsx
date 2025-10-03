import { useState } from "react"
import { GifsContainer } from "./gifs/components/GifsContainer"
import { PreviousList } from "./gifs/components/PreviousList"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchInput } from "./shared/components/SearchInput"



export const GifsApp = () => {

    const [previousSearches, setPreviousSearches] = useState<string[]>(['saitama', 'goku', 'elder ring', 'one piece']) 
    const handledSearchClick = (term:string)=>{
        console.log(term);
    } 

    const handleSearch = ( query:string )=>{
        console.log(query)
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