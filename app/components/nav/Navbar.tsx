"use client"
// import Container from "../Container";
import Link from "next/link";
import CartCount from "../nav/CartCount";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import Container from "../Container";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`sticky top-0 w-full bg-slate-800 text-white z-30 shadow-md ${isLoaded ? 'navbar-animation' : ''}`}>
      <div className="py-4 border-b border-slate-300">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" legacyBehavior>
              <a className={`${roboto.className} text-white font-bold text-2xl logo-animation`}>MLJAY</a>
            </Link>
            <div className="hidden md:flex md:flex-1 md:justify-center search-animation">
              <div className="flex w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Explore..."
                  className="w-full px-4 py-2 rounded-l bg-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Search
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6 md:gap-12 cart-animation">
              <CartCount />
              <div className="hidden md:block">UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
