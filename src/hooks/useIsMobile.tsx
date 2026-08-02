"use client";
import { MOBILE_BREAKPOINT } from "@/constants/modals";
import { useEffect, useRef } from "react";

const useIsMobile = () => {
  const isMobile = useRef(false);

  // Detect mobile
  useEffect(() => {
    isMobile.current =
      window.innerWidth < MOBILE_BREAKPOINT || "ontouchstart" in window;
  }, []);

  return { isMobile: isMobile.current };
};

export default useIsMobile;
