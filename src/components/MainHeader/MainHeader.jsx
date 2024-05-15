import "./MainHeader.css";
import { Link } from "react-router-dom";
import Image from "../../assets/main_header.png";
const MainHeader = () => {
    return (
        <header className="main__header">
            <div className="container main__header_container">
                {/* Left content of the header */}
                <div className="main__header_left">
                    {/* Heading and paragraph */}
                    <h4>#100DaysOfWorkout</h4>
                    <h1>Join The Legends Of The Fitness World</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, cumque nobis tempora dolore doloribus sint.
                    </p>

                    {/* Button to navigate to plans page */}
                    <Link to={"/plans"} className="btn lg">
                        Get Started
                    </Link>
                </div>

                {/* Right content of the header */}
                <div className="main__header_right">
                    {/* circle */}
                    <div className="main__header_circle"></div>

                    {/* image */}
                    <div className="main__header_image">
                        <img src={Image} alt="Main Header Image" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
