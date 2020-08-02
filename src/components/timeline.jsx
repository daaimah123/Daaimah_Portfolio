import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer | <a href="https://www.surveymonkey.com/" rel="noopener noreferrer" target="_blank">SurveyMonkey</a> <span>July 2019 - current</span></h2>
                        {/* <p>Migrating SCA API changes for new Stripe 3D payment verification. Working with JavaScript (React), Python (Jinja & Pyramid), Ubuntu, Linux & Docker </p> */}
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Career Counselor - Volunteer | <a href="https://www.codetenderloin.org/" rel="noopener noreferrer" target="_blank">Code Tenderloin</a> <span>July 2019 - current</span></h2>
                        <p>Develop and execute individual plans of success for participants facing significant barriers entering into tech careers. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Curriculum Developer & Technical Lead | <a href="https://www.hackthehood.org/" rel="noopener noreferrer" target="_blank">Hack the Hood</a> <span>October 2019 - present</span></h2>
                        <p>Develop unique content based curriculums that address both the technical and social aspects of transitioning into the technology space by nontraditional pathways. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Apprentice | <a href="https://techtonica.org/" rel="noopener noreferrer" target="_blank">Techtonica</a> <span>January 2019 - June 2019</span></h2>
                        <p>Implemented RESTful API web application using Node.js, React.js and PostgreSQL with interactive UI that helped logged in parent users search from a local user database in order to connect with other parents regarding playdates, professional advising or networking. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                         <h2>Software Engineer Microsoft Fellow | <a href="https://www.civichub.us/" rel="noopener noreferrer" target="_blank">Civic Hub</a> <span>May 2019 - July 2019</span></h2>
                         <p>Building a civic hub resource that encompasses major county and city departments that prove useful to residents and municipal workers alike. Working with team to build a full stack third-party project requested for live use using PHP, JavaScript, HTML, and SQL. Participated in onsite meetings with clientele throughout the project cycle and into support. Ensured successful implementation of plans through coordination with external sources and internal department personnel.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
