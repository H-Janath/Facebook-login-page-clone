import { useState } from 'react'
import './App.css'
import Login from './login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="continer ">
      <div className="row">
        <div className="col-lg-6">
        
        </div>
        <div className="col-lg-6">
        <Login/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
