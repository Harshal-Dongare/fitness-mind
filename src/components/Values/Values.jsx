import Image from "../../assets/values.jpg";
import SectionHeader from "../SectionHeader/SectionHeader";
import { GiCutDiamond } from "react-icons/gi";
import { SiOpenaigym } from "react-icons/si";
import { values } from "../../data";
import Card from "../../UI/Card/Card";
import "./Values.css";

const Values = () => {
    return (
        <section className="values">
            <div className="container values__container">
                {/* left Section: Image */}
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="Values Image" />
                    </div>
                </div>

                {/* Right Section: Cards */}
                <div className="values__right">
                    {/* Section Header */}
                    <SectionHeader icon={<GiCutDiamond />} title={"Values"} />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quos numquam amet illum voluptates reiciendis
                        iste!
                    </p>

                    {/* Cards */}
                    <div className="values__wrapper">
                        {values.map(({ id, title, desc }) => (
                            <Card className="values__value" key={id}>
                                <span>
                                    <SiOpenaigym />
                                </span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;
