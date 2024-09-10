
import { useState } from "react";
import styles from "./BottomSection.module.css";
import CardList from "./CardList";
import ExploreButton from "./ExploreButton";

function BottomSection(){
    const [exploreState, setExploreState] = useState("Gaming");
    const [showExplore, setShowExplore] = useState(false);

    return (
        <section className={styles.container}>
            <div className={styles.divTitle}>
                <h2>PRODUCTS</h2>
                <div className={styles.underline}></div>
            </div>
            <CardList/>
            <img className={styles.scrollbar} src="scrollbar.svg" alt="scrollbar"/>

            
            <div className={styles.expVRTitle}>
                <h2>Experience VR</h2>
                <div className={styles.underline}></div>
            </div>
            <img className={styles.vrImg} src="vr-headset.png" alt="vr-headset"/>


            {
                !showExplore &&  <ExploreButton value="Explore More" fontSize={1} setShowExplore={setShowExplore}/>
            }


            {
                showExplore && 
                (
                    <>
                    <div className={styles.exploreDiv}>
                        <h2>Explore Possibilities</h2>
                        <p>Unlock New Dimensions through Tech and Virtual Reality</p>
                        <div className={styles.buttonDiv}>
                            <button className={exploreState === "Sci-Fi" ? styles.onButton : styles.offButton} onClick={()=>{setExploreState("Sci-Fi")}}>Sci&#8209;Fi</button>
                            <button className={exploreState === "Nature" ? styles.onButton : styles.offButton} onClick={()=>{setExploreState("Nature")}}>Nature</button>
                            <button className={exploreState === "Gaming" ? styles.onButton : styles.offButton} onClick={()=>{setExploreState("Gaming")}}>Gaming</button>
                            <button className={exploreState === "Drive" ? styles.onButton : styles.offButton} onClick={()=>{setExploreState("Drive")}}>Drive</button>
                        </div>
                    </div>

                    <div className={styles.exploreImgDiv}>
                        <div>
                            <h1>{exploreState === "Gaming" ? "GAMING" : (exploreState === "Sci-Fi" ? "SCI-FI" : (exploreState === "Nature" ? "NATURE" : "DRIVING"))} </h1>
                            <p>
                                {exploreState === "Gaming" ? "Play beyond reality." : 
                                (exploreState === "Sci-Fi" ? "Explore un-imaginable realms." : 
                                (exploreState === "Nature" ? "Immerse in digital serenity." :
                                "Race into the future."))}
                            </p>
                            
                        </div>
                        <img className={styles.exploreImg} 
                            src={exploreState === "Gaming" ? "gaming.png" : (exploreState === "Sci-Fi" ? "sci-fi.png" : (exploreState === "Nature" ? "nature.png" : "driving.png"))} 
                            alt="gaming"
                        />      
                    </div>


                    <div className={styles.moreInfoTitle}>
                        <h2>More about EquiTek!</h2>
                        <div className={styles.underline}></div>
                    </div>


                    <div className={styles.moreInfo}>
                        <div className={styles.infoCard}>
                            <div>
                                <h3>Tech Innovations</h3>
                                <p>Unveiling the latest in tech innovation, from cutting-edge gadgets to groundbreaking VR experiences. Dive into expert reviews and insights.</p>
                            </div>
                            <img className={styles.mobileImg} src="tech-innovations-mobile.png" alt="tech-innovations"/>
                            <img className={styles.desktopImg} src="tech-innovations.png" alt="tech-innovations"/>
                        </div>
                        <div className={styles.infoCard}>
                            <div>
                                <h3>VR Game Development</h3>
                                <p>Explore the art of VR game development, showcasing the blend of technology and creativity in crafting immersive virtual worlds.</p>
                            </div>
                            <img className={styles.mobileImg} src="vr-game-development-mobile.png" alt="vr-game-development"/>
                            <img className={styles.desktopImg} src="vr-game-development.png" alt="vr-game-development"/>
                        </div>
                        <div className={styles.infoCard}>
                            <div>
                                <h3>Immersive Experiences</h3>
                                <p>Delve into a collection of VR projects, where technology pushes the boundaries of imagination and transforms the digital landscape.</p>
                            </div>
                            <img className={styles.mobileImg} src="immersive-experiences-mobile.png" alt="immersive-experiences"/>
                            <img className={styles.desktopImg} src="immersive-experiences.png" alt="immersive-experiences"/>
                        </div>
                    </div>

                    </>
                )
            }
            
        </section>
    );
}

export default BottomSection