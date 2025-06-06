import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black '>
        <div className='px-10 mx-auto w-full   flex flex-col items-center justify-between  gap-4  md:flex-row ' >
            <p className='text-center text-sm md:text-left' > &copy; Nova 24. All rights reserved</p>
            <div className='flex justify-center gap-4 md:justify-start '>
                {socialLinks.map((link,index)=>(
                    <a target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white" key={index} href={link.href}>{link.icon}</a>
                ))}
            </div>
            <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right ">
                Privacy Policy
            </a>
        </div>

    </footer>
  )
}

export default Footer