import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaMoon } from "react-icons/fa";
import Footer from "../components/Footer";
import ser from "../assets/ser.jpg";

const Natijalarimiz = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const resultsData = [
    {
      id: 1,
      examType: "IELTS 7.0",
      studentName: "BEGMATOVA E'ZOZA",
      age: "16 Yosh",
      class: "9-“F”",
      year: "2025-YIL",
      subject: "Ingliz Tili",
      certificateImg: ser,
    },
    {
      id: 2,
      examType: "CEFR B2",
      studentName: "SULAYMANOV OZODBEK",
      age: "16 Yosh",
      class: "9-“F”",
      year: "2023-YIL",
      subject: "Ingliz Tili",
      certificateImg: ser,
    },
    {
      id: 3,
      examType: "CEFR B2",
      studentName: "MAHAMADIYEV BILOLBEK",
      age: "16 Yosh",
      class: "9-“F”",
      year: "2026-YIL",
      subject: "Ingliz Tili",
      certificateImg: ser,
    },
  ];

  return (
    <div className="w-full space-y-8 overflow-x-hidden">
      {/* TOP BAR */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
        data-aos="fade-down"
      >
        <div className="relative w-full sm:max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
          <input
            type="text"
            placeholder="qidiruv..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white shadow-sm border border-gray-100 focus:border-blue-300 focus:outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 bg-white px-6 py-2.5 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700 text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all">
          Tungi rejim <FaMoon className="text-blue-600" />
        </button>
      </div>

      {/* PAGE TITLE */}
      <div className="border-b border-gray-100 pb-4" data-aos="fade-right">
        <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-widest">
          Natijalarimiz
        </h1>
      </div>

      {/* RESULTS LIST */}
      <section className="space-y-16 py-8">
        {resultsData.map((result, index) => (
          <div
            key={result.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-50 pb-16 last:border-0"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* TEXT INFO */}
            <div className="space-y-4 order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
                {result.examType}
              </h2>
              <div className="space-y-1">
                <p className="text-sm md:text-lg font-bold text-gray-800 uppercase">
                  {result.studentName}
                </p>
                <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase">
                  {result.age}
                </p>
                <p className="text-xs md:text-sm font-semibold text-gray-500">
                  {result.class}
                </p>
                <p className="text-xs md:text-sm font-semibold text-gray-500">
                  {result.year}
                </p>
                <p className="text-xs md:text-sm font-semibold text-gray-500">
                  {result.subject}
                </p>
              </div>
            </div>

            {/* CERTIFICATE IMAGE */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative group w-full max-w-[350px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={result.certificateImg}
                  alt={result.examType}
                  className="relative rounded-lg shadow-2xl w-full h-auto object-cover border border-gray-100"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Natijalarimiz;
