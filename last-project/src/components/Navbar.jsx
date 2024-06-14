import { FaSearch, FaShopify, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-16 py-4 bg-white font-main">
      <img
        src="https://millicanpecan.com/cdn/shop/files/Millican_Pecan_Logo_-_Website_Header_360x.png?v=1613525361"
        width={"230px"}
        alt="logo-website"
      />

      <div className="text-lg">
        <a
          className="mx-5 hover:text-[var(--main-color)] hover:underline transition-all duration-300"
          href=""
        >
          Pecans
        </a>
        <a
          className="mx-5 hover:text-[var(--main-color)] hover:underline transition-all duration-300"
          href=""
        >
          Contact Us
        </a>
        <a
          className="mx-5 hover:text-[var(--main-color)] hover:underline transition-all duration-300"
          href=""
        >
          Blog
        </a>
        <a
          className="mx-5 hover:text-[var(--main-color)] hover:underline transition-all duration-300"
          href=""
        >
          About Us
        </a>
        <a
          className="mx-5 hover:text-[var(--main-color)] hover:underline transition-all duration-300"
          href=""
        >
          More
        </a>
      </div>

      <div className="flex text-xl">
        <FaSearch className="mx-5 hover:text-[var(--main-color)] hover:underline transition-all duration-300 cursor-pointer" />
        <FaUser className="mx-5 hover:text-[var(--main-color)] hover:underline transition-all duration-300 cursor-pointer" />
        <FaShopify className="mx-5 hover:text-[var(--main-color)] hover:underline transition-all duration-300 cursor-pointer" />
      </div>
    </nav>
  );
}
