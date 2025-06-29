import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import './App.css'
import { Navbar } from './Component/Navbar'
import { LayoutOne } from './Layout/LayoutOne'

function App() {
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        
      </Route>
    </Route>

  ))
  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
