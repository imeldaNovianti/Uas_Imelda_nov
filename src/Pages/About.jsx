import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="container-page">
            <div className="about-content">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>Welcome to our florist website! Here you can learn more about our mission, values, and achievements. We are dedicated to providing beautiful flowers for every occasion with quality and sustainability at the core of our business.</p>
                    <p>We believe in sustainability and the beauty of nature. Our flowers are sourced from local growers who share our values. We strive to minimize our carbon footprint and promote eco-friendly practices.</p>
                    <p>We believe in sustainability and the beauty of nature. Our flowers are sourced from local growers who share our values. We strive to minimize our carbon footprint and promote eco-friendly practices.</p>

                    <div className="navigation-buttons">
                        {/* <Link to="/pr-media" className="nav-button">
                            PR & Media
                        </Link>
                        <Link to="/awards" className="nav-button">
                            Awards
                        </Link>
                        <Link to="/review" className="nav-button">
                            Review
                        </Link>
                        <Link to="/sustainability" className="nav-button">
                            Sustainability
                        </Link> */}
                    </div>
                </div>
                
                <div className="about-image">
                    <img 
                        src="public/2.jpg" 
                        alt="Florist Shop" 
                        className="image" 
                    />
                </div>
            </div>

            {/* Tombol kedua di bawah gambar */}
            <div className="navigation-buttons">
                <Link to="/contact" className="nav-button">
                    Contact Us
                </Link>
                <Link to="/services" className="nav-button">
                    Our Services
                </Link>
                <Link to="/contact" className="nav-button">
                Media
                </Link>
                <Link to="/services" className="nav-button">
                Awards
                </Link>
                <Link to="/contact" className="nav-button">
                    review
                </Link>
                <Link to="/services" className="nav-button">
                Sustainabily
                </Link>
                <Link to="/contact" className="nav-button">
                    help
                </Link>
                <Link to="/services" className="nav-button">
                    more
                </Link>

            </div>

            {/* Teks dan gambar di bawah tombol kedua */}
            <div className="about-content">
                <div className="about-text">
                    <h2>Our Commitment</h2>
                    <p>We believe in sustainability and the beauty of nature. Our flowers are sourced from local growers who share our values. We strive to minimize our carbon footprint and promote eco-friendly practices.</p>
                    <p>We believe in sustainability and the beauty of nature. Our flowers are sourced from local growers who share our values. We strive to minimize our carbon footprint and promote eco-friendly practices.</p>
                    <p>We believe in sustainability and the beauty of nature. Our flowers are sourced from local growers who share our values. We strive to minimize our carbon footprint and promote eco-friendly practices.</p>

                </div>
                
                <div className="about-image">
                    <img 
                        src="public/3.jpg" 
                        alt="Sustainable Practices" 
                        className="image" 
                    />
                </div>
            </div>
        </div>
    );
}