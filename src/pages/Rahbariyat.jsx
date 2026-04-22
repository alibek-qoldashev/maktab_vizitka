import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaMoon } from "react-icons/fa";
import Footer from "../components/Footer";

// Propslarni qabul qilishni unutmaymiz
const Rahbariyat = ({ isDark, setIsDark }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const vicedirectors = [
    {
      id: 1,
      name: "LOLA MIRALIMOVA",
      role: "MAKTAB DIREKTORI",
      img: "https://via.placeholder.com/300x400?text=DIREKTOR",
    },
    {
      id: 2,
      name: "BOYNAZAROVA GULNOZA",
      role: "DIREKTOR O'RINBOSARI",
      img: "https://via.placeholder.com/300x400?text=ZAM+DIREKTOR",
    },
    {
      id: 3,
      name: "SOHIBA JUMANOVA",
      role: "DIREKTOR O'RINBOSARI",
      img: "https://via.placeholder.com/300x400?text=ZAM+DIREKTOR",
    },
    {
      id: 4,
      name: "XOLMATOVA FAZILAT",
      role: "DIREKTOR O'RINBOSARI",
      img: "https://via.placeholder.com/300x400?text=ZAM+DIREKTOR",
    },
    {
      id: 5,
      name: "LOLA MIRALIMOVA",
      role: "MAKTAB DIREKTORI",
      img: "https://via.placeholder.com/300x400?text=DIREKTOR",
    },
  ];

  return (
    <div className="w-full space-y-8 overflow-x-hidden">
      {/* SEARCH BAR SECTION */}
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
          Rahbariyat
        </h1>
      </div>

      {/* LEADERSHIP GRID */}
      <section className="py-10 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-8">
          {vicedirectors.map((person, i) => (
            <div
              key={person.id}
              className="flex flex-col items-center text-center space-y-4 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image Container */}
              <div
                className="w-full aspect-[3/4] rounded-[20px] overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                }}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${isDark ? "opacity-90 grayscale-0" : "grayscale hover:grayscale-0"}`}
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <h3
                  className="text-[11px] md:text-[13px] font-black uppercase tracking-tight leading-tight"
                  style={{ color: "var(--text-color)" }}
                >
                  {person.role}
                </h3>
                <p
                  className="text-[10px] md:text-[12px] font-bold uppercase tracking-tighter"
                  style={{ color: "var(--text-color)", opacity: 0.7 }}
                >
                  {person.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div data-aos="fade-in">
        <Footer isDark={isDark} />
      </div>
    </div>
  );
};

export default Rahbariyat;
