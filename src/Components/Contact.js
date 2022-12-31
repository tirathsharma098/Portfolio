import "./Contact.css";
const Contact = (props) => {
    const onContactSubmitHandler = (event) => {
        event.preventDefault();
        window.alert(
            "Ohhh Oooo! Have't added Backend Right now Hence This form does't Work.\n ):"
        );
    };
    return (
        <form
            action="#"
            method="post"
            id="contactForm"
            onSubmit={onContactSubmitHandler}
        >
            <div className="formPara formItem">
                <p>
                    I like to work for any company where I can use My Skills. My
                    life aim is to enhance my web Development skills and
                    experince and utilise them for Development and Growth of the
                    Company I work for.
                    <span>Hire Me or Connect with Me.</span>
                </p>
            </div>
            <div className="mainForm formItem">
                <div>
                    <div className="formHeading">
                        <h2>Get In Touch / Hire Me</h2>
                    </div>
                    <div className="name">
                        <label htmlFor="name"> Person/Company Name : </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email : </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Contact Number : </label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="Contact/Phone"
                        />
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message : </label>
                        <textarea
                            name="message"
                            id="message"
                            cols="25"
                            rows="6"
                            placeholder="Leave message..."
                            maxLength="400"
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default Contact;
