import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import reakt from '../../assets/reakt.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
      <img src={reakt} alt="About" />
      </div>
        </div>

    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h5>English</h5>
        <small>B2</small>
        </article>

        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h5>Working hard</h5>
        <small>Always</small>
        </article>

        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h5>Communicate Skills</h5>
        <small>High</small>
        </article>
        </div>

        <p> 
          I'm 19 years old with a dream of becoming Frontend Developer. I am working with React, Javascript, HTML, CSS over a year now. I've completed YouCode Frontend Developer internet course. My main goal is to develop my skills.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
    </div>

    </section>
  )
}

export default About