import React from 'react'

const Header = (props) => {
  return (
    <>
      <header id='home'>
        {/* <!-- Promo Block --> */}
        <section className='dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall' data-options={{ animationDuration: 25, direction: 'fromtop' }}>
          {/* direction: 'reverse' */}
          {/* <!-- Parallax Image --> */}
          <div className='divimage dzsparallaxer--target w-100' style={{ height: '140%', backgroundImage: 'url(../../assets/img-temp/logo-2.jpg)' }} />
          {/* <!-- End Parallax Image --> */}

          {/* <!-- Promo Block Content --> */}
          <div className='container g-color-white g-py-200'>
            <h3 className='g-color-instagram g-font-size-40 g-font-weight-400 text-uppercase mb-2'>Nguyen Tran Huu Dang</h3>
            <p className='g-color-primary g-font-weight-300 g-font-size-25'>Fullstack Javascript Developer, Writer</p>
          </div>
          {/* <!-- Promo Block Content --> */}
        </section>
        {/* <!-- End Promo Block --> */}
        <p className='scrolldown'>
          <a
            className='smoothscroll u-icon-v3 u-icon-size--xm g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle'
            href='/#intro'
          >
            <i className='fa fa-chevron-circle-down' />
          </a>
        </p>
      </header>
    </>
  )
}

export default Header
