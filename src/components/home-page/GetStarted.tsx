import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Volume2, Clock3 } from "lucide-react";

import InvestNaijaVideo from "../../assets/home/video-1.mp4";
import videoTwo from "../../assets/home/video-2.mp4";
import videoThree from "../../assets/home/video-3.mp4";
import videoFour from "../../assets/home/video-4.mp4";
import videoFive from "../../assets/home/video-5.mp4";

const initialVideos = [
  {
    id: 1,
    title: "Building wealth with clarity",
    subtitle: "InvestNaija Overview",
    src: InvestNaijaVideo,
    thumbnail: videoTwo,
    duration: "1:05",
  },

  {
    id: 2,
    title: "Secure you money and your future",
    subtitle: "Financial Education",
    src: videoTwo,
    thumbnail: videoTwo,
    duration: "1:06",
  },

  {
    id: 3,
    title: "Understand how your money works for you",
    subtitle: "LearnIN",
    src: videoThree,
    thumbnail: videoThree,
    duration: "0:56",
  },

  {
    id: 4,
    title: "Understanding smarter financing",
    subtitle: "SaveIN",
    src: videoFour,
    thumbnail: videoFour,
    duration: "1:06",
  },

  {
    id: 5,
    title: "Mastering consistent investing habits",
    subtitle: "PlanIN",
    src: videoFive,
    thumbnail: videoFive,
    duration: "1:11",
  },
];

export default function GetStarted() {
  const [videos, setVideos] = useState(initialVideos);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const activeVideo = videos[0];
  const sideVideos = useMemo(() => {
    return videos.slice(1);
  }, [videos]);

  const playVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.log(err);
    }
  };

  const switchVideo = async (clickedVideo: (typeof initialVideos)[0]) => {
    const remainingVideos = videos.filter((v) => v.id !== clickedVideo.id);

    setVideos([
      clickedVideo,
      activeVideo,
      ...remainingVideos.filter((v) => v.id !== activeVideo.id),
    ]);

    setIsPlaying(true);
  };

  useEffect(() => {
    if (!videoRef.current || !isPlaying) return;

    videoRef.current.play().catch(() => {});
  }, [activeVideo, isPlaying]);

  return (
    <section className="relative py-24 md:py-32 bg-gray-200 overflow-hidden">
      {/* subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center px-2 md:px-6 mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[11px] md:text-sm text-black/40 uppercase tracking-[0.24em]"
          >
            Video Library
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-7 text-3xl md:text-5xl font-semibold leading-[1.02] tracking-tight text-[#050505]"
          >
            Learn investing through
            <br />
            <span className="text-[#e55356]">clear visual guidance.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-5 text-sm md:text-base leading-relaxed text-black/60 max-w-2xl mx-auto"
          >
            Short, practical financial content designed to simplify complex
            decisions, reduce cognitive overload, and help Nigerians build
            long-term confidence with money.
          </motion.p>
        </motion.div>

        {/* Video section */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-1 xl:grid-cols-[1.65fr_0.75fr] gap-5 items-start"
        >
          {/* Main video */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
          >
            {/* Video area */}
            <div className="relative aspect-video overflow-hidden bg-black">
              <video
                ref={videoRef}
                key={activeVideo.id}
                src={activeVideo.src}
                poster={activeVideo.thumbnail}
                controls={isPlaying}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />

              {/* Top meta */}
              <div className="absolute top-5 left-5 flex items-center gap-2 z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl border border-black/5">
                  <Volume2 size={13} className="text-black/60" />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/60">
                    {isPlaying ? "Now playing" : "Ready to play"}
                  </span>
                </div>
              </div>

              {/* Play overlay */}
              {!isPlaying && (
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={playVideo}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <Play size={28} className="text-white fill-white ml-1" />
                  </div>
                </motion.button>
              )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-7">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="max-w-xl">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#d91b08] font-semibold">
                    {activeVideo.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl md:text-[30px] leading-tight font-semibold tracking-tight text-[#050505]">
                    {activeVideo.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-2 text-sm text-black/45">
                    <Clock3 size={15} />

                    <span>{activeVideo.duration}</span>
                  </div>
                </div>

                <motion.button
                  onClick={playVideo}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white text-sm font-medium bg-[#050505] hover:bg-black/90 transition-all duration-300 cursor-pointer"
                >
                  Watch Full Video
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Side videos */}
          <motion.div layout className="space-y-4">
            {sideVideos.map((video, index) => (
              <motion.div
                layout
                key={video.id}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  layout: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                whileHover={{ y: -2 }}
                onClick={() => switchVideo(video)}
                className="group w-full rounded-[24px] border border-black/10 bg-white text-left overflow-hidden transition-all duration-300 hover:border-black/15 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                <div className="flex gap-4 p-3">
                  {/* Thumbnail */}
                  <div className="relative w-[145px] md:w-[160px] shrink-0 overflow-hidden rounded-2xl bg-black">
                    <video
                      src={video.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/30" />

                    {/* Play */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15 backdrop-blur-xl border border-white/20">
                        <Play
                          size={16}
                          className="text-white fill-white ml-0.5"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] text-white/85">
                      {video.duration}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-between py-1 min-w-0 flex-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-black/35">
                        {video.subtitle}
                      </p>

                      <h4 className="mt-2 text-sm md:text-[15px] leading-relaxed text-black/70 group-hover:text-black transition-colors">
                        {video.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs text-black/35">Watch video</span>

                      <ArrowRight
                        size={15}
                        className="text-black/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black/60"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
