import Header from "./Components/Header" ;
import HeroSection from "./Components/HeroSection";
import HeadingText from "./HeadingText";
import CardsContent from "./Components/CardsContent";
import CardsIcon from "./Components/CardsIcon";
import './App.css'



function App() {

  return (
    <>
      <Header/>
      <div className="container"><HeroSection/></div>
       <HeadingText condition={false} Heading="Our Medical Services" Paragh="We offer comprehensive healthcare services to meet all your medical needs with" Paragh1="experienced professionals and modern equipment"/>
       <CardsIcon/>
        <div className=" container gap-5 ">
        <CardsContent condition={false} /></div>
      <div className="bgColor py-4 mt-3"><HeadingText condition={true}/>
      <div className="container ">
        <CardsContent condition={true}/></div></div>
        <HeadingText condition={false} Heading="What Our Patients Say" Paragh="Read about the experiences of our satisfied patients."/>
         
    </>
  )
}

export default App
