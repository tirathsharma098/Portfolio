import "./Footer.css";
const Footer = (props) => {
    const onVisitedLink = event => {
        event.target.classList.add('social-icon-link-visited');
    }
    return (
        <footer>
            <div className="upperOne">
                <div className="contactMe">
                    <div>Feel Free to Contact Me</div>
                    <div className="platform">
                        <div className="platform1 platformItem">
                            <a
                                className={["social-icon-link"]}
                                href="https://t.me/sharma00098"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onVisitedLink}
                            >
                                <img src="logos/telegramLogo.svg" alt="" />
                            </a>
                        </div>
                        <div className="platform2 platformItem">
                            <a
                                className={["social-icon-link"]}
                                href="https://github.com/tirathsharma098"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onVisitedLink}
                                
                            >
                                <img src="logos/githubLogo2.svg" alt="" />
                            </a>
                        </div>
                        <div className="platform3 platformItem">
                            <a
                                className={["social-icon-link"]}
                                href="https://www.hackerrank.com/tirathsharma098"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onVisitedLink}
                            >
                                <img src="logos/hackerrank.svg" alt="" />
                            </a>
                        </div>
                        <div className="platform4 platformItem">
                            <a
                                className={["social-icon-link"]}
                                href="http://www.twitter.com/tirathsharma098"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onVisitedLink}
                            >
                                <img src="logos/twitter.svg" alt="" />
                            </a>
                        </div>
                        <div className="platform5 platformItem">
                            <a
                                className={["social-icon-link"]}
                                href="https://www.linkedin.com/in/tirathsharma/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onVisitedLink}
                            >
                                <img src="logos/linkedin.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="email">
                        Leave mail:&nbsp;
                        <a
                            className={["social-icon-link"]}
                            href="mailto:tirathsharma098@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onVisitedLink}
                        >
                            tirathsharma098@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="bottomOne">
                <div className="bottomCopyright">
                    <div>
                        All Right Reserved by Tirath Sharma &copy; Copyright Act
                        <span id="currentYear">
                            {" "}
                            {new Date().getFullYear()}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
