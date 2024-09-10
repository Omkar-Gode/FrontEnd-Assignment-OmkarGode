import styles from './ButtonComponent.module.css';


function ButtonComponent({value, fontSize, setShowExplore}){
    return (
        <button className={styles.container} onClick={()=>{ setShowExplore && setShowExplore(true)}}>
            {value}
        </button>
    );
}

export default ButtonComponent;

{/* <button className={styles.container} style={{fontSize:`${fontSize}rem`, padding:`${fontSize*0.6}rem ${fontSize*2}rem`}} 
onClick={()=>{ setShowExplore && setShowExplore(true)}}        
>
{value}
</button> */}