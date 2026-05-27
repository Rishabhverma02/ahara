import React from 'react'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="user-layout">
      {children}
    </div>
  )
}

export default UserLayout
