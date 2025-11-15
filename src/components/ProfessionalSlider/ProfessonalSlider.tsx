import React, { useEffect, useRef, useState } from "react";
import model from "../../assets/image/model.jpg";
import model2 from "../../assets/image/model2.jpg";
import model3 from "../../assets/image/model3.jpg";
import model4 from "../../assets/image/model4.jpg";

interface Card {
  title: string;
  desc: string;
  bg: string;
  thumb: string;
}

const cards: Card[] = [
  {
    title: "Designers",
    desc: "Tools that work like you do.",
    bg: model,
    thumb: model2,
  },
  {
    title: "Marketers",
    desc: "Create faster, explore new possibilities.",
    bg: model3,
    thumb: model4,
  },
];

const ProfessionalSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

  const center = (i: number) => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const card = cards[i];
    if (!card) return;

    const axis = isMobile() ? "top" : "left";
    const size = isMobile() ? "clientHeight" : "clientWidth";
    const start = isMobile() ? card.offsetTop : card.offsetLeft;
    (wrap as any).scrollTo({
      [axis]: start - (wrap[size] / 2 - card[size] / 2),
      behavior: "smooth",
    });
  };

  const activate = (i: number) => {
    if (i === current) return;
    setCurrent(i);
    center(i);
  };

  const go = (step: number) => {
    setCurrent((prev) => {
      const next = Math.min(Math.max(prev + step, 0), cards.length - 1);
      center(next);
      return next;
    });
  };

  useEffect(() => {
    const handleResize = () => center(current);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [current]);

  return (
    <section className="text-gray-300 bg-[#07090d]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-5 py-10 md:py-16 flex flex-col md:flex-row justify-between items-end gap-4">
        <h2 className="text-white text-2xl md:text-4xl font-normal">
          Boost your professional workflow and productivity
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            disabled={current === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition ${
              current === 0
                ? "opacity-30 cursor-default"
                : "bg-white/10 hover:bg-orange-500"
            }`}
          >
            ‹
          </button>
          <button
            onClick={() => go(1)}
            disabled={current === cards.length - 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition ${
              current === cards.length - 1
                ? "opacity-30 cursor-default"
                : "bg-white/10 hover:bg-orange-500"
            }`}
          >
            ›
          </button>
        </div>
      </div>

      {/* Slider */}
      <div ref={wrapRef} className="max-w-[1400px] min-h-[50vh] bg-red-400 mx-auto overflow-hidden scroll-smooth">
        <div ref={trackRef} className="flex items-start justify-center gap-5 pb-10 md:pb-14">
          {cards.map((card, i) => (
            <article
              key={i}
              onClick={() => activate(i)}
              className={`relative flex-none rounded-xl overflow-hidden cursor-pointer transition-all duration-500 bg-red-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                current === i
                  ? "basis-[30rem] -translate-y-1.5 shadow-[0_18px_55px_rgba(0,0,0,0.45)]"
                  : "basis-[5rem]"
              }`}
            >
              {/* ✅ Background Image with fallback color */}
              <div
                className="absolute min-h-[20vh] inset-0 w-full h-full bg-green-500 z-0"
                style={{
                  backgroundImage: `url(${card.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div
                className={`absolute bg-yellow-400 inset-0 flex flex-col justify-center items-center gap-2 bg-gradient-to-b from-transparent via-black/40 to-black/80 transition-all z-10 ${
                  current === i ? "flex-row px-6 py-5 gap-4" : "flex-col justify-center"
                }`}
              >
                <img
                  src={card.thumb}
                  alt={card.title}
                  width={133}
                  height={269}
                  className={`rounded-md shadow-md object-cover ${
                    current === i ? "block" : "hidden"
                  }`}
                />
                <div className="text-center md:text-left">
                  <h3
                    className={`text-white font-bold ${
                      current === i ? "text-3xl" : "text-lg rotate-180"
                    }`}
                    style={current !== i ? { writingMode: "vertical-rl" } : {}}
                  >
                    {card.title}
                  </h3>
                  {current === i && (
                    <>
                      <p className="text-gray-300 mt-1 max-w-sm text-sm">
                        {card.desc}
                      </p>
                      <button className="mt-3 px-5 py-2 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-400 transition">
                        Details
                      </button>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 py-5">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => activate(i)}
            className={`w-3 h-3 rounded-full transition transform ${
              current === i
                ? "bg-orange-500 scale-110"
                : "bg-white/30 hover:bg-orange-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalSlider;
