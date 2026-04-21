import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaMoon } from "react-icons/fa";
import Footer from "../components/Footer";

const Rahbariyat = () => {
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
      img: "https://via.placeholder.com/300x400?text=DIREKTOR", // Haqiqiy rasm yo'li qo'yiladi
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
          Rahbariyat
        </h1>
      </div>

      {/* LEADERSHIP GRID */}
      <section className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-8">
          {vicedirectors.map((person, i) => (
            <div
              key={person.id}
              className="flex flex-col items-center text-center space-y-4 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image Container */}
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-[20px] overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <h3 className="text-[11px] md:text-[13px] font-black text-gray-900 uppercase tracking-tight leading-tight">
                  {person.role}
                </h3>
                <p className="text-[10px] md:text-[12px] font-bold text-gray-600 uppercase tracking-tighter">
                  {person.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div data-aos="fade-in">
        <Footer />
      </div>
    </div>
  );
};

export default Rahbariyat;
