import {createBrowserRouter} from "react-router-dom"
import home from './component/Home'
import './App.css'
const router = createBrowserRouter(
  [
    {
        path:'/',
        element:<home/>
    },
    {

    },
  ]
)



function App() {
 
  return (
   <div>
    hello ji
   
   </div>
  )
}

export default App
