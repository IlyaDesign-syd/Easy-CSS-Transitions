import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[min(90vw,_90vh)] h-[min(90vw,_90vh)]'>
      <div className='bg-slate-700 rounded-sm relative w-[100%] h-[100%]'>
        <div className='bg-yellow-500 absolute rotate-45 w-[12%] h-[12%] left-1/4 top-1/2'></div>
      </div>

    </div>
  )
}

export default App
