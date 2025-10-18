import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Navbar.css'; // Import the custom CSS file
// Placeholder for the navigation underline image
import navUnderline from '../assets/nav_underline.png'; 

const NavbarComponent = ({ logo, menuItems, onConnectClick }) => {
    // State to manage the open/close status of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // .navbar styles (margin, flex layout) are handled by the custom class and Container/utility classes
        <Container fluid className="navbar-custom p-0">
            <Navbar expand="md" className="w-100 p-0 justify-content-between">
                
                {/* Logo or Brand */}
                <Navbar.Brand href="#home">
                    {/* Assuming the logo is just text or a simple image placeholder */}
                    <div className="nav-logo">{logo || 'MyPortfolio'}</div>
                </Navbar.Brand>

                {/* Mobile: Hamburger Toggler (Custom implementation for animation) */}
                <div 
                    className={`hamburger d-flex d-md-none ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                >
                    <span />
                    <span />
                    <span />
                </div>

                {/* Menu and Connect Button (Visible on desktop/tablet, toggled on mobile) */}
                <div className={`nav-collapse-custom d-none d-md-flex ${isMenuOpen ? 'active' : ''}`}>
                    
                    {/* Navigation Menu (.nav-menu) */}
                    {/* The menu is rendered inside the custom collapse div */}
                    <Nav className={`nav-menu-custom ${isMenuOpen ? 'active' : ''}`} as="ul">
                        {menuItems.map((item) => (
                            <li key={item.id} className="nav-item-custom">
                                {/* Anchor Link */}
                                <Nav.Link 
                                    href={item.href} 
                                    className="anchor-link text-white" 
                                    onClick={() => {
                                        // Close menu on mobile after clicking a link
                                        if (window.innerWidth <= 768) {
                                            setIsMenuOpen(false);
                                        }
                                    }}
                                >
                                    {item.name}
                                </Nav.Link>
                                {/* Underline Image (if item.id === 1 or whatever is 'active') */}
                                {item.id === 1 && (
                                    <img src={navUnderline} alt="underline" className="nav-underline-img" />
                                )}
                            </li>
                        ))}
                    </Nav>

                    {/* Connect Button (Hidden on small mobile when menu is active/open) */}
                    <Button
                        onClick={onConnectClick}
                        className="nav-connect-custom fw-medium text-white d-none d-md-block"
                        size="lg"
                    >
                        Connect With Me
                    </Button>
                </div>
            </Navbar>
        </Container>
    );
};

export default NavbarComponent;