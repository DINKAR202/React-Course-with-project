import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Link href="/">
          <img src="/logo.png" className="h-12 cursor-pointer" alt="" />
        </Link>
        <div>
            <Link href='/' className="hidden sm:block">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
