import "./Gallery.css";
import Header from "../../components/Header/Header";
import HeaderImage from "../../assets/header_bg_3.jpg";
import { useState } from "react";
import { useEffect } from "react";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const galleryLength = 15;

    // import images dynamically
    useEffect(() => {
        const importImages = async () => {
            const importedImages = [];
            for (let i = 1; i <= galleryLength; i++) {
                const image = await import(`../../assets/gallery${i}.jpg`);
                importedImages.push(image.default);
            }
            setImages(importedImages);
        };
        importImages();
    }, []);

    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                adipisci vel cumque?
            </Header>
            <section className="gallery">
                <div className="container gallery__container">
                    {images.map((image, index) => (
                        <article key={index}>
                            <img
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                            />
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Gallery;
