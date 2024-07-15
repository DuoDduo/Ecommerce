import Link from "next/link";

import Container from "../Container";
import FooterList from "./footerlist";
import {MdFacebook} from "react-icons/md"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"

const Footer = () => {
    return ( <footer className="bg-slate-900 text-slate-200 text-sm mt-16">
        <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
            <h3 className="font-bold text-base mb-2">
                About Us
            </h3>
            <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dolore ullam natus molestias aut nemo. Dolores magnam nostrum sequi animi? Mollitia quas fugit, ratione nobis quasi tenetur nam iure recusandae?</p>
            <p>&copy; {new Date().getFullYear()} MLJAY. All rights reserved</p>
          
            </div>
            <FooterList>
            <h3 className="font-bold text-base mb-2">
                Categories
            </h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
            </FooterList>
            <FooterList>
            <h3 className="font-bold text-base mb-2">
                Services
            </h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns</Link>
            <Link href="#">FAQ's</Link>
            
            </FooterList>
           
            <FooterList>
                <h3 className="font-bold text-base mb-2"> Social Media</h3>
            <div className="flex gap-2">
            <Link href="#"><MdFacebook size={24}/></Link>
            <Link href="#"><AiFillTwitterCircle size={24}/></Link>
            <Link href="#"><AiFillInstagram size={24}/></Link>
            <Link href="#"><AiFillYoutube size={24}/></Link>

            </div>
            </FooterList>
            </div> 
        </Container> 
        </footer>
      );
};
 
export default Footer;