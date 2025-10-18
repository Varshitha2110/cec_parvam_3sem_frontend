import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Services.css'; // Import the custom CSS file
// Placeholder for the title underline image and readmore arrow icon
import titleUnderline from '../assets/title_underline.png'; 
import arrow from '../assets/arrow_icon.svg'; 

const serviceData = [
    {
        id: 1,
        number: '01',
        title: 'Web Development',
        description: 'Building responsive, high-performance, and scalable web applications using modern frameworks.',
    },
    {
        id: 2,
        number: '02',
        title: 'App Development',
        description: 'Creating native and cross-platform mobile applications for iOS and Android.',
    },
    {
        id: 3,
        number: '03',
        title: 'UI/UX Design',
        description: 'Designing intuitive and engaging user interfaces with a focus on user experience.',
    },
    {
        id: 4,
        number: '04',
        title: 'Digital Marketing',
        description: 'Strategies to enhance online presence and drive targeted traffic to your business.',
    },
    {
        id: 5,
        number: '05',
        title: 'Content Creation',
        description: 'Developing high-quality, engaging content tailored to your audience and brand voice.',
    },
    {
        id: 6,
        number: '06',
        title: 'Cloud Services',
        description: 'Deployment, maintenance, and scaling of applications on major cloud platforms.',
    },
];

const Services = () => {
    return (
        <Container fluid className="services-custom p-0">
            {/* Services Title Section */}
            <Row className="justify-content-center">
                <Col xs={12} className="services-title text-center">
                    <h1 className="services-title-h1">My Services</h1>
                    {/* Title Underline Image */}
                    <Image 
                        src={titleUnderline} 
                        alt="Underline" 
                        className="services-title-img"
                    />
                </Col>
            </Row>

            {/* Services Container (Grid) */}
            <Row className="justify-content-center">
                {/* We use a custom class to control the grid and responsiveness based on the CSS Grid original */}
                <Col xs={12} className="services-container-grid">
                    {serviceData.map((service) => (
                        <div key={service.id} className="services-format">
                            {/* Service Number (h2 with gradient text) */}
                            <h2 className="services-format-number">{service.number}</h2>
                            
                            {/* Service Title */}
                            <h3 className="text-white">{service.title}</h3>
                            
                            {/* Service Description */}
                            <p>{service.description}</p>
                            
                            {/* Read More Link */}
                            <div className="services-readmore">
                                <p className="mb-0 text-white">Read More</p>
                                <Image src={arrow} alt="Arrow" />
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Services;