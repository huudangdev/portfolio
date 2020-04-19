import React from 'react'

const Contact = (props) => {
  return (
    <section className='g-brd-around g-brd-gray-light-v4'>
      <div className='container text-center g-py-50--md g-py-20'>
        <h2 className='h2 text-uppercase g-font-weight-300'>Hire me</h2>
        <p className='lead g-px-100--md g-mb-20'>
          Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, give me a shout by email if you'd like to get in contact with me.
        </p>
        <a href='#' className='btn btn-md u-btn-skew u-btn-outline-cyan g-mr-10 g-mb-15'>
          <span className='u-btn-skew__inner'>Get in touch</span>
        </a>
      </div>
    </section>

  )
}

export default Contact
