import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Coming from a nonprofit framework breaking barriers for underserved populations has always been a passion, it gave me agency to defy challenges with evolving determination. In relocating to San Francisco, navigating my own exceptional barriers, I grew closer to tech. My normative transitioned from regularly being without my phone for days at a time, into employing it as my daily personal broker. Resourcefully, I leveraged technologies which helped me to discover, advocate, and resolve my circumstances. My experience heightened my awareness to disconnect between technology and unequal access to opportunity.</p>
                    <p>I've cultivated a unique skillset having been a professional artisan sandwhich maker, a grant writer and data analyst, a grassroots developmental operations management, a government contracted liason for special population workforce development, and my favorite and a director of two litte people operations 24/7. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
