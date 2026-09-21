import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return (
        <Container>
            <h1 className='text-center'>PROMOTIONAL BANNERS</h1>
            <Carousel className="position-relative" data-bs-ride="carousel">
                <Carousel.Item>
                    <img src="/Images/banner1.jpg" className="d-block w-100" style={{ height: '450px', objectFit: 'cover' }} alt="Pizza 1" />
                    <Carousel.Caption>
                        <h5>FASHION COLLECTION 2026</h5>
                        <p>Discover latest fashion trends for 2026</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/Images/banner2.jpg" className="d-block w-100" style={{ height: '450px', objectFit: 'cover' }} alt="Pizza 2" />
                    <Carousel.Caption>
                        <h5>SUMMER SALE UP TO 50%</h5>
                        <p>Enjoy special discounts on selected products</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="/Images/banner3.jpg" className="d-block w-100" style={{ height: '450px', objectFit: 'cover' }} alt="Pizza 3" />
                    <Carousel.Caption>
                        <h5>NEW ARRIVALS</h5>
                        <p>Explore our newest clothing collection</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>

    );
}

export default Banner;
