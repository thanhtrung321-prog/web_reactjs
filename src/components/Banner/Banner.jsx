import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          {/* của thư viện data-aos (reactjs) */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="#"
              className="max-w-[400px] h-[350px]
             w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0.1)]
              object-cover hover:scale-95 cursor-pointer"
            />
          </div>
          {/* text detail section */}
          <div
            data-aos="zoom-in"
            className="flex flex-col justify-center gap-6 sm:pt-0"
          >
            <h1 className="text-3xl sm:text-4xl font-bold">
              Giảm giá mùa đông lên tới 50%
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Trong chương trình giảm giá này, chúng tôi mang đến cho bạn hàng
              ngàn sản phẩm thời trang với mức giá ưu đãi cực hấp dẫn. Từ áo
              khoác, áo len, quần áo ấm cho đến phụ kiện thời trang, tất cả đều
              được giảm giá lên tới 50%.
            </p>
            <div>
              <div className="flex items-center gap-4">
                {/* icons */}
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100" />
                <p>Chất lượng sản phẩm :</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
