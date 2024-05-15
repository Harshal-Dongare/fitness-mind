import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                {/* first column of footer */}
                <article>
                    <Link to={"/"} className="company_logo">
                        Fitness Mind
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit dolorem unde cumque a dolor soluta dolorum
                        fugiat officia natus necessitatibus!
                    </p>
                    <div className="footer__socials">
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <AiOutlineTwitter />
                        </a>
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <AiFillInstagram />
                        </a>
                    </div>
                </article>

                {/* second column of footer */}
                <article>
                    <h4>Quick Links</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>

                {/* third column of footer */}
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>

                {/* fourth column of footer */}
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/s">Support</Link>
                </article>
            </div>

            {/* copyright section of footer */}
            <div className="footer__copyright">
                <small>2024 Harshal Dongare &copy; All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
