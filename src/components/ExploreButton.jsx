import styles from './ExploreButton.module.css';


function ExploreButton({value, fontSize, setShowExplore}){
    return (
        <button className={styles.container} onClick={()=>{ setShowExplore && setShowExplore(true)}}>
            {value}
        </button>
    );
}

export default ExploreButton;