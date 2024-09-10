import styles from "./InfoCard.module.css";

function InfoCard({src, title, description, iconBackground, iconShadow}){
    return (
        <div className={styles.card}>
            <div className={styles.icon} style={{backgroundColor:iconBackground, boxShadow:`3px 4px 4px ${iconShadow}` }}>
                <img src={src} alt="icon_info"/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default InfoCard;