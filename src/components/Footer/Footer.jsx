import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaGit } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Trang chủ",
    link: "/#",
  },
  {
    title: "Giới Thiệu",
    link: "/#about",
  },
  {
    title: "Liên Hệ",
    link: "/#contact",
  },
  {
    title: "Sản Phẩm/Dịch Vụ",
    link: "/#blog",
  },
  {
    title: "Hỗ trợ khách hàng",
    link: "/#suport",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[80px]" />
            </h1>
            <p className="text-xl dark:text-white">
              Hân hạnh phục vụ khách hàng ,vì bạn là niềm vui của .shop,cảm ơn
              bạn vì thời gian qua....
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Liên kết quan trọng
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Thông tin chủ Shop:</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+0379263053</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <MdEmail />
                  <p>Thanhtrung@gmail.com</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaGit />
                  <p>
                    <a
                      className=" line-clamp-1 hover:line-clamp-none dark:text-red-500"
                      href="https://github.com/thanhtrung321-prog/web_reactjs"
                    >
                      https://github.com/thanhtrung321-prog/web_reactjs
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <CiInstagram />
                  <p>
                    <a className="dark:text-yellow-400 " href="">
                      Võ Thành Trung
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
