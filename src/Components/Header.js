import classes from "./Header.module.css"
const Header = (props) => {
    return (
        <header>
            <div className={classes["mainContainer"]}>
                <div className={classes["nameContainer"]}>
                    <h1 className={classes["myName"]} id="homePointLink">
                        Tirath Sharma,
                        <br />
                        <span className={classes["main-subheading"]}>
                            &nbsp;Let's Develop and Debug together
                        </span>
                    </h1>
                </div>
                <div className={classes["profileContainer"]}>
                    <img src={require("../assets/pics/TirathLessHair.jpg")} alt="Tirath Sharma" />
                </div>
            </div>
        </header>
    );
};

export default Header;
