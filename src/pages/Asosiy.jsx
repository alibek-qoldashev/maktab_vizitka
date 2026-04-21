import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Rasm1 from "../assets/mk_pic.jpeg";
import AOS from "aos";
import {
  FaGraduationCap,
  FaAward,
  FaUniversity,
  FaUsers,
  FaLaptopCode,
  FaMicroscope,
  FaCalculator,
  FaBook,
  FaBriefcase,
  FaTools,
  FaSearch,
  FaMoon,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

const Asosiy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const yonalishlar = [
    {
      title: "Biznes va Menejment",
      icon: <FaBriefcase />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Kasbiy fan",
      icon: <FaTools />,
      color: "bg-blue-200 text-blue-700",
    },
    {
      title: "Robototexnika",
      icon: <FaLaptopCode />,
      color: "bg-cyan-100 text-cyan-600",
    },
    { title: "Ona tili", icon: <FaBook />, color: "bg-blue-100 text-blue-500" },
    {
      title: "Matematika",
      icon: <FaCalculator />,
      color: "bg-blue-50 text-blue-400",
    },
    {
      title: "Kimyo",
      icon: <FaMicroscope />,
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  // ... (images va yonalishlar arraylari o'zgarishsiz qoladi)

  return (
    // overflow-x-hidden - bu sahifani o'ngga surilib ketishidan saqlaydi
    <div className="w-full max-w-full overflow-x-hidden space-y-6 md:space-y-12">
      {/* TOP BAR */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-4 px-2"
        data-aos="fade-down"
      >
        <div className="relative w-full md:max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
          <input
            type="text"
            placeholder="Qidiruv..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gray-100 shadow-sm focus:outline-none"
          />
        </div>
        <button className="hidden md:flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 text-xs font-bold uppercase tracking-widest">
          Tungi rejim <FaMoon className="text-blue-600" />
        </button>
      </div>

      {/* CAROUSEL */}
      <div
        className="mx-2 rounded-[20px] md:rounded-[40px] overflow-hidden shadow-xl"
        data-aos="zoom-in"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          // width: 100% va max-width ni qat'iy belgilaymiz
          className="h-48 sm:h-72 md:h-[500px] w-full"
          style={{ width: "100%" }}
        >
          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src={Rasm1}
                alt="Maktab hayoti"
                className="w-full h-full object-cover select-none"
                // Rasm chetdan chiqib ketmasligi uchun:
                style={{ minWidth: "100%" }}
              />
            </div>
          </SwiperSlide>

         
        </Swiper>
      </div>

      {/* YO'NALISHLAR */}
      <section className="px-2">
        <h2 className="text-center text-lg md:text-xl font-black mb-8 uppercase tracking-widest text-gray-800">
          Maktabdagi yo'nalishlar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {yonalishlar.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="flex items-center p-5 bg-white rounded-[20px] shadow-sm border border-gray-50
                         hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all cursor-pointer group"
            >
              <div
                className={`p-4 rounded-2xl text-2xl mr-5 transition-transform group-hover:scale-110 ${item.color}`}
              >
                {item.icon}
              </div>
              <span className="font-black text-gray-800 text-xs sm:text-sm uppercase tracking-wider">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>
      <h2
        className="text-center text-lg sm:text-xl font-black mb-8 uppercase tracking-[0.2em] text-gray-800"
        data-aos="fade-up"
      >
        Maktab statistikasi
      </h2>
      {/* STATISTIKA - BU YERDA WIDTH MUAMMOSI KO'P BO'LADI */}
      <section className="px-2">
        <div
          className="bg-blue-600 rounded-[30px] md:rounded-[50px] p-8 md:p-16 text-white 
                        grid grid-cols-2 lg:grid-cols-4 gap-8 shadow-2xl relative overflow-hidden"
        >
          {/* StatItem komponentlari */}
          <StatItem
            icon={<FaGraduationCap />}
            count="3000+"
            label="Maktabni bitirganlar"
          />
          <StatItem
            icon={<FaAward />}
            count="100+"
            label="Qizil diplom egalari"
          />
          <StatItem
            icon={<FaUniversity />}
            count="50+"
            label="Top universitetlar"
          />
          <StatItem icon={<FaUsers />} count="3000+" label="O'quvchilar soni" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

// StatItem ichidagi ikonkalarni o'lchamini chegaralash
const StatItem = ({ icon, count, label }) => (
  <div className="flex flex-col items-center text-center gap-2">
    <div className="text-3xl md:text-5xl mb-2">{icon}</div>
    <span className="text-xl md:text-4xl font-black">{count}</span>
    <p className="text-[10px] md:text-xs uppercase font-bold tracking-tighter opacity-80 max-w-[120px]">
      {label}
    </p>
  </div>
);

export default Asosiy;
