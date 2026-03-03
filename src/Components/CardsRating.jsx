import React from 'react'
import './CardsRating.css'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'



const CardsRating = () => {
  return (
  <>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 "> <div className="feature col bgClrr py-4 "> <div className="feature-icon d-inline-flex align-items-center justify-cntent-center  mb-3 gap-3"> <div><img src={client1} alt="" /></div> <div><h4>John Smith</h4></div></div> <p>"Excellent care and professional staff. Dr. Johnson helped me with my heart condition and I'm feeling much better now"</p>  </div> <div className="feature col bgClrr py-4"> <div className="feature-icon d-inline-flex align-items-center justify-content-center gap-3 mb-3"> <div><img src={client2} alt="" /></div> <div><h4>Maria Garcia</h4></div> </div>  <p>"The pediatric care for my children is outstanding. Dr. Chen is wonderful with kids and very knowledgeable"</p> </div> <div className="feature col bgClrr py-4"> <div className="feature-icon d-inline-flex align-items-center justify-content-center gap-3 mb-3"> <div><img src={client3} alt="" /></div> <div><h4>David Wilson</h4></div> </div>  <p>"Quick appointment scheduling and thorough examinations. The lab results were ready fast and accurate"</p>  </div> </div>
  </>
  )
}

export default CardsRating