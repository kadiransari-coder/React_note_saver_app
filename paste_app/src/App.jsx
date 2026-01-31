import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home.jsx'
import Navbar from './component/Navbar.jsx'
import Pastes from './component/Pastes.jsx'
import Viewpastes from './component/Viewpastes.jsx'
import './App.css'

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
      <Navbar/>
      <Home/>
      </div>
    },
    {
      path:"/paste",
      element:
      <div>
        <Navbar/>
        <Pastes/>
      </div>
    },
    {
      path:"/paste/:id",
      element:
      <div>
        <Navbar/>
        <Viewpastes/>
      </div>
    },
  ]
)

function App() {
 
  return (
   <div>
   <RouterProvider router={router}/>
   </div>
  )
}

export default App
