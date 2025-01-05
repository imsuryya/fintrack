import React from 'react'
import Sidebar from './Sidebar'
import { Menu } from 'lucide-react'
import { Button } from "../components/components/ui/button"

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout