import React from 'react'

import highschool from '../../images/timeline/highschool.jpg'
import uni from '../../images/timeline/uni.jpg'
import gameloft from '../../images/timeline/gameloft.jpg'
import tungtung from '../../images/timeline/tungtung.png'

const Timeline = () => {
  return (
    <section id='timeline' className='g-py-100'>
      <div className='container'>
        <div className='text-center g-mb-50 text-uppercase'>
          <h4 className='g-font-size-20 g-font-weight-100'>i'm an interactive developer
            <span className='g-color-brown g-ml-5'>who currently work in HCM city</span>
          </h4>
        </div>

        <ul className='row u-timeline-v2-wrap list-unstyled'>
          <li className='col-md-12 g-mb-40'>
            <div className='row'>
              <div className='col-md-3 text-md-right g-pt-20--md g-pr-40--md g-mb-20'>
                <h5 className='h5 mb-0 g-font-weight-150'>Aug 2015 - May 2018</h5>
                <hr />
              </div>

              <div className='col-md-9 g-orientation-left g-pl-40--md'>
                <div className='g-hidden-sm-down u-timeline-v2__icon g-top-35'>
                  <i className='d-block g-width-18 g-height-18 g-bg-white g-brd-around g-brd-3 g-brd-gray-light-v5 rounded-circle' />
                </div>

                <article className='g-pos-rel g-bg-gray-light-v5 g-pa-30'>
                  <div className='g-hidden-sm-down u-triangle-inclusive-v1--right g-top-30 g-z-index-2'>
                    <div className='u-triangle-inclusive-v1--right__back g-brd-gray-light-v5-right' />
                  </div>
                  <div className='g-hidden-md-up u-triangle-inclusive-v1--top g-left-20 g-z-index-2'>
                    <div className='u-triangle-inclusive-v1--top__back g-brd-gray-light-v5-bottom' />
                  </div>

                  <header className='g-brd-bottom g-brd-gray-light-v4 g-pb-10 g-mb-25'>
                    <h3 className='g-font-size-20 g-font-weight-200 text-uppercase'><span className='g-color-blue'>First Step</span>| Tran Hung Dao specialized & gifted high school</h3>
                  </header>

                  <div className='row'>
                    <div className='col-md-4 g-mb-20 g-mb-0--md'>
                      <img className='img-fluid w-100' src={highschool} alt='Image description' style={{ borderRadius: 20 }} />
                    </div>
                    <div className='col-md-8'>
                      <p className='mb-0'>
                      I have an information technology background when studying in high school. I won a few small awards for algorithmic programming competitions. And most importantly, I focused more on becoming an professional programmer.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </li>

          <li className='col-md-12 g-mb-40'>
            <div className='row'>
              <div className='col-md-3 text-md-right g-pt-20--md g-pr-40--md g-mb-20'>
                <h5 className='h5 mb-0'>Aug 2018 - Present</h5>
                <hr />
                <h5 className='h5 g-font-weight-100'><i>Software Engineering</i></h5>
              </div>

              <div className='col-md-9 g-orientation-left g-pl-40--md'>
                <div className='g-hidden-sm-down u-timeline-v2__icon g-top-35'>
                  <i className='d-block g-width-18 g-height-18 g-bg-white g-brd-around g-brd-3 g-brd-gray-light-v5 rounded-circle' />
                </div>

                <article className='g-pos-rel g-bg-gray-light-v5 g-pa-30'>
                  <div className='g-hidden-sm-down u-triangle-inclusive-v1--right g-top-30 g-z-index-2'>
                    <div className='u-triangle-inclusive-v1--right__back g-brd-gray-light-v5-right' />
                  </div>
                  <div className='g-hidden-md-up u-triangle-inclusive-v1--top g-left-20 g-z-index-2'>
                    <div className='u-triangle-inclusive-v1--top__back g-brd-gray-light-v5-bottom' />
                  </div>

                  <header className='g-brd-bottom g-brd-gray-light-v4 g-pb-10 g-mb-25'>
                    <h3 className='g-font-size-20 g-font-weight-200 text-uppercase'><span className='g-color-blue'>First environment</span>| University of Information Technology</h3>
                  </header>

                  <div className='row'>
                    <div className='col-md-4 g-mb-20 g-mb-0--md'>
                      <img className='img-fluid w-100' src={uni} alt='Image description' style={{ borderRadius: 20 }} />
                    </div>
                    <div className='col-md-8'>
                      <p className='mb-0'>
                      One of the leading schools in information technology in Vietnam. I improved my self-study ability and teamwork skills. Currently, I am focusing more on web development and i hope to become an excellent programmer.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </li>

          <li className='col-md-12 g-mb-40'>
            <div className='row'>
              <div className='col-md-3 text-md-right g-pt-20--md g-pr-40--md g-mb-20'>
                <h5 className='h5 mb-0'>Dec 2018 - Jan 2019</h5>
                <hr />
                <h4 className='h5 g-font-weight-100'><i>[Intern] Game Development</i></h4>
              </div>

              <div className='col-md-9 g-orientation-left g-pl-40--md'>
                <div className='g-hidden-sm-down u-timeline-v2__icon g-top-35'>
                  <i className='d-block g-width-18 g-height-18 g-bg-white g-brd-around g-brd-3 g-brd-gray-light-v5 rounded-circle' />
                </div>

                <article className='g-pos-rel g-bg-gray-light-v5 g-pa-30'>
                  <div className='g-hidden-sm-down u-triangle-inclusive-v1--right g-top-30 g-z-index-2'>
                    <div className='u-triangle-inclusive-v1--right__back g-brd-gray-light-v5-right' />
                  </div>
                  <div className='g-hidden-md-up u-triangle-inclusive-v1--top g-left-20 g-z-index-2'>
                    <div className='u-triangle-inclusive-v1--top__back g-brd-gray-light-v5-bottom' />
                  </div>

                  <header className='g-brd-bottom g-brd-gray-light-v4 g-pb-10 g-mb-25'>
                    <h3 className='g-font-size-20 g-font-weight-200 text-uppercase'><span className='g-color-blue'>sprint up</span>| Gameloft SEA</h3>
                  </header>

                  <div className='row'>
                    <div className='col-md-4 g-mb-20 g-mb-0--md'>
                      <img className='img-fluid w-100' src={gameloft} alt='Image description' style={{ borderRadius: 20 }} />
                    </div>
                    <div className='col-md-8'>
                      <p className='mb-0'>
                      I learned a lot here, from professional knowledge to soft skills. It helps me get closer than to my goal. See more of my review about company <a href='https://decoding.home.blog/trai-nghiem-lan-thuc-tap-dau-doi-tai-gameloft/'>here</a>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </li>

          <li className='col-md-12'>
            <div className='row'>
              <div className='col-md-3 text-md-right g-pt-20--md g-pr-40--md g-mb-20'>
                <h5 className='h5 mb-0'>Oct 2019 - Present</h5>
                <hr />
                <h4 className='h5 g-font-weight-100'><i>Developer</i></h4>
              </div>

              <div className='col-md-9 g-orientation-left g-pl-40--md'>
                <div className='g-hidden-sm-down u-timeline-v2__icon g-top-35'>
                  <i className='d-block g-width-18 g-height-18 g-bg-white g-brd-around g-brd-3 g-brd-gray-light-v5 rounded-circle' />
                </div>

                <article className='g-pos-rel g-bg-gray-light-v5 g-pa-30'>
                  <div className='g-hidden-sm-down u-triangle-inclusive-v1--right g-top-30 g-z-index-2'>
                    <div className='u-triangle-inclusive-v1--right__back g-brd-gray-light-v5-right' />
                  </div>
                  <div className='g-hidden-md-up u-triangle-inclusive-v1--top g-left-20 g-z-index-2'>
                    <div className='u-triangle-inclusive-v1--top__back g-brd-gray-light-v5-bottom' />
                  </div>

                  <header className='g-brd-bottom g-brd-gray-light-v4 g-pb-10 g-mb-25'>
                    <h3 className='g-font-size-20 g-font-weight-200 text-uppercase'><span className='g-color-blue'>Level up</span>| tungtung - Global competency platform</h3>
                  </header>

                  <div className='row'>
                    <div className='col-md-4 g-mb-20 g-mb-0--md'>
                      <img className='img-fluid w-100' src={tungtung} alt='Image description' style={{ borderRadius: 20 }} />
                    </div>
                    <div className='col-md-8'>
                      <p className='mb-0'>
                      Our inspiration is to provide totally brand new solutions to not only make your studying become fascinating but also connect you to an unlimited knowledge resource.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Timeline
