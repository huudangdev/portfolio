import React from 'react'

import Promo from '../../components/Promo'
import Testimonial from '../../components/Testimonial'
import Project from '../../components/Project'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Figure from '../../components/Figure'
import Technicals from '../../components/Technicals'

const About = () => {
  return (
    <>
      <Promo />
      <Figure />
      <Technicals />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />

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
