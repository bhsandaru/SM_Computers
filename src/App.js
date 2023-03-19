
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import LoginPage from "./Authentification.jsx/LoginPage.jsx"
import PasswordChange from "./Authentification.jsx/PasswordChange.jsx"
import AboutUs from "./Cards/AboutUs.jsx"
import AddPage from "./Cards/AddPage.jsx"

import ContactUs from "./Cards/ContactUs.jsx"

import DeletePage from "./Cards/DeletePage.jsx"
import SearchKeyboard from "./Cards/SearchKeybord.jsx"
import SearchLaptop from "./Cards/SearchLaptop.jsx"
import SearchMouse from "./Cards/SearchMouse.jsx"
import Services from "./Cards/Services.jsx"
import UpdatePage from "./Cards/UpdatePage.jsx"



function App() {
  return (
    <div>
          <Router>
           

        <Routes>
          <Route exact path="/" element={<AboutUs />}>
           
          </Route>
          
          <Route path="/contact"  element={<ContactUs />}>      
          </Route>

          <Route path="/service"  element={ <Services />}>  
          </Route>

          <Route path="/login"  element={< LoginPage/>}>
          </Route>

          <Route path="/changepassword" element={<PasswordChange/>} >
          </Route>

          
          <Route path="/add"  element={< AddPage/>}>
          </Route>

          <Route path="/update" element={<UpdatePage/>} >
          </Route>

          <Route path="/delete" element={<DeletePage/>} >
          </Route>

          <Route path="/laptops" element={<SearchLaptop/>} >
          </Route>

          <Route path="/keyboards" element={<SearchKeyboard/>} >
          </Route>
          
          <Route path="/mouses" element={<SearchMouse/>} >
          </Route>
        </Routes>

    </Router>
      
    </div>
  )
}

export default App
