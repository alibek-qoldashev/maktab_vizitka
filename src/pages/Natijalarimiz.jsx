import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaMoon } from "react-icons/fa";
import Footer from "../components/Footer";
import ser from "../assets/ser.jpg";

const Natijalarimiz = ({ isDark, setIsDark }) => {
  // isDark va setIsDark propslari qo'shildi
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
    <div className="w-full space-y-8 overflow-x-hidden min-h-screen transition-all duration-300">
      {/* TOP BAR */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2"
        data-aos="fade-down"
      >
        <div className="relative w-full sm:max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
          <input
            type="text"
            placeholder="qidiruv..."
            className="w-full pl-12 pr-4 py-3 rounded-full shadow-sm focus:outline-none transition-all"
            style={{
              backgroundColor: "var(--bg-card)",
              color: "var(--text-color)",
              border: "1px solid var(--border-color)",
            }}
          />
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl shadow-sm border font-bold text-[10px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "var(--bg-card)",
            color: "var(--text-color)",
            borderColor: "var(--border-color)",
          }}
        >
          {isDark ? "Kunduzgi rejim" : "Tungi rejim"}
          <FaMoon className={isDark ? "text-yellow-400" : "text-blue-600"} />
        </button>
      </div>

      {/* PAGE TITLE */}
      <div
        className="pb-4 px-2"
        style={{ borderBottom: "1px solid var(--border-color)" }}
        data-aos="fade-right"
      >
        <h1
          className="text-xl md:text-2xl font-black uppercase tracking-widest"
          style={{ color: "var(--text-color)" }}
        >
          Natijalarimiz
        </h1>
      </div>

      {/* RESULTS LIST */}
      <section className="space-y-16 py-8 px-2">
        {resultsData.map((result, index) => (
          <div
            key={result.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-16 last:border-0"
            style={{
              borderBottom:
                index !== resultsData.length - 1
                  ? "1px solid var(--border-color)"
                  : "none",
            }}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* TEXT INFO */}
            <div className="space-y-4 order-2 md:order-1">
              <h2
                className="text-2xl md:text-4xl font-black tracking-tight"
                style={{ color: "var(--text-color)" }}
              >
                {result.examType}
              </h2>
              <div className="space-y-1">
                <p
                  className="text-sm md:text-lg font-bold uppercase"
                  style={{ color: "var(--text-color)" }}
                >
                  {result.studentName}
                </p>
                <div
                  className="text-xs md:text-sm font-semibold uppercase space-y-1"
                  style={{ color: "var(--text-color)", opacity: 0.6 }}
                >
                  <p>{result.age}</p>
                  <p>{result.class}</p>
                  <p>{result.year}</p>
                  <p>{result.subject}</p>
                </div>
              </div>
            </div>

            {/* CERTIFICATE IMAGE */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative group w-full max-w-[350px]">
                {/* Neon blur effekti qorong'u rejimda yanada sezilarli bo'ladi */}
                <div
                  className={`absolute -inset-1 rounded-lg blur transition duration-1000 group-hover:duration-200 
                  ${
                    isDark
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 group-hover:opacity-70"
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 opacity-25 group-hover:opacity-50"
                  }`}
                ></div>
                <img
                  src={result.certificateImg}
                  alt={result.examType}
                  className="relative rounded-lg shadow-2xl w-full h-auto object-cover border transition-all"
                  style={{ borderColor: "var(--border-color)" }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer isDark={isDark} />
    </div>
  );
};

export default Natijalarimiz;
