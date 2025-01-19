import React from 'react';
import './styles.css'; // Import the CSS file

const Footer = () => {
    const footerStyle = {
        position: 'fixed',         // Fixes the footer to the bottom of the page
        left: '0',                 // Aligns the footer to the left edge of the page
        bottom: '0',               // Positions the footer at the bottom
        width: '100%',             // Makes the footer span the full width of the page
        backgroundColor: '#6a1b9a', // Sets the background color
        color: 'white',            // Sets the text color
        textAlign: 'right',        // Aligns the text to the right
        padding: '3px 0',         // Adds padding to the top and bottom of the footer
        paddingRight: '100px',      // Adds padding to the right side of the footer text
        borderTop: '7px solid white', // Adds a white line on top of the footer
    };

    return (
        <div style={footerStyle}>
            <p id='footer'>Thollarkings &copy; 2024</p>
        </div>
    );
};

export default Footer;