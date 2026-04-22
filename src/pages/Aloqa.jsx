import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaSearch,
  FaMoon,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import Footer from "../components/Footer";

const Aloqa = ({ isDark, setIsDark }) => {
  // isDark va setIsDark propslari qo'shildi
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const contactDetails = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      title: "MANZILIMIZ",
      info: "100034 TOSHKENT, YANGIHAYOT TUMANI, YANGIHAYOT-2 MAVZESI",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "ELEKTRON POCHTA",
      info: "MAKTAB332@GMAIL.COM",
    },
    {
      id: 3,
      icon: <FaPhoneAlt />,
      title: "ALOQA",
      info: "+998123456789",
    },
  ];

  return (
    <div className="w-full space-y-8 overflow-x-hidden">
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
          Aloqa
        </h1>
      </div>

      {/* CONTACT CONTENT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-6 px-2">
        {/* LEFT COLUMN: CONTACT CARDS & SOCIALS */}
        <div className="space-y-6" data-aos="fade-right">
          <div className="space-y-4">
            {contactDetails.map((item) => (
              <div
                key={item.id}
                className="flex items-center rounded-2xl border-l-4 border-blue-600 p-6 shadow-sm hover:shadow-md transition-all"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "blue-600", // Chap tarafdagi ko'k chiziq qoladi
                }}
              >
                <div
                  className="text-2xl mr-6"
                  style={{ color: "var(--text-color)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="text-[11px] font-black tracking-widest uppercase"
                    style={{ color: "var(--text-color)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[10px] font-bold uppercase mt-1 leading-tight"
                    style={{ color: "var(--text-color)", opacity: 0.6 }}
                  >
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SOCIAL MEDIA BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button className="flex items-center gap-2 bg-[#4489F4] text-white px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-opacity">
              <FaTelegramPlane size={14} /> Telegram
            </button>
            <button className="flex items-center gap-2 bg-[#E1306C] text-white px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-opacity">
              <FaInstagram size={14} /> Instagram
            </button>
            <button className="flex items-center gap-2 bg-[#55ACEE] text-white px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-opacity">
              <FaFacebookF size={14} /> Facebook
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: MAP */}
        <div
          className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 transition-all"
          style={{ borderColor: "var(--bg-card)" }} // MacBook dizayniga mos border
          data-aos="fade-left"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000!2d69.2!3d41.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDEyJzAwLjAiTiA2OcKwMTInMDAuMCJF!5e0!3m2!1suz!2s!4v123456789" // Test uchun to'g'ri link
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: isDark ? "invert(90%) hue-rotate(180deg)" : "none",
            }} // Qorong'u rejimda xaritani ham qoraytirish
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </section>

      <Footer isDark={isDark} />
    </div>
  );
};

export default Aloqa;
