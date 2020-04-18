import React from 'react'
import Background from '../../images/home.jpg'

const Header = (props) => {
  return (
    <>
      <div className='d-inline-block g-hidden-md-down g-pos-rel g-valign-middle g-pl-30 g-pl-0--lg' style={{ marginLeft: 1150, top: 40 }}>
        <a className='btn u-btn-outline-primary g-font-size-13 text-uppercase g-py-10 g-px-15' href='/'>Contact Me</a>
      </div>
      <section className='container g-pt-50'>
        <div className='u-shadow-v24 g-bg-white rounded g-pa-20'>
          <div
            className='g-bg-cover g-bg-img-hero g-bg-black-opacity-0_1--after g-px-20 g-py-200' style={{ backgroundImage: `url(${Background})` }}
          >
            <div className='text-center g-pos-rel g-z-index-1'>
              <span className='d-block g-color-white g-font-size-20 text-uppercase g-letter-spacing-5 g-mb-50'>/Why you’d want to go on a date with me !</span>
              <h1 className='d-inline-block g-brd-around g-brd-2 g-brd-white g-color-white g-font-weight-700 g-font-size-20 g-font-size-50--md text-uppercase g-line-height-1_2 g-letter-spacing-5 g-py-12 g-px-20 g-mb-50'>Nguyen Dang</h1>
              <p className='g-color-white g-font-size-20 text-uppercase g-letter-spacing-5 mb-0'>Fullstack Javascript | Writer</p>
            </div>
            <p className='scrolldown'>
              <a
                className='smoothscroll u-icon-v3 u-icon-size--xm g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle'
                href='/#intro'
                style={{ marginLeft: 500, top: 100 }}
              >
                <i className='fa fa-chevron-circle-down' />
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
