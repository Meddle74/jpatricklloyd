import React, { Component } from 'react';
import { Fade, Reveal } from 'react-reveal/';

class About extends Component {
  render() {
    let jhonData = this.props.jhonData;
    var { aClass } = this.props;
    return (
      <section className={`${aClass}`} id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 d-flex align-items-center'>
              <Fade bottom cascade duration={1000}>
              <Reveal effect="fadeInRight" duration={800}>
                <div className='about_content'>
                  <h2 className='t_color'>{jhonData.aboutme}</h2>
                  <section id='resume' class='resume'>
                    <div class='container' data-aos='fade-up'>
                      <div class='section-title'>
                      <p>{jhonData.aboutdetails}</p>
                      </div>
                      <div class='row'>
                        <div class='col-lg-6'>
                          <h3 class='resume-title'>Education</h3>
                          <div class='resume-item'>
                            <h4>Full Stack Coding Bootcamp</h4>
                            <h5>2020</h5>
                            <p>
                              <em>
                                University of North Carolina, Chapel Hill, NC
                              </em>
                            </p>
                            <p>
                              University of North Carolina at Chapel Hill's
                              Full-Stack Coding Boot Camp provided training in
                              the MERN Stack to build dynamic end-to-end web
                              applications.
                            </p>

                            <p>
                              Skills include: Design Patterns, HTML, CSS,
                              JavaScript, jQuery, Responsive Design, Bootsrap,
                              React.js, Heroku, Git, C#, ASP.NET, MySQL,
                              MongoDB, Node.js, Express
                            </p>
                          </div>

                          <h3 class='resume-title'>Current Proficiencies</h3>
                          <div class='resume-item'>
                            <h4>Back End</h4>
                            <li>
                              <em>
                                Operating system (OS): Ubuntu 14.04 & 18.04
                              </em>
                            </li>
                            <li>
                              <em>Web server: Apache 2.4</em>
                            </li>
                            <li>
                              <em>Database: MySQL</em>
                            </li>
                            <li>
                              <em>Programming language(s): PHP 5.5 & 7.2</em>
                            </li>
                            <li>
                              <em>
                                Web Frameworks: Yii 1, Symfony 4, WordPress
                              </em>
                            </li>
                            <li>
                              <em>Version Control: Git</em>
                            </li>
                          </div>

                          <div class='resume-item'>
                            <h4>Front End</h4>
                            <li>
                              <em>HTML, CSS3, Bootstrap 3/4</em>
                            </li>
                            <li>
                              <em>
                                {' '}
                                JavaScript, jQuery, BackboneJS / UnderscoreJS
                              </em>
                            </li>
                            <li>
                              <em>Database: MySQL</em>
                            </li>
                            <li>
                              <em>Programming language(s): PHP 5.5 & 7.2</em>
                            </li>
                            <li>
                              <em>
                                Web Frameworks: Yii 1, Symfony 4, WordPress
                              </em>
                            </li>
                            <li>
                              <em>Version Control: Git</em>
                            </li>
                          </div>
                        </div>
                        <div class='col-lg-6'>
                          <h3 class='resume-title'>Professional Experience</h3>
                          <div class='resume-item'>
                            <h4>Web Developer</h4>
                            <h5>2018 - Present</h5>
                            <p>
                              <em>The Produce Box, Raleigh, NC</em>
                            </p>
                            <ul>
                              <li>
                                Work with the Leadership Team members to review
                                all new feature requests.
                              </li>
                              <li>
                                Contribute in the design and development of
                                advanced ecommerce web projects
                              </li>
                              <li>
                                Support the Software Development Team Lead to
                                make sure they architect a proper solution.{' '}
                              </li>
                              <li>
                                Review Software Development Team testing plans
                                for each feature to ensure the plan will cover
                                all required user stories and use cases
                              </li>
                              <li>
                                Review all new features with needed stake
                                holders and training them with the development
                                team.
                              </li>
                              <li>
                                Troubleshot, tested, and maintain the project
                                databases
                              </li>
                            </ul>
                          </div>
                          <div class='resume-item'>
                            <h4>Junior Software Developer</h4>
                            <h5>2016 - 2018</h5>
                            <p>
                              <em>The Produce Box, Raleigh, NC</em>
                            </p>
                            <ul>
                              <li>
                                Understand the system database and be able to
                                query information as requested.
                              </li>
                              <li>
                                Develop custome ERP software solutions using
                                front-end and backend technologies.
                              </li>
                              <li>
                                Recreate, diagnose, and fix software bugs that
                                have been reported on the system
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  );
                </div>
                </Reveal>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
