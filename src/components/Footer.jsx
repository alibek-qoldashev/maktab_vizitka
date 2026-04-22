import React from "react";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = ({ isDark }) => {
  // isDark propsi qo'shildi
  return (
    <footer
      className="pt-16 pb-8 border-t transition-all duration-300"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 1. Logo va Ijtimoiy tarmoqlar */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="text-center md:text-left">
              <h2
                className="font-black text-lg leading-tight uppercase tracking-tighter"
                style={{ color: "var(--text-color)" }}
              >
                Toshkent shahri 332-sonli <br /> umumta'lim maktabi
              </h2>
            </div>

            <div className="flex flex-col w-full max-w-[200px] gap-3">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-[#5d87ff] text-white py-3 rounded-xl font-bold uppercase text-sm hover:opacity-90 transition-all"
                style={{
                  boxShadow: isDark
                    ? "none"
                    : "0 10px 20px -10px rgba(93, 135, 255, 0.4)",
                }}
              >
                <FaTelegramPlane size={18} /> Telegram
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-[#eb4886] text-white py-3 rounded-xl font-bold uppercase text-sm hover:opacity-90 transition-all"
                style={{
                  boxShadow: isDark
                    ? "none"
                    : "0 10px 20px -10px rgba(235, 72, 134, 0.4)",
                }}
              >
                <FaInstagram size={18} /> Instagram
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-[#70b1f8] text-white py-3 rounded-xl font-bold uppercase text-sm hover:opacity-90 transition-all"
                style={{
                  boxShadow: isDark
                    ? "none"
                    : "0 10px 20px -10px rgba(112, 177, 248, 0.4)",
                }}
              >
                <FaFacebookF size={18} /> Facebook
              </a>
            </div>

            <div className="hidden md:block pt-4">
              <p className="text-[10px] text-gray-400 font-bold uppercase leading-relaxed">
                Copyright © 2025-2026 Maktab-332 <br />
                Barcha huquqlar himoyalangan.
              </p>
            </div>
          </div>

          {/* 2. Biz haqimizda */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h3
                className="font-black uppercase text-lg tracking-wider"
                style={{ color: "var(--text-color)" }}
              >
                Biz haqimizda
              </h3>
              <div
                className="h-0.5 w-full mt-1"
                style={{ backgroundColor: "var(--text-color)", opacity: 0.2 }}
              ></div>
            </div>

            <div
              className="space-y-4 text-sm font-medium"
              style={{ color: "var(--text-color)", opacity: 0.8 }}
            >
              <p className="leading-relaxed">
                100034 Toshkent, Yangihayot Tumani, <br />
                Yangihayot-2 Mavzesi
              </p>
              <p>Ish Vaqti: Du-Sha, 8:00-18:10</p>
              <div className="space-y-1">
                <p>TEL: +998123456789</p>
                <p>TEL: +998123456789</p>
              </div>
              <p className="hover:text-blue-600 cursor-pointer transition-colors">
                Email: 332maktab@Gmail.Com
              </p>
            </div>
          </div>

          {/* 3. Ma'lumotlar */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h3
                className="font-black uppercase text-lg tracking-wider"
                style={{ color: "var(--text-color)" }}
              >
                Ma'lumot
              </h3>
              <div
                className="h-0.5 w-full mt-1"
                style={{ backgroundColor: "var(--text-color)", opacity: 0.2 }}
              ></div>
            </div>

            <ul
              className="space-y-4 text-sm font-medium"
              style={{ color: "var(--text-color)", opacity: 0.8 }}
            >
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Nima Uchun 332-Maktabni Tanlash Kerak?
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                332-Maktab Haqida
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Bizning Loyihalarimiz
              </li>
            </ul>
          </div>
        </div>

        {/* Mobil uchun copyright */}
        <div
          className="md:hidden border-t pt-8 text-center"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p className="text-[10px] text-gray-400 font-bold uppercase">
            Copyright © 2025-2026 Maktab-332. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
