import { GifsContainer } from "./gifs/components/GifsContainer"
import { PreviousList } from "./gifs/components/PreviousList"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchInput } from "./shared/components/SearchInput"
import { useGifs } from "./gifs/hooks/useGifs"



export const GifsApp = () => {
    const {gifs ,previousSearches,handleSearch,handledSearchClick} = useGifs()
 return (
    <>
        {/* header */}
        <CustomHeader title="Buscador de gifs" description="Descubre y comparte tus gifs favoritos" />


        {/* search container */}
        <SearchInput placeholder="Buscar Gifs" onSearch={handleSearch} />


        {/* busquedas previas */}
        <PreviousList Searches={previousSearches} onLabelClick={handledSearchClick} />


        {/* gifs container */}
        <GifsContainer gifs={gifs} />
    </>
  )
}