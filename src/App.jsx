import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Asosiy from "./pages/Asosiy";
import Yangiliklar from "./pages/Yangiliklar";
import Rahbariyat from "./pages/Rahbariyat";
import MaktabTarixi from "./pages/Maktab_tarixi";
import Aloqa from "./pages/Aloqa";
import Natijalarimiz from "./pages/Natijalarimiz";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  // DARK MODE STATE
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark",
  );

  // DARK MODE EFFECT
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div
      className="flex min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isDark={isDark}
      />

      <main
        className={`flex-1 transition-all duration-300 min-h-screen
          ${isCollapsed ? "lg:ml-[80px]" : "lg:ml-[280px]"}
          ml-0 p-4 sm:p-6 md:p-8
        `}
      >
        <div className="max-w-[1400px] mx-auto">
          <Routes>
            <Route
              path="/"
              element={<Asosiy isDark={isDark} setIsDark={setIsDark} />}
            />
            <Route
              path="/news"
              element={<Yangiliklar isDark={isDark} setIsDark={setIsDark} />}
            />
            <Route
              path="/management"
              element={<Rahbariyat isDark={isDark} setIsDark={setIsDark} />}
            />
            <Route
              path="/history"
              element={<MaktabTarixi isDark={isDark} setIsDark={setIsDark} />}
            />
            <Route
              path="/contact"
              element={<Aloqa isDark={isDark} setIsDark={setIsDark} />}
            />
            <Route
              path="/results"
              element={<Natijalarimiz isDark={isDark} setIsDark={setIsDark} />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
