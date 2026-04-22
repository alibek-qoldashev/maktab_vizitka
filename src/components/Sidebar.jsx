import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaRegNewspaper,
  FaUserTie,
  FaHistory,
  FaPhoneAlt,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaBars, // Burger ikonkasi
  FaTimes, // Yopish ikonkasi
} from "react-icons/fa";

const Sidebar = ({ isCollapsed, setIsCollapsed, isOpen, isDark }) => {
  const menuItems = [
    { path: "/", name: "BOSH SAHIFA", icon: <FaHome /> },
    { path: "/news", name: "YANGILIKLAR", icon: <FaRegNewspaper /> },
    { path: "/management", name: "RAHBARIYAT", icon: <FaUserTie /> },
    { path: "/history", name: "MAKTAB TARIXI", icon: <FaHistory /> },
    { path: "/contact", name: "ALOQA", icon: <FaPhoneAlt /> },
    { path: "/results", name: "NATIJALARIMIZ", icon: <FaChartLine /> },
  ];

  return (
    <>
      {/* 1. MOBIL UCHUN BURGER TUGMASI (Faqat mobilda ko'rinadi) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-[1100] bg-blue-600 text-white p-3 rounded-xl shadow-lg active:scale-95 transition-all"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* 2. MOBIL FON (Sidebar ochilganda orqa fonni xiralashtirish) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1001] lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* 3. ASOSIY SIDEBAR */}
      <aside
        className={`
    fixed top-0 left-0 h-screen z-[1002] border-r
    transition-all duration-300 ease-in-out
    
    /* Desktop o'lchamlari */
    ${isCollapsed ? "lg:w-[80px]" : "lg:w-[280px]"}
    
    /* Mobil holati */
    ${isOpen ? "translate-x-0 w-[280px]" : "-translate-x-full lg:translate-x-0"}
  `}
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
          // Sidebar uchun o'ng tomonga yo'naltirilgan juda yumshoq va keng shadow
          boxShadow: isDark
            ? "10px 0 40px -15px rgba(0, 0, 0, 0.5)"
            : "10px 0 40px -15px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Desktop Collapse Tugmasi */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3 top-10 bg-blue-600 text-white p-1.5 rounded-full 
               transition-all duration-300 hover:bg-blue-700 hover:scale-110 active:scale-90"
          style={{
            // Tugma fonga "cho'kib" turishi uchun fon rangi bilan border beramiz
            border: `2px solid var(--bg-card)`,
            // Tugma uchun moviyroq va yumshoqroq shadow
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.35)",
          }}
        >
          {isCollapsed ? (
            <FaChevronRight size={10} />
          ) : (
            <FaChevronLeft size={10} />
          )}
        </button>

        {/* Logo/Header qismi */}
        <div className="p-5 mb-4 overflow-hidden h-24 flex flex-col justify-center">
          <div
            className={`transition-all duration-300 ${isCollapsed ? "lg:opacity-0 lg:invisible lg:h-0" : "opacity-100 visible"}`}
          >
            <h2
              className="text-center text-[10px] font-extrabold uppercase leading-tight tracking-[0.1em]"
              style={{
                color: "var(--text-color)",
                opacity: 0.85, // Matnni biroz yumshoqroq qilish uchun
              }}
            >
              Toshkent shahri 332-sonli <br /> umumta'lim maktabi
            </h2>
          </div>
          {isCollapsed && (
            <div className="hidden lg:flex justify-center text-blue-600 font-bold text-xl">
              332
            </div>
          )}
          <div className="h-[1px] bg-gray-100 mt-4 w-full"></div>
        </div>

        {/* Navigatsiya linklari */}
        <nav className="px-3 space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)} // Mobil link bosilsa menyu yopiladi
              className={({ isActive }) => `
                flex items-center rounded-xl transition-all duration-200 font-semibold group
                ${isCollapsed ? "lg:justify-center lg:p-3" : "px-4 py-3"}
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "text-gray-400 hover:bg-gray-50 hover:text-blue-600"
                }
              `}
            >
              <span
                className={`text-xl flex-shrink-0 ${isCollapsed ? "lg:mr-0" : "mr-4"}`}
              >
                {item.icon}
              </span>
              <span
                className={`whitespace-nowrap transition-all duration-300 text-[13px]
                ${isCollapsed ? "lg:w-0 lg:opacity-0 lg:hidden" : "w-auto opacity-100 block"}`}
              >
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
