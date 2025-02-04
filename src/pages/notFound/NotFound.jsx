import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="notFound">
            <div className="container notFound__container">
                <h2>Page Not Found</h2>
                <Link to={"/"} className="btn">
                    Go Back Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
