
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import hashnode from "../../assets/icons/hashnode.svg";
import medium from "../../assets/icons/medium.svg";
import Icon from "../icon";


const Footer = () => {
    return (
        <footer class="  " >
            <div class="flex py-6 lg:py-0 lg:mt-5 items-center justify-center">
                <Icon
                    frame=" w-8 h-8 flex justify-center items-center mx-2"
                    src={github}
                    alt="instagram icon"
                    iconClass="w-6 h-6 "
                />
                <Icon
                    frame=" w-8 h-8 flex justify-center items-center mx-2"
                    src={linkedin}
                    alt="instagram icon"
                    iconClass="w-6 h-6 "
                />
                <Icon
                    frame=" w-8 h-8 flex justify-center items-center mx-2"
                    src={hashnode}
                    alt="instagram icon"
                    iconClass="w-6 h-6"

                />
                <Icon
                    frame="w-8 h-8 flex justify-center items-center mx-2"
                    src={medium}
                    alt="instagram icon"
                    iconClass="w-6 h-6 "
                />
                <Icon
                    frame=" w-8 h-8 flex justify-center items-center mx-2"
                    src={twitter}
                    alt="instagram icon"
                    iconClass="w-6 h-6 "
                />
            </div>
            <div class="flex justify-center mt-4 mb-2 font-semibold">
                @Copyright 2022 Diseyi Philomena
            </div>
        </footer>
    )
}

export default Footer
