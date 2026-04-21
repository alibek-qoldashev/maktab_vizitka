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

const Aloqa = () => {
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
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
        data-aos="fade-down"
      >
        <div className="relative w-full sm:max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
          <input
            type="text"
            placeholder="qidiruv..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white shadow-sm border border-gray-100 focus:border-blue-300 focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 bg-white px-6 py-2.5 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700 text-[10px] uppercase tracking-widest">
          Tungi rejim <FaMoon className="text-blue-600" />
        </button>
      </div>

      {/* PAGE TITLE */}
      <div className="border-b border-gray-100 pb-4" data-aos="fade-right">
        <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-widest">
          Aloqa
        </h1>
      </div>

      {/* CONTACT CONTENT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-6">
        {/* LEFT COLUMN: CONTACT CARDS & SOCIALS */}
        <div className="space-y-6" data-aos="fade-right">
          <div className="space-y-4">
            {contactDetails.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-gray-50/50 rounded-2xl border-l-4 border-blue-600 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl text-gray-900 mr-6">{item.icon}</div>
                <div>
                  <h3 className="text-[11px] font-black text-gray-900 tracking-widest uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-500 uppercase mt-1 leading-tight">
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
          className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white"
          data-aos="fade-left"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1436.6782742466735!2d69.19546283841055!3d41.21250206275171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61c49642ca11%3A0x4d8ba2f47a08161b!2s332nd%20school!5e1!3m2!1sen!2s!4v1776795723917!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aloqa;
