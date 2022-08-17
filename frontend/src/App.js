import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Notfound from "./components/Notfound"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login></Login>} path="login" />
          <Route element={<Signup />} path="signup" />
          <Route element={<Dashboard />} path="dashboard" />


          <Route element={<Notfound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
