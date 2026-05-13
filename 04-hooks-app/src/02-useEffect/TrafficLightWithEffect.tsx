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
// esta parte de arriba e se coloca desde afuera ya que no depende de una pieza del hook

export const TrafficLightWithEffect = () => {
  // si queremos hacer algo que cambien fisicamente la pantalla, ocupamos el useSatate  una pieza de estado
  const [light, setLight] = useState<TrafficLightColor>('red'); 
  const [countdown, setCountdown] = useState(5)

  console.log('render',countdown);

 

  useEffect(()=>{
    if(countdown === 0) return;

    const interval = setInterval(()=>{
      setCountdown(prev => prev - 1);
    },1000)

    return ()=>{
      console.log('Cleaning up')
      // limpiar el intervalo
      clearInterval(interval)
    }

  },[countdown])


   // change ligth color effect
   useEffect(()=>{
    if(countdown > 0) return;
    if(countdown === 0) {
      setCountdown(5)
      if(light === 'red') {
        setLight('green');
        return
      }
      if(light === 'green') {
        setLight('yellow');
        return
      }
      if(light === 'yellow') {
        setLight('red');
        return
      }
    }
  },[countdown,light])


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-2xl">Semaforo con use Effect </h1>
        <h2 className="text-white text-2xl">CountDow {countdown}</h2>
        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 easy-linear"
          style={{width: `${countdown * 20}%`}}
          >

          </div>
        </div>

        <div className={`w-32 h-32 rounded-full ${light === 'red' ? colors[light] : 'bg-gray-500'}`}></div>

        <div className={`w-32 h-32 ${ light === 'yellow' ? colors[light] : 'bg-gray-500'  } rounded-full`}></div>
        <div className={`w-32 h-32 ${ light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

      </div>
    </div>
  );
};