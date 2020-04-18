import React from 'react'

const Testimonial = (props) => {
  return (
    <>
      <section className='container g-pt-100 g-pb-70'>
        <div className='text-center'>
          <h2 className='h4 text-uppercase mb-3'>Testimonials</h2>
          <div className='d-inline-block g-width-60 g-height-1 g-bg-black mb-2' />
        </div>
        <div class='row'>
          <div class='col-md-6 g-mb-50'>
            <blockquote class='lead u-blockquote-v1 rounded g-pl-60 g-pr-30 g-py-30 g-mb-40'>
            Hey, you should hire this guy, he may be not yet fresh out of university and have zero on the job experience but I am confident that he will be one of your best developers in no time!
            </blockquote>
            <div class='media'>
              {/* <img class='d-flex align-self-center rounded-circle g-brd-around g-brd-3 g-brd-white g-width-50 mr-3' src='../../assets/img-temp/100x100/img7.jpg' alt='Image Description' /> */}
              <div class='media-body align-self-center'>
                <h4 class='h6 g-font-weight-700 g-mb-0'>Mr. Phuong</h4>
                <em class='g-color-gray-dark-v4 g-font-style-normal'>Tech Lead, Developer</em>
              </div>
            </div>
          </div>

          <div class='col-md-6 g-mb-50'>
            <blockquote class='lead u-blockquote-v1 rounded g-pl-60 g-pr-30 g-py-30 g-mb-40'>
            He has a passion for programming. At the same time he has the capacity and has express yourself. His profile is very impressive
            </blockquote>
            <div class='media'>
              {/* <img class='d-flex align-self-center rounded-circle g-brd-around g-brd-3 g-brd-white g-width-50 mr-3' src='../../assets/img-temp/100x100/img5.jpg' alt='Image Description' /> */}
              <div class='media-body align-self-center'>
                <h4 class='h6 g-font-weight-700 g-mb-0'>Mr. Tien</h4>
                <em class='g-color-gray-dark-v4 g-font-style-normal'>CTO Tungtung</em>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
