import Header from "./Components/Header" ;
import HeroSection from "./Components/HeroSection";
import HeadingText from "./HeadingText";
import CardsContent from "./Components/CardsContent";
import CardsRating from "./Components/CardsRating";
import Footer from "./Footer";
import './App.css';
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import icon5 from './assets/icon5.png'
import icon6 from './assets/icon6.png'
import IMAGE1 from './assets/img1.png'
import IMAGE2 from './assets/img2.png'
import IMAGE3 from './assets/img3.png';

import './Components/CardsContent.css'





function App() {
  
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
 const data3=[{
         name:"Call Us",
         profession:"+1 (555) 123-4567",
        experience:"24/7 Emergency Line",
        img1:icon4,
       
       
    },
    {
         name:"Visit Us",
          profession:"123 Healthcare Ave",
        experience:"Medical District, City 12345",
        img1:icon5,
        
        
    },
    {
        name:"Hours",
        profession:"Mon-Fri: 8AM-8PM",
        experience:"Sat-Sun: 9AM-5PM",
        img1:icon6,
        
    },
    
];
 

  return (
    <>
      <Header/>
      <div className="bgClr"><HeroSection/></div>
       <HeadingText condition={false} Heading="Our Medical Services" Paragh="We offer comprehensive healthcare services to meet all your medical needs with" Paragh1="experienced professionals and modern equipment"/>
        <div className="container gap-5 ">
        <CardsContent condition={false}  data={data2}/></div>
      <div className="bgColor py-4 mt-3"><HeadingText condition={true}/>
      <div className="container ">
        <CardsContent condition={true} data={data1}/></div></div>
        <HeadingText condition={false} Heading="What Our Patients Say" Paragh="Read about the experiences of our satisfied patients."/>
         <div className="bgCl  container-fluid gap-5 ">
        <CardsContent condition={true}  data={data3}/></div>
        <div className=" container d-flex justify-content-center"><CardsRating/></div>
       <div className="container-fluid"> <Footer/></div>
         
    </>
  )
}

export default App
