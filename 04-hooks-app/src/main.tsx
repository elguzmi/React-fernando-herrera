import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {HooksApp} from './HooksApp.tsx'
//import { TrafficLight } from './01-useState/TrafficLight.tsx'
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TrafficLightWithEffect />
  </StrictMode>,
)
