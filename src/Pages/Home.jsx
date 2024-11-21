import React from 'react';

export default function Home() {
    return (
        <div className="container-page">
            <h1 className="home-title">Welcome to Our Florist!</h1>
            <p className="home-description">
                Discover a variety of fresh flowers for every occasion. 
                We offer a selection of beautiful, high-quality blooms.
            </p>
            <div className="home-image">
                <img 
                    src="public/1.jpg" 
                />
            </div>
            {/* <div className="home-image">
                <img 
                    src="public/BEST SELLER.jpg" 
                />
            </div> */}
            <div className="home-buttons">
                <button className="view-products-button">View Products</button>
                <button className="contact-us-button">Contact Us</button>
            </div>
        </div>
    );
}
