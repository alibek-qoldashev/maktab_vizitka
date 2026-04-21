import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Asosiy from "./pages/Asosiy";
import Yangiliklar from "./pages/Yangiliklar";
import Rahbariyat from "./pages/Rahbariyat";
import MaktabTarixi from "./pages/Maktab_tarixi";
import Aloqa from "./pages/Aloqa";
import Natijalarimiz from "./pages/Natijalarimiz";

const App = () => {
  // Desktop uchun sidebar holati
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Mobil uchun sidebar holati
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f4f7fe]">
      {/* Sidebar komponenti */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Asosiy kontent maydoni */}
      <main
        className={`flex-1 transition-all duration-300 min-h-screen
          /* Desktopda sidebar kengligiga qarab margin */
          ${isCollapsed ? "lg:ml-[80px]" : "lg:ml-[280px]"}
          /* Mobilda margin bo'lmaydi */
          ml-0
          p-4 sm:p-6 md:p-8
        `}
      >
        <div className="max-w-[1400px] mx-auto">
          <Routes>
            {/* Yo'llarni (path) to'g'irlaymiz */}
            <Route path="/" element={<Asosiy />} />
            <Route path="/news" element={<Yangiliklar />} />
            <Route path="/management" element={<Rahbariyat />} />
            <Route path="/history" element={<MaktabTarixi />} />
            <Route path="/contact" element={<Aloqa />} />
            <Route path="/results" element={<Natijalarimiz />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
