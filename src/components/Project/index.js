import React from 'react'

import Travel from '../../images/projects/travel.jpeg'
import Remote from '../../images/projects/remote.jpeg'
import Daily from '../../images/projects/daily.jpeg'
import WordGen from '../../images/projects/wordGen.jpeg'
import News from '../../images/projects/news.jpeg'
import GenQuestion from '../../images/projects/genQuestion.jpeg'
import CountQuestion from '../../images/projects/countQuestion.jpg'
import Resume from '../../images/projects/resume.jpg'
import Github from '../../images/projects/github.png'

const Project = () => {
  return (
    <>
      <header id='projects' className='clearfix'>
        {/* <!-- Cubeportfolio --> */}
        <section className='container g-py-50'>
          <div className='row justify-content-center g-mb-60'>
            <div className='col-lg-7'>
              <div className='text-center'>
                <h2 className='h4 text-uppercase mb-3'>CHECK OUT SOME OF MY WORK.</h2>
                <div className='d-inline-block g-width-60 g-height-1 g-bg-black mb-2' />
                <p className='mb-0'>
                  {/* I'm not only a tinkerer but i'm also interested in playing around with new technologies. */}
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Cubeportfolio Filter --> */}
          <ul id='filterControls' className='text-center u-filter-v1 g-mb-40'>
            <li className='list-inline-item cbp-filter-item cbp-filter-item-active g-cursor-pointer g-transition-0_2' data-filter='*'>All</li>
            <li className='list-inline-item cbp-filter-item text-uppercase g-cursor-pointer g-transition-0_2' data-filter='.js-project'>Projects</li>
            <li className='list-inline-item cbp-filter-item text-uppercase g-cursor-pointer g-transition-0_2' data-filter='.js-tool'>Tools</li>
            <li className='list-inline-item cbp-filter-item text-uppercase g-cursor-pointer g-transition-0_2' data-filter='.js-mobile'>Mobile</li>
            <li className='list-inline-item cbp-filter-item text-uppercase g-cursor-pointer g-transition-0_2' data-filter='.js-business'>Deploy Business</li>
          </ul>
          {/* <!-- End Cubeportfolio Filter --> */}

          {/* <!-- Cubeportfolio container --> */}
          <div className='cbp' data-controls='#filterControls'>
            <div className='cbp-item js-business js-project'>
              {/* <!-- Figure --> */}
              {/* className='cbp-caption cbp-singlePageInline u-link-v2' */}
              <a href='https://presentation-dem.herokuapp.com/#/' target='blank'>
                <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                  {/* <!-- Figure Image --> */}
                  <img
                    className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Remote} alt='Image Description'
                  />
                  {/* <!-- End Figure Image--> */}

                  {/* <!-- Figure Caption --> */}
                  <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                    <h4 className='h6 g-font-weight-500 mb-0'>Remote Control Slides</h4>
                    <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Socket IO & Reveal. The Idea for presentation. PPTX.</em>
                  </figcaption>
                  {/* <!-- End Figure Caption--> */}
                </figure>
              </a>
              {/* <!-- End Figure --> */}
            </div>

            <div className='cbp-item js-business js-project'>
              {/* <!-- Figure --> */}
              <a href='https://5starguides.tungtung.tech/' target='blank'>
                <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                  {/* <!-- Figure Image --> */}
                  <img
                    className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Travel} alt='Image Description'
                  />
                  {/* <!-- End Figure Image--> */}
                  {/* <!-- Figure Caption --> */}
                  <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                    <h4 className='h6 g-font-weight-500 mb-0'>5StarGuides</h4>
                    <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Find Best Tour around the world</em>
                  </figcaption>
                  {/* <!-- End Figure Caption--> */}
                </figure>
              </a>
              {/* <!-- End Figure --> */}
            </div>

            <div className='cbp-item js-project js-tool'>
              <a href='https://huudangdev.github.io/daily/' target='blank'>
                {/* <!-- Figure --> */}
                <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                  {/* <!-- Figure Image --> */}
                  <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Daily} alt='Image Description' />
                  {/* <!-- End Figure Image--> */}
                  {/* <!-- Figure Caption --> */}
                  <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                    <h4 className='h6 g-font-weight-500 mb-0'>Word World</h4>
                    <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Daily vocabulary with 5 cards.</em>
                  </figcaption>
                  {/* <!-- End Figure Caption--> */}
                </figure>
                {/* <!-- End Figure --> */}
              </a>
            </div>

            <div className='cbp-item js-tool'>
              <a href='https://github.com/huudangdev/word-generator' target='blank'>
                {/* <!-- Figure --> */}
                <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                  {/* <!-- Figure Image --> */}
                  <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={WordGen} alt='Image Description' />
                  {/* <!-- End Figure Image--> */}
                  {/* <!-- Figure Caption --> */}
                  <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                    <h4 className='h6 g-font-weight-500 mb-0'>Word Generator</h4>
                    <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>A demo for generator docx. frontend & backend.</em>
                  </figcaption>
                  {/* <!-- End Figure Caption--> */}
                </figure>
                {/* <!-- End Figure --> */}
              </a>
            </div>

            <div className='cbp-item js-mobile'>
              {/* <!-- Figure --> */}
              <a href='https://github.com/huudangdev/news-react-native' target='blank'>
                <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                  {/* <!-- Figure Image --> */}
                  <img
                    className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={News} alt='Image Description'
                  />
                  {/* <!-- End Figure Image--> */}
                  {/* <!-- Figure Caption --> */}
                  <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                    <h4 className='h6 g-font-weight-500 mb-0'>Digital News</h4>
                    <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>search and load more functionality using redux.</em>
                  </figcaption>
                  {/* <!-- End Figure Caption--> */}
                </figure>
              </a>
              {/* <!-- End Figure --> */}
            </div>

            <div className='cbp-item js-project js-tool'>
              <a href='https://github.com/huudangdev/generator-question-textblob-nlp' target='blank'>
                {/* <!-- Figure --> */}
                <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                  {/* <!-- Figure Image --> */}
                  <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={GenQuestion} alt='Image Description' />
                  {/* <!-- End Figure Image--> */}
                  {/* <!-- Figure Caption --> */}
                  <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                    <h4 className='h6 g-font-weight-500 mb-0'>Generator Questions Textblob NLP</h4>
                    <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Generator questions by scan text. Tools for com</em>
                  </figcaption>
                  {/* <!-- End Figure Caption--> */}
                </figure>
                {/* <!-- End Figure --> */}
              </a>
            </div>
            <div className='cbp-item js-project js-tool'>
              <a href='https://github.com/huudangdev/cam' target='blank'>
                {/* <!-- Figure --> */}
                <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                  {/* <!-- Figure Image --> */}
                  <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={CountQuestion} alt='Image Description' />
                  {/* <!-- End Figure Image--> */}
                  {/* <!-- Figure Caption --> */}
                  <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                    <h4 className='h6 g-font-weight-500 mb-0'>Scan & Counter question in PDF</h4>
                    <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Generator questions by scan text. Tool regex</em>
                  </figcaption>
                  {/* <!-- End Figure Caption--> */}
                </figure>
                {/* <!-- End Figure --> */}
              </a>
            </div>
            <div className='cbp-item js-project'>
              <a href='https://huudangdev.github.io/Huu-Dang-personal-resume/' target='blank'>
                {/* <!-- Figure --> */}
                <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                  {/* <!-- Figure Image --> */}
                  <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Resume} alt='Image Description' />
                  {/* <!-- End Figure Image--> */}
                  {/* <!-- Figure Caption --> */}
                  <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                    <h4 className='h6 g-font-weight-500 mb-0'>My personal resume 2018</h4>
                    <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>Profile CV online v1.0</em>
                  </figcaption>
                  {/* <!-- End Figure Caption--> */}
                </figure>
                {/* <!-- End Figure --> */}
              </a>
            </div>
            <div className='cbp-item js-tool js-mobile'>
              <a href='https://github.com/huudangdev/github-api-web-search' target='blank'>
                {/* <!-- Figure --> */}
                <figure className='u-info-v1-4 g-overflow-hidden mb-0'>
                  {/* <!-- Figure Image --> */}
                  <img className='w-100 u-info-v1-4__item-regular g-transition-0_2' src={Github} alt='Image Description' />
                  {/* <!-- End Figure Image--> */}
                  {/* <!-- Figure Caption --> */}
                  <figcaption className='u-info-v1-4__item-hidden g-transition-0_2 g-bg-black g-color-white g-px-30 g-py-10'>
                    <h4 className='h6 g-font-weight-500 mb-0'>Github tool search & statistical</h4>
                    <em className='d-block g-color-white-opacity-0_8 g-font-style-normal g-font-size-13'>github API & react</em>
                  </figcaption>
                  {/* <!-- End Figure Caption--> */}
                </figure>
                {/* <!-- End Figure --> */}
              </a>
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
