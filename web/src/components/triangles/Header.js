import React, {useState} from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/core'
import * as Nav from './header.styles'
const Header = () => {
  const [isVisible, setMenuVisible] = useState(false)
  
  return (
    <Nav.Container>
      <Nav.Menu onClick={() => setMenuVisible(true)} />
      <Nav.Title>
        <Link to='/'>Yoga with Susan Turis</Link>
      </Nav.Title>
      <Nav.Nav isVisible={isVisible}>
        <Nav.Exit onClick={() => setMenuVisible(false)} />
        <Nav.NavItemLink to='/#about' onClick={() => setMenuVisible(false)}>
          About
        </Nav.NavItemLink>
        <Nav.Divider />
        <Nav.NavItemLink to='/blog' onClick={() => setMenuVisible(false)}>
          Blog
        </Nav.NavItemLink>
        <Nav.Divider />
        <Nav.NavItemA href='mailto:susan.turis@gmail.com'>Contact</Nav.NavItemA>

        <Nav.SocialIcon
          css={css`
            background: var(--white);
          `}
          href='https://instagram.com/susanturis'
          aria-label='Instagram'
          target='_blank'
          rel='noopener'
        >
          <Nav.Instagram />
        </Nav.SocialIcon>
      </Nav.Nav>
    </Nav.Container>
  )
}

export default Header
