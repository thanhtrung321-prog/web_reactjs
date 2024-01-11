import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Thành Trung",
    text: "Tôi rất hài lòng với sự đổi mới của .Shop.Shop  luôn cập nhật những xu hướng mới nhất, mang đến cho khách hàng những trải nghiệm tuyệt vời nhất. Tôi rất tin tưởng vào .Shop và tôi sẽ tiếp tục ủng hộ .Shop trong tương lai.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Khoa Nguyễn",
    text: "Tôi mới sử dụng dịch vụ của .Shop lần đầu tiên nhưng tôi đã rất ấn tượng. Dịch vụ rất nhanh chóng, tiện lợi, giá cả hợp lý. Tôi sẽ giới thiệu .Shop cho bạn bè và người thân của mình.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Tiến Dũng",
    text: "Tôi đã sử dụng dịch vụ/sản phẩm của .shop trong nhiều năm nay và tôi luôn rất hài lòng. Dịch vụ/sản phẩm luôn đáp ứng được nhu cầu của tôi, nhân viên luôn sẵn sàng hỗ trợ khi tôi cần. Tôi rất tin tưởng .Shop.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Quốc Duy",
    text: "Tôi đã sử dụng dịch vụ/sản phẩm của .Shop trong nhiều năm nay và tôi luôn rất hài lòng. Dịch vụ/sản phẩm luôn đáp ứng được nhu cầu của tôi, nhân viên luôn sẵn sàng hỗ trợ khi tôi cần. Tôi rất tin tưởng [.Shop].",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Điều mà khách hàng của chúng tôi nói
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Cảm nhận của khách hàng
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Chúng tôi rất tự hào khi nhận được những phản hồi tích cực từ khách
            hàng của mình. Dưới đây là một số lời chia sẻ của họ:
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 ">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 line-clamp-2 hover:line-clamp-none cursor-pointer">
                        {data.text}
                      </p>
                      <h1 className="text-xl sm:text-2xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
