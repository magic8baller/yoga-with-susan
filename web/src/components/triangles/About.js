import {SectionHeading} from '../common'
import React from 'react'
import {css} from '@emotion/core'

const About = () => {
  return (
    <div css={css`
      margin: 2em;
    `}>
      <SectionHeading text='About' />
      <p css={css`
        margin-top: 2em;
      `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam neque inventore deserunt veniam vel delectus rerum architecto provident dolor quasi quo id sequi, nihil odit, incidunt voluptate laborum voluptatum!</p>
    </div>
  )
}

export default About
