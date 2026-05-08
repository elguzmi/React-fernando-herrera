import { useEffect, useState } from "react";


// se puee hacer de ambas
// 1.  Crear un type con los keys de un objeto
// 2. Crear el objeto con los keys y los valores del type es decir colocar en el type 'blue'||'red'
const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
  // si queremos hacer algo que cambien fisicamente la pantalla, ocupamos el useSatate  una pieza de estado
  const [light, setLight] = useState<TrafficLightColor>('red'); 


  useEffect(()=>{
    console.log(light)
  },[light])


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-2xl">Semaforo con use Effect </h1>
        <h2 className="text-white text-2xl">Light: {light} 10</h2>


        <div className={`w-32 h-32 rounded-full ${light === 'red' ? colors[light] : 'bg-gray-500'}`}></div>

        <div className={`w-32 h-32 ${ light === 'yellow' ? colors[light] : 'bg-gray-500'  } rounded-full`}></div>
        <div className={`w-32 h-32 ${ light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

      </div>
    </div>
  );
};