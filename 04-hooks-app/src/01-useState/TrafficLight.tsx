import { useState } from "react";

// se puee hacer de ambas
// 1.  Crear un type con los keys de un objeto
// 2. Crear el objeto con los keys y los valores del type es decir colocar en el type 'blue'||'red'
const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {
  // si queremos hacer algo que cambien fisicamente la pantalla, ocupamos el useSatate  una pieza de estado
  const [light, setLight] = useState<TrafficLightColor>('red'); 

  const handledColorChanged = (color:TrafficLightColor)=>{
    setLight((prev)=>{
      console.log(prev)
      return color
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">


        <div className={`w-32 h-32 rounded-full ${light === 'red' ? colors[light] : 'bg-gray-500'}`}></div>

        <div className={`w-32 h-32 ${ light === 'yellow' ? colors[light] : 'bg-gray-500'  } rounded-full`}></div>
        <div className={`w-32 h-32 ${ light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={()=>handledColorChanged('red')}>
            Rojo
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={()=>handledColorChanged('yellow')}>
            Amarillo
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={()=>handledColorChanged('green')}>
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};