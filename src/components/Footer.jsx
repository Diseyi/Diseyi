import React from 'react';
import instagram from "../assets/instagram-b.svg";
import twitter from "../assets/twitter-b.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/GitHub-Mark-32px.png";


const Footer = () => {
    return (
        <footer className="text-center text-3xl flex justify-center mt-5 items-center " >
           <a href='https://www.instagram.com/diseyi_/' target="_blank" rel="noreferrer" >
            <img src={instagram} alt="instagram icon" className="m-0 p-5 " />
            </a> 

            <a href='https://github.com/Diseyi' target="_blank" rel="noreferrer" >
            <img src={twitter} alt="linkedin icon" className="m-0 p-5  " />
            </a> 

            <a href='linkedin.com/in/diseyi-philomena/' target="_blank" rel="noreferrer" >
            <img src={linkedin} alt="twitter icon" className="m-0 p-5  " />
            </a> 

            <a href='https://github.com/Diseyi' target="_blank" rel="noreferrer" >
            <img src={github} alt="github icon" className="m-0 p-5 w-4/5 "  />
            </a> 
           

            </footer>
    )
}

export default Footer
