import Header from "../../components/Header/Header";
import HeaderImage from "../../assets/header_bg_1.jpg";
import StoryImage from "../../assets/about1.jpg";
import VisionImage from "../../assets/about2.jpg";
import MissionImage from "../../assets/about3.jpg";
import "./About.css";

const About = () => {
    return (
        <>
            {/* Header Section of About */}
            <Header title={"About Us"} image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                laborum repellat dolore nisi voluptate
            </Header>

            {/* Story Section of About */}
            <section className="about__story">
                <div className="container about__story_container">
                    {/* image */}
                    <div className="about__section_image">
                        <img src={StoryImage} alt="Our Story Image" />
                    </div>
                    {/* content */}
                    <div className="about__section_content">
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nemo necessitatibus magnam optio. Doloremque
                            porro sunt excepturi ratione. Beatae laboriosam,
                            rerum quibusdam asperiores sed modi earum natus
                            officia accusamus magnam incidunt cumque blanditiis
                            similique labore quis.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum laborum repellat dolore nisi voluptate
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eos, reprehenderit?
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section of About */}
            <section className="about__vision">
                <div className="container about__vision_container">
                    {/* content */}
                    <div className="about__section_content">
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum voluptate, accusantium voluptatum
                            fugit distinctio ab nisi atque non eius ex.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum laborum repellat dolore nisi voluptate
                        </p>
                    </div>

                    {/* image */}
                    <div className="about__section_image">
                        <img src={VisionImage} alt="Our Vision Image" />
                    </div>
                </div>
            </section>

            {/* Mission Section of About */}
            <section className="about__mission">
                <div className="container about__mission_container">
                    {/* image */}
                    <div className="about__section_image">
                        <img src={MissionImage} alt="Our Mission Image" />
                    </div>

                    {/* content */}
                    <div className="about__section_content">
                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum voluptate, accusantium voluptatum
                            fugit distinctio ab nisi atque non eius ex.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum laborum repellat dolore nisi voluptate
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
