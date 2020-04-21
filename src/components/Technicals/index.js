import React from 'react'

const Technicals = () => {
  return (
    <>
      <section id='technicals' className='g-bg-gray-light-v5'>
        <div className='container g-pt-100 g-pb-70'>
          <div className='row justify-content-center g-mb-60'>
            <div className='col-lg-7'>
              <div className='text-center'>
                <h2 className='h3 g-color-black text-uppercase mb-2'>what i'm good at ?</h2>
                <div className='d-inline-block g-width-35 g-height-2 g-bg-primary mb-2' />
                <p className='mb-0 g-font-weight-300'>
                I'm not only a tinkerer but i'm also interested in playing around with new technologies.
                </p>
              </div>
            </div>
          </div>

          <div className='row g-mb-30'>
            <div className='col-lg-6 g-mb-30'>
              <div className='mb-5'>
                <p className='lead mb-5 g-font-weight-200'>
                I’m a software engineer. Therefore, I have a passionate interest in making software products, which makes me come up with most of exciting ideas. Besides, in my free time, I usually enjoy writing blog and jogging.
                </p>
                <p className='lead mb-5 g-font-weight-200'>
                I started my career as a game developer (GameloftSEA), then i transformed into a frontend to build more things individually.
                </p>
                <p className='lead mb-5 g-font-weight-200'>
                And now, i have worked as a fullstack for about one year at node & react.
                </p>
              </div>
              <hr />
              <a href='https://github.com/huudangdev' target='blank' className='btn btn-l u-btn-outline-bluegray u-btn-hover-v1-4 g-letter-spacing-0_5 g-rounded-50 g-px-20 g-mb-5 mr-4'>
                <span className='pull-left text-left'>
                Explore More
                </span>
                <i className='fa fa-github float-right g-font-size-20 g-ml-15' />
              </a>
              <a href='#timeline' className='smoothscroll btn btn-l u-btn-outline-teal u-btn-hover-v2-2 g-letter-spacing-0_5 g-rounded-50 g-px-20 g-mr-4 g-mb-5'>
                <span className='pull-left text-left'>
                  Continue |
                </span>
              </a>
            </div>
            <div className='col-lg-6'>
              <div className='mb-4'>
                <div className='d-flex justify-content-between'>
                  <h6 className='text-uppercase g-font-weight-300 g-color-cyan'>W e b  D e s i g n</h6>
                  <span className='ml-auto'>65%</span>
                </div>
                <div className='js-hr-progress-bar progress g-height-2 rounded-0'>
                  <div className='js-hr-progress-bar-indicator progress-bar' role='progressbar' style={{ width: '65%', ariaValuenow: 65, ariaValuemin: 0, ariaValuemax: 100 }} />
                </div>
              </div>

              <div className='mb-4'>
                <div className='d-flex justify-content-between'>
                  <h6 className='text-uppercase g-font-weight-300 g-color-aqua'>R e a c t</h6>
                  <span className='ml-auto'>70%</span>
                </div>
                <div className='js-hr-progress-bar progress g-height-2 rounded-0'>
                  <div className='js-hr-progress-bar-indicator progress-bar' role='progressbar' style={{ width: '70%', ariaValuenow: 70, ariaValuemin: 0, ariaValuemax: 100 }} />
                </div>
              </div>

              <div className='mb-4'>
                <div className='d-flex justify-content-between'>
                  <h6 className='text-uppercase g-font-weight-300 g-color-primary'>N o d e</h6>
                  <span className='ml-auto'>75%</span>
                </div>
                <div className='js-hr-progress-bar progress g-height-2 rounded-0'>
                  <div className='js-hr-progress-bar-indicator progress-bar' role='progressbar' style={{ width: '75%', ariaValuenow: 75, ariaValuemin: 0, ariaValuemax: 100 }} />
                </div>
              </div>

              <div className='mb-4'>
                <div className='d-flex justify-content-between'>
                  <h6 className='text-uppercase g-font-weight-300 g-color-orange'>M o b i l e</h6>
                  <span className='ml-auto'>55%</span>
                </div>
                <div className='js-hr-progress-bar progress g-height-2 rounded-0'>
                  <div className='js-hr-progress-bar-indicator progress-bar' role='progressbar' style={{ width: '55%', ariaValuenow: 55, ariaValuemin: 0, ariaValuemax: 100 }} />
                </div>
              </div>

              <div className='mb-4'>
                <div className='d-flex justify-content-between'>
                  <h6 className='text-uppercase g-font-weight-300 g-color-brown'>G i t</h6>
                  <span className='ml-auto'>85%</span>
                </div>
                <div className='js-hr-progress-bar progress g-height-2 rounded-0'>
                  <div className='js-hr-progress-bar-indicator progress-bar' role='progressbar' style={{ width: '85%', ariaValuenow: 85, ariaValuemin: 0, ariaValuemax: 100 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technicals
