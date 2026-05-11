import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Volume2, Clock3 } from "lucide-react";

import InvestNaijaVideo from "../../assets/home/InvestNaija-Video.mp4";
import videoTwo from "../../assets/home/video2.png";
import videoThree from "../../assets/home/video3.png";
import videoFour from "../../assets/home/video4.png";
import videoFive from "../../assets/home/video5.png";

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

export default function LearnVideo() {
  const [videos] = useState(initialVideos);

  const activeVideo = videos[0];
  const sideVideos = videos.slice(1);

  return (
    <section className="relative py-24 md:py-32 bg-gray-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] md:text-sm uppercase tracking-[0.22em] text-black/40">
            LearnIN Video Library
          </p>

          <h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#050505]">
            Learn investing through
            <br />
            <span className="bg-gradient-to-r from-[#d91b08] to-[#fbc710] bg-clip-text text-transparent">
              simple visual guidance.
            </span>
          </h2>

          <p className="mt-5 text-sm md:text-base text-black/60 leading-relaxed max-w-2xl mx-auto">
            Short, structured financial lessons designed to reduce complexity,
            improve clarity, and help you build confidence with money.
          </p>
        </motion.div>

        {/* Video section */}
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-[1.65fr_0.75fr] gap-5 items-start">
          {/* Main */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >
            {/* Video area */}
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

              {/* Top meta */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-black/5">
                  <Volume2 size={13} className="text-black/60" />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/60">
                    Now Playing
                  </span>
                </div>
              </div>

              {/* Play overlay */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl border border-black/10 shadow-lg">
                  <Play size={22} className="text-black ml-0.5" />
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-7 bg-white">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="max-w-xl">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#d91b08] font-semibold">
                    {activeVideo.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl md:text-[30px] leading-tight font-semibold tracking-tight text-[#050505]">
                    {activeVideo.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-2 text-sm text-black/40">
                    <Clock3 size={15} />
                    <span>{activeVideo.duration}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white text-sm font-medium bg-[#050505] hover:bg-black transition-all duration-300 cursor-pointer"
                >
                  Watch Full Video
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Side videos */}
          <div className="space-y-4">
            {sideVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -2 }}
                className="group w-full rounded-[24px] border border-black/10 bg-white text-left overflow-hidden transition-all duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] cursor-default"
              >
                <div className="flex gap-4 p-3">
                  {/* Thumbnail */}
                  <div className="relative w-[145px] md:w-[160px] shrink-0 overflow-hidden rounded-2xl bg-black">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 border border-black/10">
                        <Play size={14} className="text-black ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/80 text-white text-[10px]">
                      {video.duration}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-between py-1 min-w-0 flex-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-black/40">
                        {video.subtitle}
                      </p>

                      <h4 className="mt-2 text-sm md:text-[15px] leading-relaxed text-black/70 group-hover:text-black transition-colors">
                        {video.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs text-black/30">
                        Preview only
                      </span>

                      <ArrowRight
                        size={15}
                        className="text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black/60"
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
