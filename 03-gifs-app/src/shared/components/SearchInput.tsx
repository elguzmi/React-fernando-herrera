import React, { useEffect, useState } from "react";

interface SearchInputProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

export const SearchInput = ({placeholder = 'Buscar', onSearch}: SearchInputProps) => {

    const [inputValue, setInputValue] = useState('');

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            onSearch(inputValue)
        }, 700)

        return ()=>{
            clearTimeout(timeOutId)
            console.log('funxion de limpieza')
        }
    }, [inputValue, onSearch])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const handleSearch = ()=>{
        onSearch(inputValue)
        //setInputValue('')
    }
    const handleKeyDown = (event : React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === 'Enter'){handleSearch()}
    }

    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder} 
                value={inputValue} 
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}