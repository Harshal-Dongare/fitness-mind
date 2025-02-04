import "./Plans.css";
import Header from "../../components/Header/Header";
import HeaderImage from "../../assets/header_bg_4.jpg";
import Card from "../../UI/Card/Card";
import { plans } from "../../data";

const Plans = () => {
    return (
        <>
            <Header title={"Membership Plans"} image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                non itaque nisi quisquam ab odio?
            </Header>

            <section className="plans">
                <div className="container plans__container">
                    {plans.map(({ id, name, desc, price, features }) => (
                        <Card className="plan" key={id}>
                            <h3>{name}</h3>
                            <small>{desc}</small>
                            <h1>{`$${price}`}</h1>
                            <h2>/mo</h2>
                            <h4>Features</h4>
                            {features.map(({ feature, available }, index) => (
                                <p
                                    key={index}
                                    className={!available ? "disabled" : ""}
                                >
                                    {feature}
                                </p>
                            ))}
                            <button className="btn lg">Choose Plan</button>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Plans;
