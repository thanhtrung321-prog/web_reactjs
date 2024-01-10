import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Giảm tới 70% cho tất cả trang phục nam",
    description:
      "Bạn đã sẵn sàng để làm mới tủ quần áo của mình chưa? Ưu đãi giảm giá cực lớn tới 50% cho tất cả trang phục nam đã chính thức đổ bộ. Đây là cơ hội tuyệt vời để sở hữu những item thời trang nam tính, sành điệu với mức giá không thể hấp dẫn hơn.",
  },
  {
    id: 2,
    img: Image2,
    title: "Đừng bỏ lỡ cơ hội !!!",
    description:
      "Cập nhật phong cách với những mẫu trang phục mới nhất: Từ áo thun cơ bản đến những set đồ công sở lịch lãm, từ quần jeans bụi bặm đến áo khoác bomber cá tính, tất cả đều đang chờ đón bạn với mức giá ưu đãi cực sốc.",
  },
  {
    id: 3,
    img: Image3,
    title: "Tại sao bạn nên tham gia cơn bão sale 70% của .Shop ?",
    description:
      "Thương hiệu uy tín, chất lượng đảm bảo: Các sản phẩm giảm giá đều đến từ những thương hiệu uy tín, mang đến sự thoải mái, bền đẹp và an toàn cho người mặc Tiết kiệm tối đa: Giảm giá 70% giúp bạn tiết kiệm đáng kể chi phí mua sắm, tha hồ shopping mà không lo:đau ví",
  },
];
const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden min-h-[650px] bg-gray-100 flex justify-center
    items-center dark:bg-gray-950 dark:text-white duration-200"
    >
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        {/* slider */}
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12
                 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      MUA NGAY
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* end slider */}
      </div>
    </div>
  );
};

export default Hero;
