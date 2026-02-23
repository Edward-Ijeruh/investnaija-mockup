import { useEffect, useRef, useState } from "react";
import { useMotionValue, useInView, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({
  value,
  suffix = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState("0");

  // Track when the element is in view
  const isInView = useInView(ref, { amount: 0.6, margin: "-100px" });

  const count = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplay(Math.floor(latest).toLocaleString() + suffix);
    });

    // Animate every time it comes into view
    if (isInView) {
      count.set(0); // reset before animating
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }

    return () => unsubscribe();
  }, [isInView, value, duration, count, suffix]);

  return <span ref={ref}>{display}</span>;
}
