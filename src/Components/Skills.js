import "./Skills.css";
const Skills = (props) => {
    return (
        <section id="skills">
            <div className="skillsContainer">
                <div className="skillsContent">
                    <div className="skillItem para3">
                        <h2 className="currently skillsTitle">
                            Tech Stack I am Familiar with
                        </h2>
                        <div className="currentlyItems allItem">
                            <div className="html">
                                <div className="icon">
                                    <img
                                        src="logos/html.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="name">HTML</div>
                            </div>
                            <div className="css">
                                <div className="icon">
                                    <img src="logos/css.svg" alt="" />
                                </div>
                                <div className="name">CSS</div>
                            </div>
                            <div className="js">
                                <div className="icon">
                                    <img src="logos/jsLogo.svg" alt="" />
                                </div>
                                <div className="name">JavaScript</div>
                            </div>
                            <div className="node">
                                <div className="icon">
                                    <img src="logos/nodejs.svg" alt="" />
                                </div>
                                <div className="name">Node.js</div>
                            </div>
                            <div className="express">
                                <div className="icon">
                                    <img src="logos/express.svg" alt="" />
                                </div>
                                <div className="name">Express</div>
                            </div>
                            <div className="mongo">
                                <div className="icon">
                                    <img src="logos/mongo.svg" alt="" />
                                </div>
                                <div className="name">MongoDB</div>
                            </div>
                            <div className="ejs">
                                <div className="icon">
                                    <img src="logos/ejs.svg" alt="" />
                                </div>
                                <div className="name">EJS</div>
                            </div>
                            <div className="sql">
                                <div className="icon">
                                    <img src="logos/mysqlLogo.svg" alt="" />
                                </div>
                                <div className="name">SQL</div>
                            </div>
                            <div className="react">
                                <div className="icon">
                                    <img src="logos/reactjs.svg" alt="" />
                                </div>
                                <div className="name">Reactjs</div>
                            </div>
                            <div className="git">
                                <div className="icon">
                                    <img src="logos/git.svg" alt="" />
                                </div>
                                <div className="name">Git</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skillsHeading">
                <h2 className="shapeConvert">
                    My
                    <br />
                    Skills
                </h2>
            </div>
        </section>
    );
};

export default Skills;
