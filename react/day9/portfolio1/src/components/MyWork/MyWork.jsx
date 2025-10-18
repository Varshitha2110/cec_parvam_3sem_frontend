import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './MyWork.css'; // Import the custom CSS file

// Placeholder for your title underline image and portfolio images
import titleUnderline from '../assets/title_underline.png'; 
import work_1 from '../assets/work_1.png';
import work_2 from '../assets/work_2.png';
import work_3 from '../assets/work_3.png';
import work_4 from '../assets/work_4.png';
import work_5 from '../assets/work_5.png';
import work_6 from '../assets/work_6.png';

const portfolioItems = [
    { id: 1, src: work_1, alt: "Work 1" },
    { id: 2, src: work_2, alt: "Work 2" },
    { id: 3, src: work_3, alt: "Work 3" },
    { id: 4, src: work_4, alt: "Work 4" },
    { id: 5, src: work_5, alt: "Work 5" },
    { id: 6, src: work_6, alt: "Work 6" },
];

const MyWork = () => {
    return (
        <Container fluid className="mywork-custom p-0">
            {/* My Work Title Section */}
            <Row className="justify-content-center">
                <Col xs={12} className="mywork-title">
                    {/* The title will be centered automatically by the Col and text-align: center in CSS */}
                    <h1 className="mywork-title-h1">My Latest Work</h1>
                    {/* Title Underline Image */}
                    <Image 
                        src={titleUnderline} 
                        alt="Underline" 
                        className="mywork-title-img d-none d-md-block" // Hide on small screens for better mobile title
                    />
                </Col>
            </Row>

            {/* My Work Container (Grid) */}
            <Row className="justify-content-center">
                {/* The 'mywork-container' class will apply the CSS Grid layout */}
                <Col xs={12} className="mywork-container">
                    {portfolioItems.map((item) => (
                        <Image
                            key={item.id}
                            src={item.src}
                            alt={item.alt}
                            fluid
                            className="mywork-img-item"
                        />
                    ))}
                </Col>
            </Row>

            {/* Show More Button */}
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button 
                        variant="outline-light" // White border
                        className="mywork-showmore fw-medium text-white"
                    >
                        Show More
                        {/* Placeholder for an arrow icon, e.g., using a React Icon library */}
                        <i className="bi bi-arrow-right"></i> 
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default MyWork;