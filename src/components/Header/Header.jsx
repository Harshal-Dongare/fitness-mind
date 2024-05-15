import "./Header.css";

const Header = ({ title, image, children }) => {
    return (
        <header className="header">
            <div className="header__container">
                {/* Background Image */}
                <div className="header__container_bg">
                    <img src={image} alt="Header Background Image" />
                </div>

                {/* Content of the header */}
                <div className="header__content">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
