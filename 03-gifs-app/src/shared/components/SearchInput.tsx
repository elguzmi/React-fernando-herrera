interface SearchInputProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

export const SearchInput = ({placeholder = 'Buscar', onSearch}: SearchInputProps) => {
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder} />
            <button onClick={() => onSearch('test')}>Buscar</button>
        </div>
    )
}