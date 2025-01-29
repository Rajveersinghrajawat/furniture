import React from "react";
import "./Header.css"
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export default function Header() {
    return (
        <>
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

            <Container fluid className="border-bottom border-1">
                <Container>
                    <Col className="col-lg-6 py-4">
                        <div className="logo">
                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" className="img-fluid" alt="logo" />
                        </div>
                    </Col>

                    <Col className="col-lg-6">
                    </Col>
                </Container>
            </Container>

            <Container fluid className="border-bottom border-1">
                <div className="menu">
                    <nav>
                        <ul className="d-flex justify-content-center">
                            <li className="active">
                                <Link href='#'>Home</Link>
                            </li>

                            <li>
                                <Link href='#'>LIVING</Link>
                                <ul className="mega_menu d-flex">
                                    <li><a>Tables</a>
                                        <ul>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/side-and-end-tables">Side and End Tables</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/nest-of-tables">Nest Of Tables</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/console-table">Console Table</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/coffee-table-sets">Coffee Table Sets</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/coffee-tables">Coffee Tables</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Living Storage</a>
                                        <ul>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/prayer-units">Prayer Units</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/display-unit">Display Unit</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/shoe-racks">Shoe Racks</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/chest-of-drawers">Chest Of Drawers</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/cabinets-and-sideboard">Cabinets and Sideboard</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/bookshelves">Bookshelves</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/tv-units">Tv Units</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Mirrors</a>
                                        <ul>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/wooden-mirrors">Wooden Mirrors</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href='#'>SOFA</Link>
                                  <ul className="mega_menu d-flex">
                                    <li><a>SOFA CUM BED</a>
                                        <ul>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/side-and-end-tables">Wooden Sofa Cum Bed</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Sofa Sets</a>
                                        <ul>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/prayer-units">L Shape Sofa</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/display-unit">1 Seater Sofa</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/shoe-racks">2 Seater Sofa</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/chest-of-drawers">3 Seater Sofa</a></li>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/cabinets-and-sideboard">4 Seater Sofa</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Swing Jhula</a>
                                        <ul>
                                            <li><a href="https://wscubetech.co/Assignments/furniture/categories/wooden-mirrors">Wooden Jhula</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href='#'>PAGES</Link>
                                <ul className="sub_menu">
                                    <li><a>About Us</a></li>
                                    <li><a>Cart</a></li>
                                    <li><a>Checkout</a></li>
                                    <li><a>Frequently Question</a></li>
                                </ul>
                            </li>

                            <li>
                                <Link href='#'>CONTACT US</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </Container>
        </>
    );
}
