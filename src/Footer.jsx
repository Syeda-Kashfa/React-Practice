import React from 'react'
import './Footer.css'
import Logo from './assets/logo1.png'

const Footer = () => {
  return (
    <>
    <footer className="text-light bg-dark row row-cols-1 row-cols-sm-2 textClr row-cols-md-4 py-5  text-center text-md-start "> <div className="col mb-3"> <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap"> <img src={Logo} alt="" /> </a> <p className="text-light">Providing quality healthcare services with compassion and expertise.</p> </div>  <div className=" col mb-3"> <h5>Services</h5> <ul className="nav flex-column  "> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">General Medicine</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pediatrics</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Cardiology</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light"></a></li> </ul> </div> <div className="col mb-3"> <h5>Quick Links</h5> <ul className="nav flex-column"> <li className="nav-item mb-2"> <a href="#" className="nav-link p-0 ">About Us</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Doctors</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Appointments</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Contact</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li> </ul> </div> <div className="col mb-3"> <h5>Section</h5> <ul className="nav flex-column"> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">+1 (555) 123-4567</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">info@mediclinic.com</a></li> <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">123 Healthcare Ave</a></li>  </ul> </div> </footer>
    </>
  )
}

export default Footer