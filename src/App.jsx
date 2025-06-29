import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import { LayoutOne } from './Layout/LayoutOne'
import { Dashboard } from './Pages/Dashboard'
import { About } from './Pages/About'
import { Blog } from './Pages/Blog'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'

function App() {
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Route>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Resister' element={<Register/>}/>
    </Route>

  ))
  return (
    <>
    <RouterProvider router={MyRoute} />
    </>
  )
}

export default App
