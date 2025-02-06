"use client";
import React, { useState } from "react";
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaBars, FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


export default function Header() {
    const [cartModal, setCartModal] = useState(false);

    return (
        <>
            <div className="d-none d-lg-block" >
                <Container fluid className="border-bottom border-1">
                    <Container>
                        <Row className="header align-items-center justify-content-between">
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

                <Container fluid className="main_header border-bottom border-1">
                    <Container>
                        <Row className="align-items-center justify-content-between py-4 ">
                            <Col lg={7} className="logo-items">
                                <div className="logo">
                                    <img
                                        src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
                                        className="img-fluid"
                                        alt="logo"
                                    />
                                </div>
                            </Col>
                            <Col>
                                <Row className="p-0 m-0 mid-right-div  ">
                                    <Col className="border align-items-center  ">
                                        <input placeholder="Search product..." className="border-0 px-2 py-2" autoFocus />
                                        <IoIosSearch className="fs-5" />
                                    </Col>
                                    <Col className="border text-center py-2">
                                        <FaHeart className="fs-4" />
                                    </Col>
                                    <Col className="border threeBoxDiv" style={{ cursor: "pointer" }} onClick={() => setCartModal(true)} >
                                        <span className="cart_quantity">0</span>

                                        <IoCart className="fs-5 " />

                                        <CartModal setCartModal={setCartModal} cartModal={cartModal} />

                                        <span className="h-50 border mx-2 border-end"></span>
                                        <span className="fw-bold ">
                                            Rs. 00 <IoIosArrowDown />
                                        </span>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container fluid className="border-bottom border-1">
                    <div className="menu">
                        <nav>
                            <ul className="d-flex justify-content-center">
                                <li className="active">
                                    <Link href="#">Home</Link>
                                </li>
                                <li>
                                    <Link href="#">LIVING</Link>
                                    <ul className="mega_menu d-flex">
                                        <li>
                                            <a>Tables</a>
                                            <ul>
                                                <li><a href="#">Side and End Tables</a></li>
                                                <li><a href="#">Nest Of Tables</a></li>
                                                <li><a href="#">Console Table</a></li>
                                                <li><a href="#">Coffee Table Sets</a></li>
                                                <li><a href="#">Coffee Tables</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>Living Storage</a>
                                            <ul>
                                                <li><a href="#">Prayer Units</a></li>
                                                <li><a href="#">Display Unit</a></li>
                                                <li><a href="#">Shoe Racks</a></li>
                                                <li><a href="#">Chest Of Drawers</a></li>
                                                <li><a href="#">Cabinets and Sideboard</a></li>
                                                <li><a href="#">Bookshelves</a></li>
                                                <li><a href="#">TV Units</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>Mirrors</a>
                                            <ul>
                                                <li><a href="#">Wooden Mirrors</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">SOFA</Link>
                                    <ul className="mega_menu d-flex">
                                        <li>
                                            <a>Sofa Cum Bed</a>
                                            <ul>
                                                <li><a href="#">Wooden Sofa Cum Bed</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>Sofa Sets</a>
                                            <ul>
                                                <li><a href="#">L Shape Sofa</a></li>
                                                <li><a href="#">1 Seater Sofa</a></li>
                                                <li><a href="#">2 Seater Sofa</a></li>
                                                <li><a href="#">3 Seater Sofa</a></li>
                                                <li><a href="#">4 Seater Sofa</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>Swing Jhula</a>
                                            <ul>
                                                <li><a href="#">Wooden Jhula</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">PAGES</Link>
                                    <ul className="sub_menu">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Cart</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        <li><a href="#">Frequently Asked Questions</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#">CONTACT US</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </div>


            {/* for mobile */}
            <div className="bg-white px-2 py-3 d-flex justify-content-between d-block d-lg-none ">
                <div className="logo">
                    <img
                        src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
                        className="img-fluid"
                        alt="logo"
                    />
                </div>

                <div className="d-flex justify-content-between ">
                    <div className="d-flex gap-4 me-5">
                        <div className="border p-2 "> <FaHeart className="fs-4" /> </div>
                        <div className="position-relative border p-2"  onClick={() => setCartModal(true)}>
                            <span className="cart_quantity">0</span>

                            <IoCart className="fs-4 " />

                            <CartModal setCartModal={setCartModal} cartModal={cartModal} />
                        </div>
                    </div>

                    <div className="barIcon ">
                        <FaBars />
                    </div>
                </div>
            </div>
        </>
    );
}

// **Improved CartModal Component**
function CartModal({ setCartModal, cartModal }) {

    console.log(cartModal)

    const [cartItem, setcartItem] = useState(false);

    
    return (
        <div onClick={()=>setCartModal(false)}
            className={ cartModal ? "activeCartOuterDiv" : "cartOuterDiv"}  >


            <div className={`cartInnerDiv ${cartModal ? "activeCartInnerDiv" : ""} `} onClick={(e) => e.stopPropagation()}>


                <div className="px-3 py-2  border-bottom d-flex justify-content-between">
                    <h5 className=""> Cart </h5>
                    <h4 className="" onClick={() => setCartModal(false)}> <RxCross2 /></h4>
                </div>


                {cartItem ?
                    <>
                        <div className="">
                            <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg" />
                        </div>

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

            </div>
        </div>
    );
}


function CartItem() {
    return (
        <>
            <div className="w-100 d-flex justify-content-evenly border-bottom py-3 ">
                <div className="w-25 my-3 ">
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg" className="img-fluid" />
                </div>

                <div className="">
                    <small className="text-secondary d-block  m-1">Yuvi sheesham wood sofa</small>
                    <small className="text-secondary d-block  m-1">Set</small>
                    <small className="text-secondary d-block  m-1"> Qty: 1 </small>
                    <b className="text-secondary  m-0">Rs. 7,600</b>
                </div>

                <div className=""><RxCross2 /></div>
            </div>
        </>
    )
}

function CartTotal() {
    return (
        <div className="mt-3">
            <div className="d-flex justify-content-between">
                <div className="">Subtotal</div>
                <div className="">Rs. 10,100</div>
            </div>

            <div className="bg-dark cartBtn p-1 mt-2" >
                <button className="d-block   ">VIEW CART</button>
                <button className="d-block  ">CHECKOUT</button>
            </div>
        </div>
    )
}