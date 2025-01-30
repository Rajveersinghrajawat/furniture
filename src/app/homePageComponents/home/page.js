'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Banner.css"
import "../../globals.css";


export default function Index() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>

            <Container fluid className='p-0 banner'>

                <Slider {...settings}>

                    <img src="/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="banner" className='img-fluid' />
                    <img src="/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg" alt="banner" className='img-fluid' />
                    <img src="/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg" alt="banner" className='img-fluid' />

                </Slider>


            </Container>

            <section  className='border-bottom'>
            <Container>
                <Row className='my-4'>
                    <Col className='cat col-lg-4 col-md-6 col-sm-12 p-2'>
                        <div className='category-1 '>
                            <img src='/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp' />
                            <div className="banner_content">
                                <p>Design Creative</p>
                                <h2>Chair Collection</h2>
                            </div>
                        </div>
                    </Col>

                    <Col className='overflow-hidden col-lg-4 col-md-6 col-sm-12 p-2'>
                        <div className='category-2'>
                            <img src='0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp' />
                            <div className="banner_content">
                                <p>Bestselling Products</p>
                                <h2>Chair Collection</h2>
                            </div>
                        </div>
                    </Col>

                    <Col className='overflow-hidden col-lg-4 col-md-6 col-sm-12 p-2'>
                        <div className='category-1 '>
                            <img src='/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp' />
                            <div className="banner_content">
                                <p>Onsale Products</p>
                                <h2>Chair Collection</h2>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
            </section>
        </>
    )
}

