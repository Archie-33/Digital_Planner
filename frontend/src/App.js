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
import Temp6_TDL from "./components/Temp6_TDL"
import Temp7_WP from "./components/Temp7_WP"
import Temp3_TEP from "./components/Temp3_TEP"
import Temp5_BP from "./components/Temp5_BP"
import Temp4_SCP from "./components/Temp4_SCP"

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
          <Route element={<Temp3_TEP />} path="temp3_TEP" />
          <Route element={<Temp4_SCP />} path="temp4_SCP" />
          <Route element={<Temp5_BP />} path="temp5_BP" />
          <Route element={<Temp6_TDL />} path="temp6_TDL" />
          <Route element={<Temp7_WP />} path="temp7_WP" />
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
