import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaMoon, FaPlay } from "react-icons/fa";
import Footer from "../components/Footer";
import Rasm from "../assets/robo.png";
import Rasm2 from "../assets/rasm5.jpg";
import malaka from "../assets/malaka.jpg";

const Yangiliklar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const newsData = [
    {
      id: 1,
      date: "2026-YIL 16-FEVRAL",
      dateColor: "bg-blue-600",
      title: "MAKTABIMIZDA ZAMONAVIY ROBOTEXNIKA XONASI OCHILDI",
      image: Rasm , // Robototexnika xonasi rasmi
      desc: "Bizning maktabda yangi Robotic Lab xonasi foydalanishga topshirildi. Bu shunchaki xona emas, balki g'oyalar va innovatsiyalar markazidir.",
      quote:
        "Bugungi texnologiya asrida dasturlash va robototexnikani o'rganish - muvaffaqiyat kalitidir.",
    },
    {
      id: 2,
      date: "2026-YIL 16-FEVRAL",
      dateColor: "bg-orange-500",
      title:
        "332-MAKTAB TOSHKENT TAJRIBA MAKTABLARI ORASIDA 1-O'RINNI EGALLADI",
      image: Rasm2,
      desc: "Bu natija — o'qituvchilarimizning tinimsiz mehnati, o'quvchilarimizning bilimga bo'lgan ishtiyoqi va maktabimizda yaratilgan zamonaviy sharoitlarning mahsulidir.",
    },
    {
      id: 3,
      date: "2026-YIL 17-FEVRAL",
      dateColor: "bg-green-600",
      title:
        "FEVRAL OYIDA MATEMATIKA VA FIZIKA O'QITUVCHILARIMIZ TAILANDGA MALAKA OSHIRISHGA BORIB KELISHDI",
      image: malaka,
      desc: "Toshkent shahar Yangihayot tumani 332-maktab direktori Lola Miralimova boshchiligida malaka oshirish kurslari muvaffaqiyatli yakunlandi.",
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
            placeholder="Qidiruv..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white shadow-sm border border-gray-100 focus:border-blue-300 focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-700 text-xs uppercase tracking-widest">
          Tungi rejim <FaMoon className="text-blue-600" />
        </button>
      </div>

      {/* YANGILIKLAR RO'YXATI */}
      <section className="space-y-12">
        <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-widest border-b-2 border-blue-600 inline-block pb-2">
          Yangiliklar
        </h1>

        <div className="space-y-16">
          {newsData.map((news) => (
            <article key={news.id} className="space-y-6" data-aos="fade-up">
              {/* Sana */}
              <div
                className={`${news.dateColor} inline-block px-4 py-1.5 rounded-md text-white text-[10px] font-bold tracking-tighter`}
              >
                {news.date}
              </div>

              {/* Sarlavha */}
              <h2 className="text-lg md:text-2xl font-black text-gray-900 leading-tight uppercase max-w-4xl">
                {news.title}
              </h2>

              {/* Rasm yoki Video */}
              <div className="relative rounded-2xl md:rounded-[40px] overflow-hidden shadow-xl max-w-5xl">
                <img
                  src={news.isVideo ? news.videoThumb : news.image}
                  alt="news"
                  className="w-full h-[250px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                {news.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse cursor-pointer">
                      <FaPlay size={30} className="ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Matn va Tavsif */}
              <div className="max-w-4xl space-y-4">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium uppercase text-justify">
                  {news.desc}
                </p>
                {news.quote && (
                  <p className="text-gray-900 font-black text-sm md:text-base leading-relaxed uppercase">
                    “{news.quote}”
                  </p>
                )}
                {news.id === 1 && (
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium uppercase">
                    Yangi xonadagi sharoitlar o'quvchilarda sun'iy intellekt va
                    muhandislik olamiga sho'ng'ishga yordam beradi. Biz bilan
                    birga kelajakni quring!
                  </p>
                )}
              </div>

              {/* Ajratuvchi chiziq */}
              <div className="w-full h-[1px] bg-gray-100 pt-8"></div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Yangiliklar;
