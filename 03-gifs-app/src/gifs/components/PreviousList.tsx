interface PreviousListProps {
    Searches: string[];
    onLabelClick : (search :string)=> void
}
export const PreviousList = ( {Searches , onLabelClick}: PreviousListProps ) => {
    return(
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {Searches.map((item)=>(
                    <li key={item} onClick={()=>onLabelClick(item)}>{item}</li>
                ))}
            </ul>
        </div>
    )
}