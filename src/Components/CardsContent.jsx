import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CardsContent.css'




const CardsContent = ({data,condition}) => {



  return (
    <>
     {
        <div className='row'>
        {data.map((props,index,)=>(
           
        <div className='col-12 col-sm-6 col-md-4 mb-4'>    
         <Card key={index} className={`border-0 mt-4 ${condition?"showCard1":"showCard2"}`} >
      <Card.Img variant="top" src={props.img1} className='img-fluid' />
      
        <Card.Title className='nme'>{props.name}</Card.Title>
        <Card.Text className='prof'>{props.profession}</Card.Text>
         <Card.Text className='txt'>{props.experience}</Card.Text>
      
     
    </Card></div>
   

        ))}
    </div> }
    </>
  )
}

export default CardsContent



