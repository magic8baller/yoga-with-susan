/** @jsx jsx */
import './layout.css'
import React from 'react'
import {Styled, jsx} from 'theme-ui'
import NavHeader from './NavMenu'
// import Reset from './Reset'
const Layout = ({siteTitle, children}) => {
  return (
    <Styled
      sx={{
        maxWidth: 710,
        m: `auto`,
        width: ['90%', '100%', '100%']
      }}
    >
      <NavHeader siteTitle={siteTitle} />
      {/* <Reset /> */}
      <main style={{marginTop: `120px`, marginBottom: `50px`}}>{children}</main>
    </Styled>
  )
}

export default Layout
