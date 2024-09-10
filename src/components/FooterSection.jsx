import { useState } from "react";
import styles from "./FooterSection.module.css";

function FooterSection(){

    const [formDetails, setFormDetails] = useState({email:"", check1:false, check2:false});
    const [errors, setErrors] = useState({email:false, check1:false, success:false});

    function handleSubmit(e){
        e.preventDefault();
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        const valid = regex.test(formDetails.email);
        if (!valid){
            setErrors( state => { return {...errors, email:true, check1:false, success:false}});
            console.log("invalid email");
            return;
        }
        if (!formDetails.check1){
            setErrors( state => { return {...errors, check1:true, email:false, success:false}});
            console.log("not checked");
            return;
        }
        setErrors( state => { return {...errors, email:false, check1:false, success:true}});
        console.log("success");
    }

    return (
    <section className={styles.container}>
        <div className={styles.mainDiv}>
            <div className={styles.formDiv}>
                <h3>MAILING LIST</h3>
                <p>Sign up to the mailing list and stay updated on the latest posts and offers</p>


                <input type="text" placeholder="Email ID" onChange={(e) => setFormDetails( state => { return {...state, email:e.target.value}})}/>

                
                <div className={styles.checkboxDiv}>
                        <input type="checkbox" className={styles.checkbox} value="mandatory" onChange={(e)=>{ setFormDetails( state => { 
                            console.log(e.target.checked);
                            return {...state, check1:e.target.checked}});
                         }}/>

                        {/* <div className={styles.checkbox}>
                            <p>&#10004;</p>
                        </div> */}
                        <div className={styles.checkValue}>
                            <h4>I agree to receive emails</h4>
                            <p>I agree to receive updates, promotions, and relevant content via email.</p>
                        </div>
                </div>
                <div className={styles.checkboxDiv}>
                        <input type="checkbox" className={styles.checkbox} value="optional"/>
                        {/* <div className={styles.checkbox}></div> */}
                        <div className={styles.checkValue}>
                            <h4>I allow sharing with third-party partners</h4>
                            <p style={{fontStyle:"italic"}}>(Optional)</p>
                            <p>I consent to my email being shared with selected partners for offers and promotions.</p>
                            {
                                errors.email && (<p style={{color:'orange', marginTop:'4px'}}>Email is Invalid</p>)
                            }
                            {
                                errors.check1 && (<p style={{color:'orange', marginTop:'4px'}}>checkbox not checked</p>)
                            }
                            {
                                errors.success && (<p style={{color:'lightgreen', marginTop:'4px'}}>Successful</p>)
                            }
                        </div>
                </div>

    

                <button className={styles.submitButton} onClick={(e) => { handleSubmit(e)} }>SUBMIT &#10230;</button>
                
            </div>

            <div className={styles.breakline}></div>
            <div className={styles.verticalLine}></div>
                
            <div className={styles.aboutDiv}>
                <div className={styles.avatar}>
                    <img src="jonather-vader-profile.png" alt="jonather-vader-profile"/>
                </div>
                <h4>Jonathan Vader</h4>
                <p>Hello, EquiTek is a personal blog created by me for tech enthusiasts and people looking to buy the latest Tech. I am a VR Games Developer who loves to create immersive experiences. You can visit my personal website to see my work</p>
                <div className={styles.knowMore}>
                    <p>Know more</p>
                    <div>&#10230;</div>
                </div>
            </div>

            <div className={styles.breakline}></div>

        </div>

        <img className={styles.logoDiv} src="logo-white.svg" alt="logo-white"/>
    </section>
    );
}


export default FooterSection;