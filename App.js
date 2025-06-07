import React from 'react'
import './Style.css'
// import './Responsive.css'
import UserHomePage from './UserPages/UserHomePage'
import AdminHomePAage from './AdminPages/AdminHomePAage'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import UserAboutPage from './UserPages/UserAboutPage'
import UserContactPage from './UserPages/UserContactPage'
import UserGalleryPage from './UserPages/UserGalleryPage'
import UserHelpPage from './UserPages/UserHelpPage'
import AdminLoginPage from './AdminPages/AdminLoginPage'
import AdminUploadNewsPage from './AdminPages/AdminUploadNewsPage'
import AdminImageUploadPage from './AdminPages/AdminImageUploadPage'
import AdminVideoUploadPage from './AdminPages/AdminVideoUploadPage'
import AdminContactPage from './AdminPages/AdminContactPage'


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<UserHomePage/>}></Route>
      <Route path="/About" element={<UserAboutPage/>}></Route>
      <Route path="/Contact" element={<UserContactPage/>}></Route>
      <Route path="/Gallery" element={<UserGalleryPage/>}></Route>
      <Route path="/Help" element={<UserHelpPage/>}></Route>
      <Route path="/Login" element={<AdminLoginPage/>}></Route>
      <Route path="/AdminLogin" element={<AdminHomePAage/>}></Route>
      <Route path="/AdminNews" element={<AdminUploadNewsPage/>}></Route>
      <Route path="/AdminImage" element={<AdminImageUploadPage/>}></Route>
      <Route path="/AdminVideo" element={<AdminVideoUploadPage/>}></Route>
      <Route path="/AdminContact" element={<AdminContactPage/>}></Route>
      
     </Routes>
     </BrowserRouter>  
      
      {/* <AdminHomePAage /> */}
      
    </div>
  )
}

export default App