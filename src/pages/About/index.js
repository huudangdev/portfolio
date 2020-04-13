import React from 'react'

import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Intro from '../../components/Intro'
import Testimonial from '../../components/Testimonial'
import Project from '../../components/Project'

const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      <Testimonial />
      <Project />

      <a
        className='js-go-to u-go-to-v1'
        href='/#home'
        data-type='fixed'
        data-position='{
          "bottom": 15,
          "right": 15
        }'
        data-offset-top='400'
        data-compensation='#js-header'
        data-show-effect='zoomIn'
      >
        <i className='hs-icon hs-icon-arrow-top' />
      </a>
    </>
  )
}

export default About
