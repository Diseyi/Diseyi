import React from 'react';
import instagram from "../assets/instagram-b.svg";
import twitter from "../assets/twitter-b.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/GitHub-Mark-32px.png";


const Footer = () => {
    return (
        <footer className="text-center text-3xl flex justify-center mt-5 " >
            <img src={instagram} alt="instagram icon" className="m-0 p-5 " />
            <img src={twitter} alt="linkedin icon" className="m-0 p-5  " />
            <img src={linkedin} alt="twitter icon" className="m-0 p-5  " />
            <img src={github} alt="github icon" className="m-0 p-5  "  />
            </footer>
    )
}

export default Footer
