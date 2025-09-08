import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstSteepsApp } from './FirstSteepsApp'
// import { MyAwesomeApp } from './MyAwesomeApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>   
    <FirstSteepsApp />
    {/* <MyAwesomeApp /> */}
  </React.StrictMode>,
)
