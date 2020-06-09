import {Global, css} from '@emotion/core'
import React from 'react'
import 'typeface-karla'
import 'typeface-aleo'
const text = `#252224`
const primary = `rgba(116, 29, 68, 0.71)`
// `rgba(201, 15, 153, 0.6)`
const background = `#e3f6f5`
export default () => (
  <Global
    styles={css`
      :root {
        --black: #163D57;
        /* ; */
        --grey: #585557;
        --white: ${background};
        /* #ffffff; */
        --pink: ${primary};
        /* #CA8080; */
        --light-pink: #e6a5a5;
        --blue: #41596d;
        --header-height: 96px;
        --max-content-width: 2000px;
        --headingFont: 'Aleo', serif;
        --mainFont: 'Karla', sans-serif;
        --abg: #ffd6e8;
        --atext:#741d44;
        --aprimary: #63228d;
        --text: #163D57;
        --primary: #c90f97;
        --bg: #e3f6f5;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--black);
      }
  html {
    font-size: 62.5%;
  }
      body {
        background: var(--white);
        font-family: var(--mainFont);
      }
      h1, h2, h3, h4 {
        font-family: var(--headingFont);
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      @media (prefers-reduced-motion: reduce) {
        *,
        ::before,
        ::after {
          animation-delay: -1ms !important;
          animation-duration: 1ms !important;
          animation-iteration-count: 1 !important;
          background-attachment: initial !important;
          scroll-behavior: auto !important;
          transition-delay: 0s !important;
          transition-duration: 0s !important; 
        } 
      }
      `
    }
  />
)
