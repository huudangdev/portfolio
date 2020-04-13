import React from 'react'
import Gist from 'react-gist'

const Intro = (props) => {
  return (
    <>
      <header id='intro'>
        {/* <!-- Section --> */}
        <section className='container g-pt-100 g-pb-70'>
          <div className='row'>
            {/* <!-- Section Body --> */}
            <div className='col-lg-6 g-mb-30'>
              <div className='mb-4'>
                <h2 className='h4 text-uppercase mb-3'>HI <span>👋</span></h2>
                <div className='g-width-35 g-height-1 g-bg-primary' />
              </div>
              <p>
                I’m a software engineer. Therefore, I have a passionate interest in making software products, which makes me come up with most of exciting ideas. Besides, in my free time, I usually enjoy writing blog and jogging.
              </p>
              <p>
                I started my career as a Game development (Gameloft SEA), then I transformed into a front end to build more things individually.
              </p>
              <p>
                And now, I have worked as a Fullstack Web Developer for about 1 year at NodeJS & ReactJS.
              </p>
              <div className='mb-4'>
                <Gist id='f70341c62acbe8d726e89eed07b40d40' />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='mb-4'>
                <h2 className='h4 text-uppercase mb-3'>LI<span className='g-color-primary'>FE</span></h2>
                <div className='g-width-35 g-height-1 g-bg-primary' />
              </div>
              <p>
              I always search for happiness not through things, but through life itself. By incorporating minimalism into my life, I’ve finally been able to find lasting happiness.
              </p>
              <p>
              Minimalism has helped me live in the moment, focus on our health, grow as individuals, be more creative as well as less consumptive.
              </p>
              <hr />
              <div className='mb-4'>
                <h2 className='h4 text-uppercase mb-3'>QUALIFI<span className='g-color-primary'>CATIONS</span></h2>
                <div className='g-width-35 g-height-1 g-bg-primary' />
              </div>

              {/* <!-- Progress Bar v2 --> */}
              <h4 className='h6 g-mb-5'>Node Js - 75%</h4>
              <div className='js-hr-progress-bar progress rounded-0 g-height-4 g-mb-30'>
                <div className='js-hr-progress-bar-indicator progress-bar' role='progressbar' style={{ width: '75%', ariaValuenow: '75', ariaValuemin: '0', ariaValuemax: '100' }} />
              </div>
              {/* <!-- End Progress Bar v2 --> */}

              {/* <!-- Progress Bar v2 --> */}
              <h4 className='h6 g-mb-5'>React Js - 76%</h4>
              <div className='js-hr-progress-bar progress rounded-0 g-height-4 g-mb-30'>
                <div className='js-hr-progress-bar-indicator progress-bar' role='progressbar' style={{ width: '76%', ariaValuenow: '76', ariaValuemin: '0', ariaValuemax: '100' }} />
              </div>
              {/* <!-- End Progress Bar v2 --> */}

              {/* <!-- Progress Bar v2 --> */}
              <h4 className='h6 g-mb-5'>Mobile - 45%</h4>
              <div className='js-hr-progress-bar progress rounded-0 g-height-4'>
                <div className='js-hr-progress-bar-indicator progress-bar' role='progressbar' style={{ width: '45%', ariaValuenow: '45', ariaValuemin: '0', ariaValuemax: '100' }} />
              </div>
              {/* <!-- End Progress Bar v2 --> */}
              <br /><br />
              {/* <!-- Section Social Icons --> */}
              <ul className='list-inline'>
                <li className='list-inline-item g-mx-4'>
                  <a className='u-icon-v3 u-icon-size--xs g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle' href='/'>
                    <i className='fa fa-facebook' />
                  </a>
                </li>
                <li className='list-inline-item g-mx-4'>
                  <a className='u-icon-v3 u-icon-size--xs g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle' href='/'>
                    <i className='fa fa-twitter' />
                  </a>
                </li>
                <li className='list-inline-item g-mx-4'>
                  <a className='u-icon-v3 u-icon-size--xs g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle' href='/'>
                    <i className='fa fa-google-plus' />
                  </a>
                </li>
                <li className='list-inline-item g-mx-4'>
                  <a className='u-icon-v3 u-icon-size--xs g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle' href='/'>
                    <i className='fa fa-linkedin' />
                  </a>
                </li>
                <li className='list-inline-item g-mx-4'>
                  <a className='u-icon-v3 u-icon-size--xs g-color-gray-dark-v3 g-bg-gray-light-v5 g-color-white--hover g-bg-primary--hover rounded-circle' href='/'>
                    <i className='fa fa-instagram' />
                  </a>
                </li>
              </ul>

              {/* <!-- End Section Social Icons --> */}
            </div>
            {/* <!-- End Section Body --> */}
          </div>
        </section>
        {/* <!-- End Section --> */}
      </header>
    </>
  )
}

export default Intro
