import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logobaohanh from "../../assets/logo_baohanh/OIG4.R_U15M.jpg";
import dieukienbaohanh from "../../assets/logo_baohanh/logodieukienbaohanh.jpg";
import phucvu from "../../assets/logo_baohanh/OIG4.jpg";
import luuymuahang from "../../assets/logo_baohanh/luuymuahang.jpg";

const Introduce = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const shirt = [
    {
      img: logobaohanh,
      warrantypolicy: "Thời gian bảo hành:",
      title:
        "Shop bán quần áo của chúng tôi bảo hành sản phẩm trong vòng 7 ngày kể từ ngày mua hàng. <br/> Một số sản phẩm đặc biệt có thể có thời gian bảo hành khác, vui lòng liên hệ shop để biết thêm chi tiết.",
    },
    {
      img: dieukienbaohanh,
      warrantypolicy: "Điều kiện bảo hành:",
      title:
        "Sản phẩm còn nguyên tem mác, nguyên vẹn, không bị rách, trầy xước, sờn màu, phai màu. <br/> Sản phẩm không bị lỗi do người sử dụng như giặt sai cách, phơi sai cách, sử dụng hóa chất tẩy rửa mạnh. <br/> Có hóa đơn mua hàng hoặc phiếu bảo hành.",
    },
    {
      img: phucvu,
      warrantypolicy: "Cách phục vụ khách hàng:",
      title:
        "Shop bán quần áo của chúng tôi luôn cam kết phục vụ khách hàng một cách tốt nhất. <br/> Nhân viên của shop luôn niềm nở, nhiệt tình, sẵn sàng tư vấn cho khách hàng lựa chọn sản phẩm phù hợp. <br/> Shop có nhiều chương trình khuyến mãi hấp dẫn dành cho khách hàng. <br/> Shop luôn lắng nghe phản hồi của khách hàng để cải thiện chất lượng sản phẩm và dịch vụ.",
    },
    {
      img: luuymuahang,
      warrantypolicy: "Những lưu ý khi mua hàng tại shop:",
      title:
        "Khách hàng nên đọc kỹ thông tin sản phẩm trước khi mua hàng.Khách hàng nên kiểm tra kỹ sản phẩm trước khi thanh toán.Khách hàng nên giữ lại hóa đơn mua hàng hoặc phiếu bảo hành để được bảo hành sản phẩm.",
    },
  ];

  return (
    <div data-aos="fade-in">
      <div className="grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2">
        {shirt.map((element, index) => (
          <div
            key={index}
            data-aos="fade-right"
            className="flex flex-col items-center mt-8"
          >
            {" "}
            <img
              className="rounded-full w-60 h-60 md:w-80 md:h-80"
              src={element.img}
              alt=""
              loading="lazy" // Thêm thuộc tính loading="lazy" để sử dụng lazy loading
            />
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold mt-4">
                {element.warrantypolicy}
              </h2>
              <p
                className="text-sm md:text-base mt-2"
                dangerouslySetInnerHTML={{ __html: element.title }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduce;
