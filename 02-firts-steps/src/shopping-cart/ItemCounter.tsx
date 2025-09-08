import {  MouseEvent, useState } from "react"
import './ItemCounter.css'

interface Props {
  name: string
  quantity?:number
}

export function ItemCounter({name, quantity = 0} : Props) {

  const [ count , setCount ] = useState(quantity)
  
  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubtract = () => {
    if(count === 1) return
    setCount(count - 1)
  }

  const handleClick = (evento : MouseEvent<HTMLButtonElement>)=>{
    console.log('click', name , evento.target)
  }
  return (
    <section className="item-row"
    // style={{ display:'flex', alignItems:'center' , gap:10, marginTop:10 }}
    >
      <span style={{ fontSize:20 , width:150 }}>{ name }</span>
      <button
        onClick={handleAdd}
      >+1</button>
      <span>{ count }</span>
      <button 
        onClick={handleSubtract}
      >-1</button>
    </section>
  )
}