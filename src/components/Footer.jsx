import React from "react";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 1. Logo va Ijtimoiy tarmoqlar */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="text-center md:text-left">
              <h2 className="font-black text-gray-800 text-lg leading-tight uppercase tracking-tighter">
                Toshkent shahri 332-sonli <br /> umumta'lim maktab
              </h2>
            </div>

            <div className="flex flex-col w-full max-w-[200px] gap-3">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-[#5d87ff] text-white py-3 rounded-xl font-bold uppercase text-sm hover:opacity-90 transition-all shadow-lg shadow-blue-100"
              >
                <FaTelegramPlane size={18} /> Telegram
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-[#eb4886] text-white py-3 rounded-xl font-bold uppercase text-sm hover:opacity-90 transition-all shadow-lg shadow-pink-100"
              >
                <FaInstagram size={18} /> Instagram
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-[#70b1f8] text-white py-3 rounded-xl font-bold uppercase text-sm hover:opacity-90 transition-all shadow-lg shadow-blue-50"
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
              <h3 className="font-black text-gray-800 uppercase text-lg tracking-wider">
                Biz haqimizda
              </h3>
              <div className="h-0.5 bg-gray-800 w-full mt-1"></div>
            </div>

            <div className="space-y-4 text-gray-600 text-sm font-medium">
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
              <h3 className="font-black text-gray-800 uppercase text-lg tracking-wider">
                Malumot
              </h3>
              <div className="h-0.5 bg-gray-800 w-full mt-1"></div>
            </div>

            <ul className="space-y-4 text-gray-600 text-sm font-medium">
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

        {/* Mobil uchun copyright pastda */}
        <div className="md:hidden border-t border-gray-50 pt-8 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase">
            Copyright © 2025-2026 Maktab-332. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
