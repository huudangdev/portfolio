import React from 'react'

import me1 from '../../images/me/me-1.jpg'

const Figure = () => {
  return (
    <div id='intro' className='dzsparallaxer auto-init height-is-based-on-content g-bg-gray-gradient-opacity-v1' data-options='{direction: "reverse", animation_duration: "200"}'>
      <div className='dzsparallaxer--target' style={{ width: '100%', height: '130%' }} />
      <div className='container g-pt-100'>
        <div className='masonry-grid row mb-5'>
          <div className='masonry-grid-sizer col-sm-1' />
          <div className='masonry-grid-item col-lg-6 g-mb-100'>
            <div className='g-pr-40--lg'>
              <span className='d-block g-color-cyan g-font-size-17 g-font-weight-300 text-uppercase mb-4'>/Why you’d want to go on a date with me | Bio</span>
              <h2 className='h2 g-color-black g-font-weight-600 mb-4'>
                {/* Minimalism has helped me live in the moment, focus on our health, grow as individuals, be more creative as well as less consumptive. */}
              </h2>
              <p className='lead mb-5 g-font-weight-250'>
              I’m a software engineer. Therefore, I have a passionate interest in making software products, which makes me come up with most of exciting ideas. Besides, in my free time, I usually enjoy writing blog and jogging.
                <hr />
              And now, I have worked as a Fullstack Web Developer for about 1 year at NodeJS & ReactJS.
              </p>
              <a className='btn btn-xl u-btn-outline-black g-font-weight-600 g-font-size-default g-px-35' href='#'>I am convinced</a>
            </div>
          </div>
          <div className='masonry-grid-item col-sm-6 col-lg-3 g-mb-30'>
            <div data-parallaxanimation='[{property: "transform", value:" translate3d(0,px,0)", initial:"-25", mid:"0", final:"25"}]'>
              {/* <img className='img-fluid w-100' src={me1} alt='Image Description' /> */}
            </div>
          </div>
          <div className='masonry-grid-item col-sm-6 col-lg-3 mt-5 g-mb-30'>
            <div data-parallaxanimation='[{property: "transform", value:" translate3d(0,px,0)", initial:"25", mid:"0", final:"-25"}]'>
              <img className='img-fluid w-100' src={me1} alt='Image Description' style={{ borderRadius: 15 }} />
            </div>
          </div>
          <div className='masonry-grid-item col-sm-6 col-lg-3 g-mb-30'>
            <div data-parallaxanimation='[{property: "transform", value:" translate3d(0,px,0)", initial:"-45", mid:"0", final:"45"}]'>
              {/* <img className='img-fluid w-100' src='../../assets/img-temp/350x230/img6.jpg' alt='Image Description' /> */}
            </div>
          </div>
        </div>

        <div class='row text-center text-uppercase'>
          <div class='col-lg-3 col-sm-6 g-mb-50'>
            <div class='js-counter g-font-size-25 g-font-weight-300 g-mb-7'>52</div>
            <h4 class='h5 g-color-gray-dark-v4'>Viewed</h4>
          </div>

          <div class='col-lg-3 col-sm-6 g-mb-50'>
            <div class='js-counter g-font-size-25 g-font-weight-300 g-mb-7'>24</div>
            <h4 class='h5 g-color-gray-dark-v4'>Contacted</h4>
          </div>

          <div class='col-lg-3 col-sm-6 g-mb-50'>
            <div class='js-counter g-font-size-25 g-font-weight-300 g-mb-7'>1825</div>
            <h4 class='h5 g-color-gray-dark-v4'>Working Hours</h4>
          </div>

          <div class='col-lg-3 col-sm-6 g-mb-50'>
            <div class='js-counter g-font-size-25 g-font-weight-300 g-mb-7'>40</div>
            <h4 class='h5 g-color-gray-dark-v4'>Projects</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Figure
