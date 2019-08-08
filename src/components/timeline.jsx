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
                        <h2>Associate Engineer<span>July 2019 - current</span></h2>
                        <p>Migrating SCA API changes for new Stripe 3D payment verification. Working with JavaScript (React), Python (Jinja & Pyramid), Ubuntu, Linux & Docker </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Apprentice<span>January 2019 - June 2019</span></h2>
                        <p>Implemented RESTful API web application using Node.js, React.js and PostgreSQL with interactive UI that helped logged in parent users search from a local user database in order to connect with other parents regarding playdates, professional advising or networking. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                         <h2>Microsoft Fellow <span>2019</span></h2>
                         <p>Built a civic hub resource that encompasses major county and city departments that proved useful to residents and municipal workers alike. Worked with a remotely diverse team to build a full stack third-party project requested for live use using PHP, JavaScript, HTML, and SQL.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                         <h2>Operations Site Supervisor <span>2016 - 2019</span></h2>
                         <p>Provided on-the-job training for 9 persons with disabilities which enhanced operations and was active liaison for Veteran’s Affairs. </p>
                         <p>Resolved 3 district tickets with telecommunications to resolve network congestion by 33% which resulted in more efficient call times.</p>
                         <p>Created company-wide onboarding process implemented at 3 sites and leadership FAQ manual training 5 executive staff members.</p>
                         <p>Consistent positive feedback from supervisory and executive staff for meeting deadlines with accuracy and leadership.</p>
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
