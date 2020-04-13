import React from 'react'

const Navbar = (props) => {
  return (
    <>
      {/* <!-- Header --> */}
      <header id='js-header' className='u-header u-header--static'>
        <div className='u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10'>
          <nav className='js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal'>
            <div className='container'>
              {/* <!-- Responsive Toggle Button --> */}
              <button className='navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-minus-3 g-right-0' type='button' aria-label='Toggle navigation' aria-expanded='false' aria-controls='navBar' data-toggle='collapse' data-target='#navBar'>
                <span className='hamburger hamburger--slider'>
                  <span className='hamburger-box'>
                    <span className='hamburger-inner' />
                  </span>
                </span>
              </button>
              {/* <!-- End Responsive Toggle Button --> */}

              {/* <!-- Logo --> */}
              <a href='/' className='navbar-brand d-flex'>
                <h2 className='h2 g-color-black g-font-weight-200 g-mb-10'>
                  <span className='g-color-teal'>/Why you’d want to go on a date</span> with me !
                </h2>
              </a>
              {/* <!-- End Logo --> */}

              <div className='d-inline-block g-hidden-md-down g-pos-rel g-valign-middle g-pl-30 g-pl-0--lg'>
                <a className='btn u-btn-outline-primary g-font-size-13 text-uppercase g-py-10 g-px-15' href='https://wrapbootstrap.com/theme/unify-responsive-website-template-WB0412697?ref=htmlstream'>Contact Me</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  )
}

export default Navbar
