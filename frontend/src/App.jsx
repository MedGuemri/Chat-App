import Home from "./pages/home/Home"
import {Routes,Route, Navigate} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import LoginPage from "./pages/login/LoginPage"
import Singup from "./pages/singup/singup"
import { useAuthContext } from "./context/athContext"





function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">

      <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/Singup" element={authUser? <Navigate to={"/"} />  : <Singup/>} />
        <Route path="/login" element={authUser? <Navigate to={"/"} />  : <LoginPage/>} />
      </Routes>
     

     <Toaster/>
    </div>
  )
}

export default App
