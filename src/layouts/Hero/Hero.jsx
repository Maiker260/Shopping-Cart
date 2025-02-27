import { useRef, useState, useEffect } from "react";
import HeroStyles from "./Hero.module.css";
import utilStyles from "../../styles/utilities.module.css";

export default function Hero() {
    const images = [
        { src: "/images/heroImage1.webp", alt: "image1" },
        { src: "/images/heroImage2.webp", alt: "image2" },
        { src: "/images/heroImage3.webp", alt: "image3" },
        { src: "/images/heroImage4.webp", alt: "image4" },
        { src: "/images/heroImage5.webp", alt: "image5" },
    ];

    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to scroll to the next slide
    const nextSlide = () => {
        if (sliderRef.current) {
            const nextIndex = (currentIndex + 1) % images.length; // Loops back to first image
            sliderRef.current.scrollTo({
                left: nextIndex * sliderRef.current.clientWidth,
                behavior: "smooth",
            });
            setCurrentIndex(nextIndex);
        }
    };

    // Function to scroll to the previous slide
    const prevSlide = () => {
        if (sliderRef.current) {
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            sliderRef.current.scrollTo({
                left: prevIndex * sliderRef.current.clientWidth,
                behavior: "smooth",
            });
            setCurrentIndex(prevIndex);
        }
    };

    // Function to scroll to a specific slide (dot navigation)
    const goToSlide = (index) => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: index * sliderRef.current.clientWidth,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    // Detect current slide based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (sliderRef.current) {
                const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.clientWidth);
                setCurrentIndex(index);
            }
        };

        const slider = sliderRef.current;
        slider.addEventListener("scroll", handleScroll);

        return () => slider.removeEventListener("scroll", handleScroll);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 15000);

        return () => clearInterval(interval); // Clear on unmount
    }, [currentIndex]);

    return (
        <section className={`${utilStyles.flexColumn} ${utilStyles.sectionContainer} ${HeroStyles.container}`}>
            <article className={HeroStyles.sliderWrapper}>
                <div className={HeroStyles.slide} ref={sliderRef}>
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} />
                    ))}
                </div>

                <button className={HeroStyles.prevButton} onClick={prevSlide}>&#10094;</button>
                <button className={HeroStyles.nextButton} onClick={nextSlide}>&#10095;</button>

                <div className={`flex ${HeroStyles.sliderNavbar}`}>
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`${HeroStyles.sliderNavbarItem} ${index === currentIndex ? HeroStyles.active : ""}`}
                            onClick={() => goToSlide(index)}
                        ></div>
                    ))}
                </div>
            </article>

            <div className="sectionSeparator">
                <h3>14 DAYS RETURN POLICY</h3>
            </div>
        </section>
    );
}