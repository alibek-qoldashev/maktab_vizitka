import React, { useEffect, useState } from "react"; // useState qo'shildi
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaMoon, FaPlay } from "react-icons/fa";
import Footer from "../components/Footer";
import oo from "../assets/00.jpg";
import buld from "../assets/buld.jpg";

const MaktabTarixi = () => {
  // Qaysi video ID ochiqligini saqlash uchun state
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const historyData = [
    {
      id: 1,
      date: "2022-YIL 6-FEVRAL",
      dateColor: "bg-blue-600",
      title: "TANTANALI OCHILISH MAROSIMI",
      image: oo,
      desc: "2022-yil 6-fevral sanasi maktabimiz solnomasiga oltin harflar bilan muhrlangan.",
    },
    {
      id: 3,
      date: "2024-YIL 3-DEKABR",
      dateColor: "bg-green-600",
      title: "3-DEKABR “NOGIRONLAR KUNI”DAN LAVHA",
      videoId: "Kqmj58816RE", // Video ID
      videoThumb: "https://img.youtube.com/vi/Kqmj58816RE/maxresdefault.jpg", // Avtomatik rasm oladi
      isVideo: true,
      desc: "Toshkent shahar Yangihayot tumani 332-maktab direktori Lola Miralimova boshchiligida ijtimoiy tadbirlar muntazam o'tkazib kelinadi.",
    },
    {
      id: 4,
      date: "2022-YIL",
      dateColor: "bg-orange-500",
      title: "MAKTABIMIZ DAN QISQA LAVHALAR", 
      videoId: "ui2hyf0s8Cg", // Bu yerga ikkinchi video ID sini qo'ying
      videoThumb:
        "https://api.maktab.uz/storage/uploads/schools/1/school_photo.jpg",
      isVideo: true,
      desc: "Yangi O'zbekistonning fidoiy ustozlari va maktab hayotidan qisqa videolavhalar.",
    },
  ];

  return (
    <div className="w-full space-y-8 overflow-x-hidden min-w-0">
      {/* TOP SEARCH BAR */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2"
        data-aos="fade-down"
      >
        <div className="relative w-full sm:max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
          <input
            type="text"
            placeholder="qidiruv..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white shadow-sm border border-gray-100 focus:outline-none"
          />
        </div>
        <button className="hidden sm:flex items-center gap-2 bg-white px-6 py-2.5 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700 text-[10px] uppercase tracking-widest">
          Tungi rejim <FaMoon className="text-blue-600" />
        </button>
      </div>

      <div className="border-b border-gray-100 pb-4 px-2" data-aos="fade-right">
        <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-widest">
          Maktab Tarixi
        </h1>
      </div>

      {/* HISTORY TIMELINE */}
      <section className="space-y-16 px-2">
        {historyData.map((item) => (
          <article
            key={item.id}
            className="flex flex-col space-y-6 relative border-l-4 border-gray-100 pl-6 md:pl-10 ml-2"
            data-aos="fade-up"
          >
            <div
              className={`absolute -left-[10px] top-0 w-4 h-4 rounded-full ${item.dateColor} border-4 border-white`}
            ></div>
            <div
              className={`${item.dateColor} inline-block self-start px-4 py-1.5 rounded-md text-white text-[10px] font-bold`}
            >
              {item.date}
            </div>
            <h2 className="text-lg md:text-xl font-black text-gray-900 uppercase leading-tight max-w-3xl">
              {item.title}
            </h2>

            {/* Media Content - TO'G'RILANGAN QISM */}
            <div className="relative rounded-2xl md:rounded-[30px] overflow-hidden shadow-lg max-w-4xl w-full bg-gray-100">
              {item.isVideo && activeVideo === item.id ? (
                /* Agar video bosilsa, iframe shu yerda ochiladi */
                <div className="relative w-full pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                /* Rasm va Play tugmasi (Birinchi usul) */
                <div
                  className="relative group cursor-pointer"
                  onClick={() => item.isVideo && setActiveVideo(item.id)}
                >
                  <img
                    src={item.isVideo ? item.videoThumb : item.image}
                    alt="history"
                    className="w-full h-[200px] sm:h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-125">
                        <FaPlay size={25} className="ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <p className="text-gray-600 text-[11px] md:text-[13px] font-bold leading-relaxed uppercase max-w-4xl text-justify">
              {item.desc}
            </p>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default MaktabTarixi;
