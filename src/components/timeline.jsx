import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-experience' data-section='timeline'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>highlights</span>
                <h2 className='colorlib-heading animate-box'>Timeline</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='timeline-centered'>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-3'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Working at PT.GDC Multi Sarana <span>2020-present</span>
                        </h2>
                        <p>
                          I recently have joined the PT.GDC Multi Sarana as a
                          Web Developer in the IT team. My major
                          part of the work has been into the field of creating
                          website using Django Web Framework. Processing data from server to front end using REST API and Query Databases with MySQL.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-4'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Internship at PT Lanius Inovasi Indonesia <span>2018-2019</span>
                        </h2>
                        <p className='text-justify'>
                          I recently have joined the PT Lanius Inovasi Indonesia
                          as a Front End Engineer in the the team. My major part
                          of the work has been into the field of design the
                          website using Vue. And i have experience using laravel
                          for the backend server.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-5'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Primary Education <span>2016-2020</span>
                        </h2>
                        <p className='text-justify'>
                          I have completed my informatics engineering at
                          Politeknik Elektronika Negeri Surabaya with the final
                          project 'Detection of Tobacco Leaves Diseases using
                          Gray Level Co-Occurrence Matrix Method'. The
                          technology that i used are React Native and Flask as
                          Backend.
                        </p>
                      </div>
                    </div>
                  </article>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
