import React from 'react'

const Navbar = (props) => {
  return (
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
  )
}

export default Navbar
