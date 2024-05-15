import FAQs from "../../components/FAQs/FAQs";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/MainHeader/MainHeader";
import Programs from "../../components/Programs/Programs";
import Testimonials from "../../components/Testimonials/Testimonials";
import Values from "../../components/Values/Values";
import "./Home.css";

const Home = () => {
    return (
        <>
            <MainHeader />
            <Programs />
            <Values />
            <FAQs />
            <Testimonials />
        </>
    );
};

export default Home;
