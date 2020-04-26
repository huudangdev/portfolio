import React, { useState } from 'react'

const Contact = (props) => {
  const [isActive, setIsActive] = useState(false)

  const handleOnclick = (event) => {
    event.preventDefault()
    setIsActive(!isActive)
  }

  return (
    <section className='g-brd-around g-brd-gray-light-v4'>
      <div className='container text-center g-py-50--md g-py-20'>
        <h2 className='h2 text-uppercase g-font-weight-300'>Hire me</h2>
        <p className='lead g-px-100--md g-mb-20'>
          Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, give me a shout by email if you'd like to get in contact with me.
        </p>
        <a href='/' className='btn btn-md u-btn-skew u-btn-outline-cyan g-mr-10 g-mb-50' onClick={handleOnclick}>
          <span className='u-btn-skew__inner'>Get in touch</span>
        </a>
        {isActive &&
          <form>
            <div className='row'>
              <div className='col-md-6 form-group g-mb-30'>
                <input className='form-control g-color-gray-dark-v5 g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus g-rounded-20 g-py-13 g-px-15' type='text' placeholder='Your name' />
              </div>

              <div className='col-md-6 form-group g-mb-30'>
                <input className='form-control g-color-gray-dark-v5 g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus g-rounded-20 g-py-13 g-px-15' type='tel' placeholder='Your phone' />
              </div>

              <div className='col-md-12 form-group g-mb-30'>
                <input className='form-control g-color-gray-dark-v5 g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus g-rounded-20 g-py-13 g-px-15' type='text' placeholder='Subject' />
              </div>

              <div className='col-md-12 form-group g-mb-30'>
                <textarea className='form-control g-color-gray-dark-v5 g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus g-resize-none g-rounded-20 g-py-13 g-px-15' rows='7' placeholder='Message' />
              </div>
            </div>

            <div className='text-center'>
              <button className='btn u-btn-primary text-uppercase g-rounded-30 g-px-25 g-py-13' type='submit'>Send Message</button>
            </div>
          </form>}
      </div>
    </section>

  )
}

export default Contact
