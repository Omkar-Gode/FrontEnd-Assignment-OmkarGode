import styles from './Navbar.module.css';


function Navbar(){
    return (
        <nav className={styles.navhead}>
            <div className={styles.logodiv}>
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 14.598L14.622 1L18.3541 4.72549L8.46412 14.598L14.622 20.7451L20.7799 14.598L23.9522 17.7647L17.2344 24.4706L25.445 32.6667L36.8278 21.3039L40 24.4706L25.445 39L1 14.598Z" stroke="#5200FF"/>
                    <path d="M39 5H15V10.1081H25.1538V33L26.4462 31.6757L29.4 28.6486V10.1081H39V5Z" stroke="#5200FF"/>
                </svg>
                <p>EquiTek</p>
            </div>

            <img className={styles.hamburgerMenu} src="hamburger-menu.svg" alt="hamburger-menu"/>

            <div className={styles.navbar}>
                    <div className={styles.tab}>
                        <p>Home</p>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.tab}>
                        <p>About us</p>
                        {/* <div className={styles.underline}></div> */}
                    </div>
                    <div className={styles.tab}>
                        <p>Products</p>
                        {/* <div className={styles.underline}></div> */}
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;