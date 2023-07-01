"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function useAnimateOnInView() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate"); // ToDo: We can do this dynamic
    }
    if (!inView) {
      controls.start("initial");
    }
  }, [controls, inView]);

  return { ref, controls };
}
