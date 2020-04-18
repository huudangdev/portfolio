import React from 'react'

import Sample from '../../images/projects/projectSample.jpg'

const Project = () => {
  return (
    <>
      <header id='project'>
        {/* <!-- Cubeportfolio --> */}
        <section className='container g-py-100'>
          <div className='row justify-content-center g-mb-60'>
            <div className='col-lg-7'>
              {/* <!-- Heading --> */}
              <div className='text-center'>
                <h2 className='h4 text-uppercase mb-3'>CHECK OUT SOME OF MY WORK.</h2>
                <div className='d-inline-block g-width-60 g-height-1 g-bg-black mb-2' />
                <p className='mb-0'>
                I'm not only a tinkerer but i'm also interested in playing around with new technologies.
                </p>
              </div>
              {/* <!-- End Heading --> */}
            </div>
          </div>

          {/* <!-- Cubeportfolio Filter --> */}
          <ul id='filterControls' className='text-center u-filter-v1 g-mb-40'>
            <li className='list-inline-item cbp-filter-item cbp-filter-item-active g-cursor-pointer g-transition-0_2' data-filter='*'>All</li>
            <li className='list-inline-item cbp-filter-item text-uppercase g-cursor-pointer g-transition-0_2' data-filter='.js-illustration'>Projects</li>
            <li className='list-inline-item cbp-filter-item text-uppercase g-cursor-pointer g-transition-0_2' data-filter='.js-design'>Tools</li>
            <li className='list-inline-item cbp-filter-item text-uppercase g-cursor-pointer g-transition-0_2' data-filter='.js-graphic'>Mobile</li>
            <li className='list-inline-item cbp-filter-item text-uppercase g-cursor-pointer g-transition-0_2' data-filter='.js-logo'>Deploy Business</li>
          </ul>
          {/* <!-- End Cubeportfolio Filter --> */}

          {/* <!-- Cubeportfolio container --> */}
          <div className='cbp' data-controls='#filterControls'>
            <div className='cbp-item js-logo'>
              {/* <!-- Figure --> */}
              <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                {/* <!-- Figure Image --> */}
                <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Sample} alt='Image Description' />
                {/* <!-- End Figure Image--> */}

                <a className='cbp-caption cbp-singlePageInline u-link-v2' href='../ajax/projects/projects-1.html' />

                {/* <!-- Figure Caption --> */}
                <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                  <h4 className='h6 g-font-weight-500 mb-0'>HuuDang</h4>
                  <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Logo</em>
                </figcaption>
                {/* <!-- End Figure Caption--> */}
              </figure>
              {/* <!-- End Figure --> */}
            </div>

            <div className='cbp-item js-logo'>
              {/* <!-- Figure --> */}
              <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                {/* <!-- Figure Image --> */}
                <img
                  className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Sample} alt='Image Description'
                  style={{ display: 'block', maxWidth: '800px', maxHeight: '800px', width: 'auto', height: 'auto' }}
                />
                {/* <!-- End Figure Image--> */}

                <a className='cbp-caption cbp-singlePageInline u-link-v2' href='../ajax/projects/projects-2.html' />

                {/* <!-- Figure Caption --> */}
                <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                  <h4 className='h6 g-font-weight-500 mb-0'>HuuDang</h4>
                  <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Logo</em>
                </figcaption>
                {/* <!-- End Figure Caption--> */}
              </figure>
              {/* <!-- End Figure --> */}
            </div>

            <div className='cbp-item js-illustration js-design'>
              {/* <!-- Figure --> */}
              <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                {/* <!-- Figure Image --> */}
                <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Sample} alt='Image Description' />
                {/* <!-- End Figure Image--> */}

                <a className='cbp-caption cbp-singlePageInline u-link-v2' href='../ajax/projects/projects-3.html' />

                {/* <!-- Figure Caption --> */}
                <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                  <h4 className='h6 g-font-weight-500 mb-0'>HuuDang</h4>
                  <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Illustration</em>
                </figcaption>
                {/* <!-- End Figure Caption--> */}
              </figure>
              {/* <!-- End Figure --> */}
            </div>

            <div className='cbp-item js-design js-illustration'>
              {/* <!-- Figure --> */}
              <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                {/* <!-- Figure Image --> */}
                <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Sample} alt='Image Description' />
                {/* <!-- End Figure Image--> */}

                <a className='cbp-caption cbp-singlePageInline u-link-v2' href='../ajax/projects/projects-4.html' />

                {/* <!-- Figure Caption --> */}
                <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                  <h4 className='h6 g-font-weight-500 mb-0'>HuuDang</h4>
                  <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Design</em>
                </figcaption>
                {/* <!-- End Figure Caption--> */}
              </figure>
              {/* <!-- End Figure --> */}
            </div>

            <div className='cbp-item js-design js-graphic'>
              {/* <!-- Figure --> */}
              <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                {/* <!-- Figure Image --> */}
                <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Sample} alt='Image Description' />
                {/* <!-- End Figure Image--> */}

                <a className='cbp-caption cbp-singlePageInline u-link-v2' href='../ajax/projects/projects-5.html' />

                {/* <!-- Figure Caption --> */}
                <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                  <h4 className='h6 g-font-weight-500 mb-0'>HuuDang</h4>
                  <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Graphic</em>
                </figcaption>
                {/* <!-- End Figure Caption--> */}
              </figure>
              {/* <!-- End Figure --> */}
            </div>

            <div className='cbp-item js-illustration js-design js-graphic'>
              {/* <!-- Figure --> */}
              <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                {/* <!-- Figure Image --> */}
                <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Sample} alt='Image Description' />
                {/* <!-- End Figure Image--> */}

                <a className='cbp-caption cbp-singlePageInline u-link-v2' href='../ajax/projects/projects-6.html' />

                {/* <!-- Figure Caption --> */}
                <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                  <h4 className='h6 g-font-weight-500 mb-0'>HuuDang</h4>
                  <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Design</em>
                </figcaption>
                {/* <!-- End Figure Caption--> */}
              </figure>
              {/* <!-- End Figure --> */}
            </div>
          </div>
          {/* <!-- End Cubeportfolio container --> */}
        </section>
        {/* {/* <!-- End Cubeportfolio --> */}
      </header>
    </>
  )
}

export default Project
