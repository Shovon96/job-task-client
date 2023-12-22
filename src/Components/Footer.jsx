import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <div>
                <div className="flex justify-evenly mt-5 items-center">
                    <img className="h-14 marker:md:h-20 w-auto" src="https://media.discordapp.net/attachments/1177886803424976896/1187250535628288070/logo.png?ex=65963439&is=6583bf39&hm=8b8deb55d58d4524e9a61c4225be0c0b9175c881ffdcf746d0793633b89a79a0&=&format=webp&quality=lossless" alt="" />
                    <div className="flex gap-6 text-2xl text-blue-600">
                        <a
                            className="font-bold pl-2"
                            href="https://github.com/Shovon96"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className="font-bold pl-2"
                            href="https://www.linkedin.com/in/fakhruddin-shovon-3a4b77252"
                            target="_blank"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            className="font-bold pl-2"
                            href="fakhruddinshovon@gmail.com"
                            target="_blank"
                        >
                            <IoMail />
                        </a>
                    </div>
                </div>
                <h1 className="flex justify-center items-center py-6">© 2023, All Rights Reserved. Designed & Created By{" "}
                    <a
                        className="font-bold text-lg pl-2"
                        href="https://fakruddin_portfolio.surge.sh/"
                        target="_blank"
                    >
                        Fakhruddin Ahmed.
                    </a>{" "}
                </h1>
            </div>
        </>
    );
};

export default Footer;