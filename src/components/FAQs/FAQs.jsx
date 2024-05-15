import SectionHeader from "../SectionHeader/SectionHeader";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../../data";
import FAQ from "./FAQ";
import "./FAQs.css";
import "./FAQ.css";
const FAQs = () => {
    return (
        <section className="faqs">
            <div className="container faqs__container">
                <SectionHeader icon={<FaQuestion />} title={"FAQs"} />
                <div className="faqs__wrapper">
                    {faqs.map(({ id, question, answer }) => (
                        <FAQ key={id} question={question} answer={answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
