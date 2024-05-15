import "./Contact.css";
import Header from "../../components/Header/Header";
import HeaderImage from "../../assets/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                obcaecati dignissimos explicabo.
            </Header>
            <section className="contact">
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a
                            href="mailto:harshalmajik1997@gmail.com"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <MdEmail />
                        </a>
                        <a
                            href="https://m.me/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <BsMessenger />
                        </a>
                        <a
                            href="https://wa.me/+919999999999"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
