import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMAGE1 from '../assets/img1.png'
import IMAGE2 from '../assets/img2.png'
import IMAGE3 from '../assets/img3.png'
import './CardsContent.css'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'



const CardsContent = ({condition}) => {

    const data1=[{
        name:"Dr. Sarah Johnson",
        profession:"Cardiologist",
        experience:"15+ years experience in cardiovascular medicine",
        img1:IMAGE1,
       
    },
    {
        name:"Dr. Michael Chen",
        profession:"Pediatrician",
        experience:"Specialized in child healthcare and development",
        img1:IMAGE2,
        
    },
    {
        name:"Dr. Emily Davis",
        profession:"General Practitioner",
        experience:"Comprehensive primary care specialist",
        img1:IMAGE3,
        
    },
    
];

    const data2=[{
         name:"General Medicine",
        profession:"Comprehensive primary care for all ageswith preventive and diagnostic services.",
        experience:"Learn More →",
        img1:icon1,
       
       
    },
    {
         name:"Pediatrics",
         profession:"Specialized care for infants, children, and adolescents with child-friendly environment",
        experience:"Learn More →",
        img1:icon2,
        
        
    },
    {
        name:"Lab Testing",
        profession:"Advanced diagnostic testing with quick results and accurate analysis.",
        experience:"Learn More →",
        img1:icon3,
        
    },
    
];
 const finalData = condition ? data1: data2

  return (
    <>
     {
        <div className='row'>
        {finalData.map((props,index)=>(
           
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



