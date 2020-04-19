import React from 'react'
import Background from '../../images/wall-min.jpg'

const Promo = (props) => {
  return (
    <section className='g-bg-cover g-bg-pos-top-center g-bg-img-hero g-bg-black-opacity-0_3--after g-min-height-100vh g-flex-centered g-py-100' style={{ backgroundImage: `url(${Background})`, backgroundAttachment: 'fixed' }}>
      <div className='container g-color-white text-center g-z-index-1'>
        <div className='mb-5'>
          <h2 className='g-font-weight-300 g-font-size-40 g-font-size-70--md text-uppercase g-mb-20'>
            <span className='u-text-animation u-text-animation--typing' />
          </h2>
          <p className='g-font-size-25 g-font-weight-100 text-uppercase'>Fullstack Javascript | Writer</p>
        </div>

        <a className='smoothscroll js-go-to btn u-btn-outline-white g-color-white g-bg-white-opacity-0_1 g-color-black--hover g-bg-white--hover g-font-weight-400 text-uppercase g-rounded-50 g-px-30 g-py-13' href='#intro' data-target='#intro'>
          Let 's go
        </a>
      </div>
    </section>
  )
}

export default Promo
