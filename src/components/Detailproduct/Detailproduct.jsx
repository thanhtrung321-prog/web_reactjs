import React, { useState } from "react";
import "aos/dist/aos.css";
import img1 from "../../assets/women/women.png";
import img2 from "../../assets/women/women2.jpg";
import img3 from "../../assets/women/women3.jpg";
import img4 from "../../assets/women/women4.jpg";

const images = [
  {
    img: img1,
    brand: "Áo Châu Âu",
    name: "áo nữ đẹp",
    title: "Áo Nữ",
    price: "$1000",
  },
  {
    img: img2,
    brand: "Áo Châu Âu",
    name: "áo nữ đẹp",
    title: "Áo Thể Thao Đa Dạng",
    price: "$1000",
  },
  {
    img: img3,
    brand: "Áo Châu Âu",
    name: "áo nữ đẹp",
    title: "Áo Phông Cổ Tròn Đơn Giản",
    price: "$1000",
  },
  {
    img: img4,
    brand: "Áo Châu Âu",
    name: "áo nữ đẹp",
    title: "Áo Len Sang Trọng",
    price: "$1000",
  },
];

const DetailProduct = () => {
  const [activeImg, setActiveImage] = useState(images[0]);
  const [amount, setAmount] = useState(1);

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <div
      data-aos="zoom-out"
      className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center"
    >
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg.img}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className=" flex flex-row justify-between h-24">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.img}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-violet-600 font-semibold">
            {activeImg.brand}
          </span>
          <h1 className="text-3xl font-bold">{activeImg.name}</h1>
        </div>
        <p className="text-gray-700">{activeImg.title}</p>
        <h6 className="text-2xl font-semibold">{activeImg.price}</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => Math.max(prev - 1, 0))}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full ">
            Mua Hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
