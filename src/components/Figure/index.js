import React, { useState, useEffect } from 'react'

import me1 from '../../images/me/me-1.jpg'
import me2 from '../../images/me/me-2.jpg'
import me3 from '../../images/me/me-3.jpg'

import moment from 'moment'

const config = require('./data.json')

const Figure = () => {
  const [isActive, setIsActive] = useState(false)
  const [index, setIndex] = useState({})

  const handleOnClick = (event) => {
    event.preventDefault()
    setIsActive(true)
  }

  useEffect(() => {
    const a = moment([2020, 1, 22])
    const b = moment()
    const tmpArg = b.diff(a, 'days')
    config.viewed = 4 * tmpArg
    config.contacted = Math.round(tmpArg * 1.5)
    //
    config.workingHours = tmpArg * 32
    setIndex(config)
  }, [])

  return (
    <>
      <div id='intro' className='dzsparallaxer auto-init height-is-based-on-content g-bg-gray-gradient-opacity-v1' data-options='{direction: "reverse", animation_duration: "200"}'>
        <div className='dzsparallaxer--target' style={{ width: '100%', height: '120%' }} />
        <div className='container g-pt-65'>
          <div className='masonry-grid row mb-10'>
            <div className='masonry-grid-sizer col-sm-1' />
            <div className='masonry-grid-item col-lg-6 g-mb-100'>
              <div className='g-pr-40--lg'>
                <span className='d-block g-color-cyan g-font-size-10 g-font-weight-300 text-uppercase mb-4'>#Why you’d want to go on a date with me</span>
                <h4 className='h4 g-color-black g-font-weight-205 mb-4'>
                Don’t I know you from somewhere? Probably not. So let me introduce myself: Hi, I’m Dang.
                </h4>
                <p className='lead mb-5 g-font-weight-250'>
              I always search for happiness not through things, but through life itself. By incorporating minimalism into my life, I’ve finally been able to find lasting happiness.
                </p>
                <p className='lead mb-5 g-font-weight-250'>
              Minimalism has helped me live in the moment, focus on our health, grow as individuals, be more creative as well as less consumptive.
                </p>
                <hr />
                <ul className='list-inline'>
                  <li className='list-inline-item g-mx-2'>
                    <a className='u-icon-v3 u-icon-size--xs g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle' href='https://www.facebook.com/nguyentranhuudang' target='blank'>
                      <i className='fa fa-facebook' />
                    </a>
                  </li>
                  <li className='list-inline-item g-mx-4'>
                    <a className='u-icon-v3 u-icon-size--xs g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle' href='mailto:dang.nguyentranhuu@gmail.com' target='blank'>
                      <i className='fa fa-google-plus' />
                    </a>
                  </li>
                  <li className='list-inline-item g-mx-4'>
                    <a className='u-icon-v3 u-icon-size--xs g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle' href='https://www.linkedin.com/in/nguyentranhuudang/' target='blank'>
                      <i className='fa fa-linkedin' />
                    </a>
                  </li>
                  <li className='list-inline-item g-mx-4'>
                    <a className='u-icon-v3 u-icon-size--xs g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle' href='https://www.instagram.com/nguyentran.huudang/' target='blank'>
                      <i className='fa fa-instagram' />
                    </a>
                  </li>
                  <a className='smoothscroll btn btn-l u-btn-outline-black g-font-weight-500 g-font-size-default g-px-15' href='#technicals' style={{ marginLeft: 190 }} onClick={handleOnClick}>I am convinced</a>
                </ul>

              </div>
            </div>
            <div className='masonry-grid-item col-sm-6 col-lg-3 g-mb-30'>
              <div data-parallaxanimation='[{property: "transform", value:" translate3d(0,px,0)", initial:"-25", mid:"0", final:"25"}]'>
                <img className='img-fluid w-79' src={me2} alt='Image Description' data-animation='zoomInDown' data-animation-delay='0' data-animation-duration='1000' style={{ borderRadius: 15 }} />
              </div>
            </div>
            <div className='masonry-grid-item col-sm-6 col-lg-3 mt-5 g-mb-30'>
              <div data-parallaxanimation='[{property: "transform", value:" translate3d(0,px,0)", initial:"25", mid:"0", final:"-25"}]'>
                <img className='img-fluid w-100' src={me1} alt='Image Description' data-animation='zoomIn' data-animation-delay='0' data-animation-duration='1000' style={{ borderRadius: 15 }} />
              </div>
            </div>
            <div className='masonry-grid-item col-sm-6 col-lg-3 g-mb-30'>
              <div data-parallaxanimation='[{property: "transform", value:" translate3d(0,px,0)", initial:"-45", mid:"0", final:"45"}]'>
                <img className='img-fluid w-80' src={me3} alt='Image Description' data-animation='bounce' data-animation-delay='0' data-animation-duration='1000' style={{ borderRadius: 15 }} />
              </div>
            </div>
          </div>

          <div className='row text-center text-uppercase'>
            <div className='col-lg-3 col-sm-6 g-mb-50'>
              <div className='js-counter g-font-size-25 g-font-weight-300 g-mb-7'>{index.viewed}</div>
              <h4 className='h5 g-color-gray-dark-v4'>Viewed</h4>
            </div>

            <div className='col-lg-3 col-sm-6 g-mb-50'>
              <div className='js-counter g-font-size-25 g-font-weight-300 g-mb-7'>{index.contacted}</div>
              <h4 className='h5 g-color-gray-dark-v4'>Contacted</h4>
            </div>

            <div className='col-lg-3 col-sm-6 g-mb-50'>
              <div className='js-counter g-font-size-25 g-font-weight-300 g-mb-7'>{index.workingHours}</div>
              <h4 className='h5 g-color-gray-dark-v4'>Working Hours</h4>
            </div>

            <div className='col-lg-3 col-sm-6 g-mb-50'>
              <div className='js-counter g-font-size-25 g-font-weight-300 g-mb-7'>{index.projects}</div>
              <h4 className='h5 g-color-gray-dark-v4'>Projects</h4>
            </div>
          </div>
        </div>
      </div>
      {
        isActive &&
          <div className='alert alert-dismissible fade show g-bg-teal g-color-white rounded-0 u-header u-header--sticky-top u-header--change-appearance' role='alert'>
            <button type='button' className='close u-alert-close--light' data-dismiss='alert' aria-label='Close' onClick={() => setIsActive(false)}>
              <span aria-hidden='true'>×</span>
            </button>

            <div className='media'>
              <span className='d-flex g-mr-10 g-mt-5'>
                <i className='icon-check g-font-size-25' />
              </span>
              <span className='media-body align-self-center'>
                <strong>Thanks, </strong>but it's not just that | let's continue
              </span>
            </div>
          </div>
      }
    </>
  )
}

export default Figure
