import React from 'react'
import HeroImg from '../assets/hero.png'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <>
    <div className="row bgClr flex-lg-row-reverse align-items-center my-3 py-4"> <div className="col-12 col-sm-12 col-lg-6 imgCnt"> <img src={HeroImg} className="d-block mx-lg-auto img-fluid " alt="Hero image" loading="lazy"/> </div> <div className="col-lg-6"> <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Your Health is Our Priority</h1> <p className="lead">Providing comprehensive healthcare services with compassionate care and cutting-edge medical technology.</p> <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center"> <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Book Appointment</button> <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn More</button> </div> </div> </div>
    </>
  )
}

export default HeroSection