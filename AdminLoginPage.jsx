import React from 'react'
import AdminHeader from '../AdminComponent/AdminHeader'
import AdminLoginCmp from '../AdminComponent/AdminLoginCmp'
import Hader from '../UserComponent/Hader'

const AdminLoginPage = () => {
  return (
    <div>
        {/* <AdminHeader/> */}
        <Hader/>
        <AdminLoginCmp/>
    </div>
  )
}

export default AdminLoginPage