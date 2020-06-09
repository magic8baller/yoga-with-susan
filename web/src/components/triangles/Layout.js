import GlobalStyles from '../../styles/global.styles.js'
import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'

import SEO from '../seo'
const timeout = 400

const Content = styled.div`
  display: grid;
  min-height: calc(100vh - var(--header-height));
  width: 100%;
  margin-top: var(--header-height);
  grid-template-rows: 1fr auto;
  transition: opacity ${timeout}ms ease-in-out,
    transform ${timeout}ms ease-in-out;
  &.enter {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  &.enter-active,
  &.exit {
    opacity: 1;
  }
  &.exit-active {
    opacity: 0;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`
const Layout = ({children, location}) => {
  return (
    <>
      <GlobalStyles />
      <SEO title='landing' />
      <Header />
      <TransitionGroup>
        <CSSTransition
          key='sdfre3'
          timeout={timeout}
          unmountOnExit
          onExit={(node) => {
            node.style.position = 'fixed'
            node.style.top = -1 * window.scrollY + 'px'
          }}>
          <Content>
            <Main>
              {children}
            </Main>
            <Footer />
          </Content>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default Layout
