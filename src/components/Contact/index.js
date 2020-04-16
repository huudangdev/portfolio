import React from 'react'

const Contact = (props) => {
  return (
    <>
      <section className='dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall' data-options={{ animationDuration: 25, direction: 'fromtop' }}>
        {/* <!-- Parallax Image --> */}
        {/* <div className='divimage dzsparallaxer--target w-100 g-bg-repeat' style={{ height: '140%', backgroundImage: 'url(../../images/pattern4.png)' }} /> */}
        <img className='divimage dzsparallaxer--target w-100' src={require('../../images/pattern4.png')} />
        {/* <!-- End Parallax Image --> */}

        <div className='container text-center g-py-50'>
          <h2 className='h2 text-uppercase mb-4'>Hire me!</h2>
          <p className='lead mb-4'>
          Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, give me a shout by email if you'd like to get in contact with me.
          </p>
          <a className='btn btn-md u-btn-primary g-font-size-default rounded-0 g-px-30 g-py-12' href='/'>Contact me</a>
        </div>
      </section>
    </>
  )
}

export default Contact
