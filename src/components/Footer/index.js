import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <!-- Copyright Footer --> */}
      <footer className='g-bg-gray-dark-v1 g-color-white-opacity-0_8 g-py-20'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 text-center text-md-left g-mb-10 g-mb-0--md'>
              <div className='d-lg-flex'>
                <small className='d-block g-font-size-default g-mr-10 g-mb-10 g-mb-0--md'>2020 &copy; All Rights Reserved.</small>
                <ul className='u-list-inline'>
                  <li className='list-inline-item'>
                    <a className='g-color-white-opacity-0_8 g-color-white--hover' href='#'>dang.nguyentranhuu@gmail.com</a>
                  </li>
                  <li className='list-inline-item'>
                    <span>|</span>
                  </li>
                  <li className='list-inline-item'>
                    <a className='g-color-white-opacity-0_8 g-color-white--hover' href='#'>0386968950</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-4 align-self-center'>
              <ul className='list-inline text-center text-md-right mb-0'>
                <li className='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Facebook'>
                  <a href='#' className='g-color-white-opacity-0_5 g-color-white--hover'>
                    <i className='fa fa-facebook' />
                  </a>
                </li>
                <li className='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Skype'>
                  <a href='#' className='g-color-white-opacity-0_5 g-color-white--hover'>
                    <i className='fa fa-skype' />
                  </a>
                </li>
                <li className='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Linkedin'>
                  <a href='#' className='g-color-white-opacity-0_5 g-color-white--hover'>
                    <i className='fa fa-linkedin' />
                  </a>
                </li>
                <li className='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Twitter'>
                  <a href='#' className='g-color-white-opacity-0_5 g-color-white--hover'>
                    <i className='fa fa-twitter' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Copyright Footer --> */}
    </>
  )
}

export default Footer
