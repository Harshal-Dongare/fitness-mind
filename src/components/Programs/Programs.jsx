import SectionHeader from "../SectionHeader/SectionHeader";
import { FaSitemap } from "react-icons/fa6";
import { programs } from "../../data";
import "./Programs.css";
import { FaCrown } from "react-icons/fa";
import Card from "../../UI/Card/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
const Programs = () => {
    return (
        <section className="programs">
            <div className="container programs__container">
                {/* SectionHeader Component */}
                <SectionHeader icon={<FaCrown />} title={"Programs"} />

                {/* Card Component from UI directory */}
                <div className="programs_wrapper">
                    {/* Cards */}
                    {programs.map(({ id, title, info, path }) => (
                        <Card className="programs__program" key={id}>
                            <span>{<FaSitemap />}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className="btn sm">
                                Learn More
                                <AiFillCaretRight />
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
