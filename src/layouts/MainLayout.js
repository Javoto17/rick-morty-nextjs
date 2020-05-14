import React from 'react'
import Nav from '../components/Nav'

function MainLayout({ children }) {
  return (
    <div className="bg-primary">
      <Nav />
      <main className="container mx-auto bg-primary">
        {children}
      </main>
    </div>

  )
}

export default MainLayout
