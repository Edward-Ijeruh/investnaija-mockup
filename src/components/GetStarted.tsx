import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Volume2, Clock3 } from "lucide-react";

import InvestNaijaVideo from "../assets/home/InvestNaija-Video.mp4";

import videoTwo from "../assets/home/video2.png";
import videoThree from "../assets/home/video3.png";
import videoFour from "../assets/home/video4.png";
import videoFive from "../assets/home/video5.png";

const initialVideos = [
  {
    id: 1,
    title: "Building wealth with clarity",
    subtitle: "InvestNaija Overview",
    type: "video",
    src: InvestNaijaVideo,
    thumbnail: videoTwo,
    duration: "2:14",
  },
  {
    id: 2,
    title: "How disciplined investing works",
    subtitle: "Financial Education",
    type: "image",
    thumbnail: videoTwo,
    duration: "4:08",
  },
  {
    id: 3,
    title: "Planning long-term financial goals",
    subtitle: "PlanIN",
    type: "image",
    thumbnail: videoThree,
    duration: "3:42",
  },
  {
    id: 4,
    title: "Understanding smarter savings",
    subtitle: "SaveIN",
    type: "image",
    thumbnail: videoFour,
    duration: "5:11",
  },
  {
    id: 5,
    title: "Mastering consistent investing habits",
    subtitle: "GrowIN",
    type: "image",
    thumbnail: videoFive,
    duration: "6:02",
  },
];

export default function GetStarted() {
  const [videos] = useState(initialVideos);

  const activeVideo = videos[0];
  const sideVideos = videos.slice(1);

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-[#d91b08]/10 blur-[140px]" />

        <div className="absolute bottom-[-200px] right-[-120px] w-[420px] h-[420px] bg-[#0b6e7a]/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center px-2 md:px-6 mb-16 md:mb-20"
        >
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[11px] md:text-sm text-gray-500 uppercase tracking-[0.24em]"
          >
            Video Library
          </motion.div>

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-7 text-3xl md:text-5xl font-semibold leading-[1.02] tracking-tight text-white"
          >
            Learn investing through
            <br />
            <span className="bg-gradient-to-r from-[#d91b08] via-[#e25257] to-[#fbc710] bg-clip-text text-transparent">
              clear visual guidance.
            </span>
          </motion.h2>

          {/* paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-5 text-sm md:text-base leading-relaxed text-white/50 max-w-2xl mx-auto"
          >
            Short, practical financial content designed to simplify complex
            decisions, reduce cognitive overload, and help Nigerians build
            long-term confidence with money.
          </motion.p>
        </motion.div>

        {/* VIDEO SECTION */}
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-[1.65fr_0.75fr] gap-5 items-start">
          {/* MAIN VIDEO */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            {/* VIDEO AREA */}
            <div className="relative aspect-video overflow-hidden bg-black">
              {activeVideo.type === "video" ? (
                <video
                  key={activeVideo.id}
                  src={activeVideo.src}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* top meta */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                  <Volume2 size={13} className="text-white/70" />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/75">
                    Now Playing
                  </span>
                </div>
              </div>

              {/* play overlay */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="flex items-center justify-center w-18 h-18 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <Play size={26} className="text-white fill-white ml-1" />
                </div>
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-7">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="max-w-xl">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#fbc710] font-semibold">
                    {activeVideo.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl md:text-[30px] leading-tight font-semibold tracking-tight text-white">
                    {activeVideo.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-2 text-sm text-white/45">
                    <Clock3 size={15} />

                    <span>{activeVideo.duration}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-black text-sm font-medium bg-white hover:bg-white/90 transition-all duration-300 cursor-pointer"
                >
                  Watch Full Video
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* SIDE VIDEOS */}
          <div className="space-y-4">
            {sideVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -2 }}
                className="group w-full rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-xl text-left overflow-hidden transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] cursor-default"
              >
                <div className="flex gap-4 p-3">
                  {/* THUMBNAIL */}
                  <div className="relative w-[145px] md:w-[160px] shrink-0 overflow-hidden rounded-2xl bg-black">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/30" />

                    {/* play */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15 backdrop-blur-xl border border-white/20">
                        <Play
                          size={16}
                          className="text-white fill-white ml-0.5"
                        />
                      </div>
                    </div>

                    {/* duration */}
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] text-white/85">
                      {video.duration}
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col justify-between py-1 min-w-0 flex-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                        {video.subtitle}
                      </p>

                      <h4 className="mt-2 text-sm md:text-[15px] leading-relaxed text-white/70 group-hover:text-white transition-colors">
                        {video.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs text-white/35">
                        Preview only
                      </span>

                      <ArrowRight
                        size={15}
                        className="text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/60"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
