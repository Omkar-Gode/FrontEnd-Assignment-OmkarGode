import InfoCard from "./InfoCard";
import styles from "./MiddleSection.module.css";


function MiddleSection(){
    return (
    <section className={styles.container}>
        <InfoCard
            iconBackground="#FFA9A9"
            iconShadow="rgba(255, 15, 15, 0.25)"
            src="focus-innovation-icon.svg" 
            title="Focus on Innovation" 
            description="Stay ahead with the latest advancements in VR technology, bringing new dimensions to immersive experiences."
        />
        <InfoCard
            iconBackground="#FFFA81"
            iconShadow="rgba(233, 223, 0, 0.6)"
            src="building-the-future-icon.svg" 
            title="Building the Future" 
            description="Explore the foundational elements that drive VR, from cutting-edge hardware to revolutionary software solutions."
        />
        <InfoCard
            iconBackground="#7C91FF"
            iconShadow="rgba(0, 10, 255, 0.23)"
            src="connected-worlds-icon.svg" 
            title="Connected Worlds" 
            description="Discover the seamless integration of virtual reality with other emerging technologies, creating interconnected digital ecosystems."
        />
    </section>
    );
}

export default MiddleSection;