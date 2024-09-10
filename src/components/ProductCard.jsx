
import styles from "./ProductCard.module.css";

function ProductCard({imgPath, title}){
    return (
        <div className={styles.container}>
            <img src={imgPath} alt="htc-vive"/>
            <h3>{title}</h3>
            <div>
                <p>Learn more</p>
                <img src="right-arrow-head.svg" alt="right-arrow-head.svg"/>
            </div>
        </div>
    );
}

export default ProductCard;