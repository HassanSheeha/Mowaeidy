import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './header.module.css'

export default function Hero() {
  return (
    <>
      <Carousel fade>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="Assets/Images/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 >Easy Scheduling ahead</h1>
          <p >Mowaeidy adapts to both you and your team's 
  scheduling preferences. Co-host aclient call with a
  colleague, email reminders and follow-ups, and 
  integrate everything with your preferred software
  tools</p>
  <button className='btn btn-warning mt-3'> Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Assets/Images/3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>Easy Scheduling ahead</h1>
          <p className="mt-3">Mowaeidy adapts to both you and your team's 
  scheduling preferences. Co-host aclient call with a
  colleague, email reminders and follow-ups, and 
  integrate everything with your preferred software
  tools</p> 
  <button className='btn btn-warning'> Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Assets/Images/4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>Easy Scheduling ahead</h1>
          <p className="mt-3">Mowaeidy adapts to both you and your team's 
  scheduling preferences. Co-host aclient call with a
  colleague, email reminders and follow-ups, and 
  integrate everything with your preferred software
  tools</p>
  <button className='btn btn-warning'> Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></>
  )
}



