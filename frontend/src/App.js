import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Notfound from "./components/Notfound"
import Dashboard from "./components/Dashboard"
import Temp1_MP from "./components/Temp1_MP"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import Temp2_RM from "./components/Temp2_RM"
import Templates from "./components/Templates"
import ContactUs from "./components/ContactUs"
import AboutUs from "./components/AboutUs"

function App() {
  TimeAgo.addDefaultLocale(en);
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login></Login>} path="login" />
          <Route element={<Signup />} path="signup" />
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Temp1_MP />} path="temp1_MP" />
          <Route element={<Temp2_RM />} path="temp2_RM" />
          <Route element={<Templates />} path="templates" />
          <Route element={<ContactUs />} path="contactUs" />
          <Route element={<AboutUs />} path="aboutUs" />

         





          <Route element={<Notfound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
