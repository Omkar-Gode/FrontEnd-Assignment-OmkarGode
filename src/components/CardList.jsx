
import styles from "./CardList.module.css";
import ProductCard from "./ProductCard";

function CardList(){
    return (
        <div className={styles.container}>
            <ProductCard imgPath="products/htc-vive.png" title="HTC VIVE"/>
            <ProductCard imgPath="products/htc-vive-pro.png" title="HTC VIVE Pro"/>
            <ProductCard imgPath="products/oculus-rift.png" title="Oculus Rift"/>
            <ProductCard imgPath="products/playstation-vr.png" title="Playstation VR"/>
            <ProductCard imgPath="products/samsung-vr.png" title="Samsung VR"/>
            <ProductCard imgPath="products/htc-vive-cosmic-vr.png" title="HTC Vive Cosmic VR"/>
            <ProductCard imgPath="products/hp-vr.png" title="HP VR"/>
        </div>
    );
}


export default CardList;