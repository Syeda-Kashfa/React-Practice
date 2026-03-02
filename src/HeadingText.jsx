import React from 'react'

const HeadingText = (props) => {
  return (
   <>
   {props.condition?(<><div className='container text-center '>  <h1 className="text-black fw-bold">Meet Our Expert Doctors</h1>
   <p className='txt mb-5'>Our team of experienced medical professionals is dedicated to providing you with the best care.</p></div></>):(<><div className='container text-center '>  <h1 className="text-black fw-bold">{props.Heading}</h1>
   <p className='txt mb-0'>{props.Paragh}</p>
   <p className='txt mb-5 pt-0 mt-0'>{props.Paragh1}</p></div></>)}

   </>
  )
}

export default HeadingText

       