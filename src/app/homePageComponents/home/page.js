'use client'
import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Banner.css"
import "../../globals.css";
import Link from 'next/link';
import { CiCircleCheck } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { LuClock4 } from "react-icons/lu";
import { IoStar } from "react-icons/io5";

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

            <section className='border-bottom'>
                <Container>
                    <Row className='my-4'>
                        <Col lg={4} md={6} className='p-2'>
                            <div className='category-1 '>
                                <img src='/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp' />
                                <div className="banner_content">
                                    <p>Design Creative</p>
                                    <h2>Chair Collection</h2>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className='p-2'>
                            <div className='category-2'>
                                <img src='0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp' />
                                <div className="banner_content">
                                    <p>Bestselling Products</p>
                                    <h2>Chair Collection</h2>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className='p-2'>
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



            <section>
                <Container fluid className='trending_collection'>
                    <Container className='py-5'>
                        <div className="banner_text p-4">
                            <h2>New Trending Collection</h2>
                            <span>We Believe That Good Design is Always in Season</span>
                            <Link href='/'>shopping Now</Link>
                        </div>
                    </Container>
                </Container>
            </section>


            <section className='shipping_two product_bottom_two '>
                <Container>
                    <Row>
                        <Col lg={4} md={4}>
                            <div className="single-shipping">
                                <div className="shipping_icone icone_1">
                                    <BiWorld />
                                </div>
                                <div className="shipping_content">
                                    <h3>Free Shipping</h3>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={4}>
                            <div className="single-shipping">
                                <div className="shipping_icone icone_2">
                                    <CiCircleCheck />
                                </div>
                                <div className="shipping_content">
                                    <h3>Free Shipping</h3>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={4}>
                            <div className="single-shipping">
                                <div className="shipping_icone icone_3">
                                    <LuClock4 />
                                </div>
                                <div className="shipping_content">
                                    <h3>Free Shipping</h3>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

           
            <section className='testimonial_are mt-5'>
                <Container className='testimonial_titile'>
                    <Row>
                        <h3 className='pb-4'>What Our Custumers Say ?</h3>

                        <Slider {...settings}>

                            <div className="single_testimonial">
                                <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" height={100} className='pb-3' alt="" />
                                <span className="name">Kathy Young</span>
                                <span className="job_title">CEO of SunPark</span>
                                <div className="product_ratting pb-4">
                                    <ul>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="single_testimonial">
                                <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" height={100} alt="" />
                                <span className="name">Kathy Young</span>
                                <span className="job_title">CEO of SunPark</span>
                                <div className="product_ratting">
                                    <ul>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="single_testimonial">
                                <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg" height={100} alt="" />
                                <span className="name">Kathy Young</span>
                                <span className="job_title">CEO of SunPark</span>
                                <div className="product_ratting">
                                    <ul>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>

                                        <li><a href="#"><IoStar /></a></li>
                                        
                                    </ul>
                                </div>
                            </div>

                        </Slider>
                    </Row>
                </Container>
            </section>

            <section className='newsletter_area product_bottom_two'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="newsletter_content">
                                <h2>Our Newsletter</h2>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <div className="subscribe_form">
                                    <Form method="POST" action="https://wscubetech.co/Assignments/furniture" id="newsletter_form" className="mc-form footer-newsletter bv-form">
                                        <div className="form-group has-feedback">
                                            <input id="mc-email" name="email" type="email" placeholder="Email address..." data-bv-field="email" />


                                            <button id="mc-submit">Subscribe</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

