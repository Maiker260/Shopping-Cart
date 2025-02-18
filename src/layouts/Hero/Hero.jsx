import HeroStyles from "./Hero.module.css"
import utilStyles from "../../styles/utilities.module.css"

export default function Hero({}) {

    const images= [
        { src: "/images/heroImage1.webp", alt: "image1" },
        { src: "/images/heroImage2.webp", alt: "image2" },
        { src: "/images/heroImage3.webp", alt: "image3" },
        { src: "/images/heroImage4.webp", alt: "image4" },
        { src: "/images/heroImage5.webp", alt: "image5" },
    ]

    return (
        <section className={`${utilStyles.flexColumn} ${utilStyles.sectionContainer} ${HeroStyles.container}`}>
            <article className={HeroStyles.sliderWrapper}>
                <div className={`flex ${HeroStyles.slide}`}>
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} />
                    ))}
                </div>
                <div className={`flex ${HeroStyles.sliderNavbar}`}>
                    {images.map((_, index) => (
                        <div key={index} className={`${HeroStyles.sliderNavbarItem}`}></div>
                    ))}
                </div>
            </article>
            <div className="sectionSeparator">
                <h3>14 DAYS RETURN POLICY</h3>
            </div>
        </section>
    )
}