import React from 'react';
import instagram from "../assets/instagram-icon.png";
import twitter from "../assets/black-twitter.png";
import linkedin from "../assets/black-linkedin.png";
import github from "../assets/GitHub-Mark-32px.png";


const Footer = () => {
    return (
        <footer className="text-center text-3xl flex justify-center mt-20 pb-10 " >
            <img src={instagram} alt="instagram icon" className="m-0 p-5 " />
            <img src={twitter} alt="linkedin icon" className="m-0 p-5  " />
            <img src={linkedin} alt="twitter icon" className="m-0 p-5  " />
            <img src={github} alt="github icon" className="m-0 p-5  "  />
            </footer>
    )
}

export default Footer
