
"use client";
import React, { useState } from "react";
import "./Header.css";
import { AccordionBody, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaBars, FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from 'react-bootstrap/Accordion';

export default function Header() {
    const [showCart, setShowCart] = useState(false);

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    // formenu
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Desktop Header */}
            <div className="d-none d-lg-block" >
                <Container fluid className="border-bottom">
                    <Container>
                        <Row className="align-items-center justify-content-between">
                            <Col lg={7} md={12} className="p-0">
                                <div className="top-header">
                                    <p><span>Contact us 24/7</span>: +91-9781234560 / furniture@gmail.com</p>
                                </div>
                            </Col>
                            <Col lg={5} md={12}>
                                <ul className="auth d-flex justify-content-end">
                                    <li>Login &nbsp;/</li>
                                    <li>Register</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                {/* Main Header */}
                <Container fluid className="main_header border-bottom">
                    <Container>
                        <Row className="align-items-center justify-content-between  py-4">
                            <Col lg={7}>
                                <div className="logo">
                                    <img
                                        src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
                                        className="img-fluid"
                                        alt="logo"
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="p-0 m-0 mid-right-div  ">
                                    <div className="border">
                                        <input placeholder="Search product..." className="border-0 px-2 py-2" autoFocus />
                                        <IoIosSearch className="fs-5" />
                                    </div>
                                    <div className="border text-center py-2">
                                        <FaHeart className="fs-4" />
                                    </div>
                                    <div className="border threeBoxDiv" style={{ cursor: "pointer" }} onClick={handleShowCart}>
                                        <span className="cart_quantity">0</span>
                                        <IoCart className="fs-5 ms-3 " />
                                        <span className="h-50 border mx-2 border-end"></span>
                                        <span className="fw-bold">Rs. 00 <IoIosArrowDown /></span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>

            {/* Mobile Header */}
            <div className="bg-white px-2 py-3 d-flex justify-content-between d-block d-lg-none">
                <div className="logo">
                    <img
                        src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
                        className="img-fluid"
                        alt="logo"
                    />
                </div>
                <div className="d-flex gap-4">
                    <div className="border p-2"><FaHeart className="fs-4" /></div>
                    <div className="position-relative border p-2" onClick={handleShowCart}>
                        <span className="cart_quantity">0</span>
                        <IoCart className="fs-4" />
                    </div>
                    <div className="barIcon" onClick={handleShow} ><FaBars /></div>

                </div>
                
            </div>

            {/* Cart Modal */}
            <CartModal showCart={showCart} handleClose={handleCloseCart} />
        </>
    );
}

// Cart Modal Component
function CartModal({ showCart, handleClose }) {
    const [cartItem, setcartItem] = useState(false);
    return (
        <Offcanvas className="modalClass " show={showCart} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

                {cartItem ?
                    <>
                        <div className="">
                            <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg" />                         </div>

                        <div className="border-top border-bottom py-3 px-3 text-center">
                            Your shopping cart is empty!
                        </div>
                    </>
                    :
                    <>
                        <CartItem />
                    </>
                }

                {cartItem ?
                    ""
                    :
                    <CartTotal />
                }

            </Offcanvas.Body>
        </Offcanvas>
    );
}

// Cart Item Component
function CartItem() {
    return (
        <div className="d-flex justify-content-between border-bottom py-3">
            <div className="w-25">
                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg" className="img-fluid" alt="cart-item" />
            </div>
            <div>
                <small className="text-secondary d-block">Yuvi Sheesham Wood Sofa</small>
                <small className="text-secondary d-block">Qty: 1</small>
                <b className="text-secondary">Rs. 7,600</b>
            </div>
            <div><RxCross2 /></div>
        </div>
    );
}

// Cart Total Component
function CartTotal() {
    return (
        <div className="mt-3">
            <div className="d-flex justify-content-between">
                <div>Subtotal</div>
                <div>Rs. 10,100</div>
            </div>
            <div className="bg-dark cartBtn p-1 mt-2">
                <button className="d-block">VIEW CART</button>
                <button className="d-block">CHECKOUT</button>
            </div>
        </div>
    );
}


// offcanwas menu
function OffcanvasMenu({ show, setShow }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Offcanvas show={show} onHide={handleClose} className="menuOffCanwas" >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>

            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>Contact us 24/7 : +91-9781234560 </p>
                <p>furniture@gmail.com </p>

                    <Accordion>
                        <Accordion.Item eventKey="0" className="noneArrow">
                            <Accordion.Header>Home</Accordion.Header>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Living</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Tables</Accordion.Header>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Living Storage</Accordion.Header>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Mirrors</Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Sofa</Accordion.Header>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Pages</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>About Us</Accordion.Header>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Cart</Accordion.Header>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Checkout</Accordion.Header>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Frequently Asked Questions</Accordion.Header>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4" className="noneArrow">
                            <Accordion.Header>Login / Register</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>

            </Offcanvas.Body>
        </Offcanvas>
    )
}
