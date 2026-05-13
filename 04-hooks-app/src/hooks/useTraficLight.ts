

import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

export const useTraficLight = ()=>{
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5)

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

  return {
    //PROPS
    countdown,

    //COMPUTED
    countdownStyle: `${countdown * 20}%`,
    greenLightColor: light === 'green' ? colors[light] : 'bg-gray-500',
    yellowLightColor: light === 'yellow' ? colors[light] : 'bg-gray-500',
    redLightColor: light === 'red' ? colors[light] : 'bg-gray-500',


    //METHODS


  }
  
}