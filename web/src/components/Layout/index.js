import './layout.css'
import React from 'react'
import Reset from './Reset'
const Layout = ({children}) => {
  return (
    <>
      <Reset />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
