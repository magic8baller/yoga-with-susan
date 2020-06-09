import styled from '@emotion/styled'
import InstagramIcon from '../../images/icons/instagram.svg'
import MenuIcon from '../../images/icons/menu.svg'
import ExitIcon from '../../images/icons/exit.svg'
import {Link} from 'gatsby'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: var(--header-height);
  top: 0;
  left: 0;
  flex: 1;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 24px 32px;
  background: var(--white);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  user-select: none;
  @media (min-width: 800px) {
    padding: 24px 64px;
  }
`

export const Title = styled.h2`
  margin-left: 32px;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 2.4rem;
  text-align: right;
  flex: 1;
  @media (min-width: 800px) {
    flex: initial;
    margin-left: 0;
    margin-right: 64px;
    text-align: left;
  }
`

export const Menu = styled(MenuIcon)`
  width: 32px;
  height: 32px;
  fill: var(--black);
  cursor: pointer;
  
  @media (min-width: 800px) {
    display: none;
  }
`

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--white);
  transform: translateX(-100%);
  transition: transform 200ms ease-out;
  padding: 32px;
  ${({isVisible}) =>
    isVisible && `
      transform: translateX(0);
    `}
  @media (min-width: 800px) {
    position: initial;
    height: initial;
    transform: translateX(0);
    transition: none;
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`

export const Exit = styled(ExitIcon)`
  position: absolute;
  top: 32px;
  left: 32px;
  width: 32px;
  height: 32px;
  fill: var(--black);
  cursor: pointer;
  @media (min-width: 800px) {
    display: none;
  }
`

const navItem = `
  color: var(--grey);
  font-size: 2.4rem;
  letter-spacing: 3px;
  position: relative;
  @media (min-width: 800px) {
    padding: 16px 8px;
    font-size: 1.2rem;
    letter-spacing: 3px;
  }
  @media (hover: hover) {
    &:hover {
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: var(--grey);
    }
  }
`

export const NavItemLink = styled(Link)`
    color: var(--grey);
    background: var(--white);
  font-size: 2.4rem;
  letter-spacing: 3px;
  position: relative;
  @media (min-width: 800px) {
    padding: 16px 8px;
    font-size: 1.2rem;
    letter-spacing: 3px;
  }
  @media (hover: hover) {
    &:hover {
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: var(--grey);
    }
  }
`

export const NavItemA = styled.a`
color: var(--grey);
    background: var(--white);
  font-size: 2.4rem;
  letter-spacing: 3px;
  position: relative;
  @media (min-width: 800px) {
    padding: 16px 8px;
    font-size: 1.2rem;
    letter-spacing: 3px;
  }
  @media (hover: hover) {
    &:hover {
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: var(--grey);
    }
  }
`

export const Divider = styled.div`
/* display: none; */
/* background: var(--white); */
  width: 50%;
  max-width: 250px;
  height: 2px;
  margin: 48px 0;
  background-color: var(--black);
  opacity: 0.1;
  @media (min-width: 800px) {
    width: 2px;
    height: 3rem;
    margin: 0 16px;
  }
`

export const SocialIcon = styled.a`
  background: var(--pink);
  border-radius: 50%;
  padding: 12px;
  height: 48px;
  width: 48px;
  margin-top: 48px;
  transition: background 80ms;
  @media (min-width: 800px) {
    padding: 10px;
    height: 40px;
    width: 40px;
    margin-top: 0;
    margin-left: 24px;
  }
  @media (hover: hover) {
    &:hover {
      background: var(--light-pink);
    }
  }
`

export const Instagram = styled(InstagramIcon)`
  width: 100%;
  height: 100%;
  fill: var(--white);
`
