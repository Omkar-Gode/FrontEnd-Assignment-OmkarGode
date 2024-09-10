
import ButtonComponent from "./ButtonComponent";
import styles from "./TopSection.module.css";

function TopSection(){
    return (
        <section className={styles.top}>
            <div className={styles.heading}>
                <h1>The Next Big Thing!</h1>
                <p>Join us in our journey to find out
                how the world of VR is evolving.</p>
            </div>

            <img className={styles.mainImg} src="topImg.svg" alt="vr_img"/>

            <div className={styles.arrowButtonDiv}>
                <img src="topArrow.svg" alt="vr_img" className={styles.downarrow}/>
                <ButtonComponent value="Know More" fontSize={1}/>
                <img src="leftArrow.svg" alt="vr_img" className={styles.leftarrow}/>
            </div>
        </section>

    );
}

export default TopSection