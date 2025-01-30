
'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import "../../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Banner.css"

export default function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      };
    return (
        <>
          <Container fluid className='  '>
          
              <Slider {...settings}>      
                 <img src="/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="banner" className=''/>
                 <img src="/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg" alt="banner" className='img-fluid'/>
                 <img src="/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg" alt="banner" className='img-fluid'/>
              
               </Slider>

               
          </Container>
          
        </>
      )
}




