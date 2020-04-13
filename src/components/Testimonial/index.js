import React from 'react'

const Testimonial = (props) => {
  return (
    <>
      {/* <!-- Testimonials v17 --> */}
      <section id='testimonials' className='dzsparallaxer auto-init height-is-based-on-content use-loading g-bg-cover g-bg-black-opacity-0_5--after loaded'>
        {/* <div className='divimage dzsparallaxer--target w-100' style={{ height: '140%', backgroundImage: 'url(../../assets/img-temp/img2.jpg)' }} /> */}
        <div className='container g-z-index-1 g-py-120'>
          {/* <!-- Testimonials --> */}
          <div className='text-center g-px-100--lg'>
            <i className='d-block g-color-primary g-font-size-80 g-line-height-0_7 g-pos-rel g-top-20'>&#8220;</i>
            <blockquote className='g-color-white g-font-size-25 g-pt-40'>
            Hey, you should hire this guy, he may be not yet fresh out of university and have zero on the job experience but I am confident that he will be one of your best developers in no time!
            </blockquote>
          </div>
          {/* <!-- End Testimonials --> */}
        </div>
      </section>
      {/* <!-- End Testimonials v17 --> */}
    </>
  )
}

export default Testimonial
