import './App.css'
import Login from './login'
import Side from './side'
function App() {
 

  return (
    <>
    <div className="continer ">
      <div className="row">
        <div className="col-lg-6 ">
          <Side/>
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
