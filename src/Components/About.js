import "./About.css"
const About = (props) => {
    return (
        <section id="about">
            <div className="aboutHeading content">
                <p className="shapeConvert">
                    About <br />
                    Me
                </p>
            </div>
            <div className="aboutContent">
                <div className="content">
                    <p>
                        I am a Full Stack Web Developer hence I know front-end
                        technologies like HTML, CSS, JS, Bootstrap and
                        Server-side technologies like Node.js, Express, EJS,
                        Mongo, Mongoose, Authentication, Authorization, Routing,
                        SQL. I also have a Good Understanding of Reactjs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
