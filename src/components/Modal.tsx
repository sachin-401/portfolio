"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiMinus, FiMaximize } from "react-icons/fi";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useModalStore } from "@/store/modalStore";
import { ModalKeysType } from "@/constants/modals";
import { useThemeStore } from "@/store/themeStore";

type ModalProps = {
  children: React.ReactNode;
  title: string;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  rememberPosition?: boolean;
  modalKey?: ModalKeysType;
  disableMaximize?: boolean;
};

const getMenuDockTopOffset = () => {
  if (typeof window === "undefined") return;
  const elem = document.getElementById("menu-dock");
  if (!elem) return 0;

  return elem.offsetHeight;
};

export const Modal = ({
  children,
  title,
  width = 600,
  height = 400,
  minWidth = 400,
  minHeight = 300,
  rememberPosition = true,
  modalKey = "os-modal",
  disableMaximize,
}: ModalProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width, height });
  const windowRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { updatePosition, closeModal, modal, updateZIndexToTop } =
    useModalStore();
  const themeMode = useThemeStore((s) => s.mode);
  const isDark = themeMode === "dark";

  const position = useMemo(
    () => modal?.[modalKey]?.position || { x: 0, y: 0 },
    [modal, modalKey],
  );
  const zIndex = useMemo(
    () => modal?.[modalKey]?.zIndex || 100,
    [modal, modalKey],
  );
  const isOnTop = useMemo(
    () => modal?.[modalKey]?.onTop || false,
    [modal, modalKey],
  );

  const MODAL_LOCALSTORAGE_KEY = `modal-position-${modalKey}`;
  const isOpen = modal?.[modalKey]?.status;

  const setPosition = useCallback(
    (position: { x: number; y: number }) => {
      updatePosition(modalKey, position);
      // localStorage.setItem(MODAL_LOCALSTORAGE_KEY, JSON.stringify(position));
    },
    [modalKey, updatePosition],
  );

  const onCloseModal = useCallback(() => {
    closeModal(modalKey);
  }, [closeModal, modalKey]);

  // Load saved position
  useEffect(() => {
    if (isMaximized) return;
    if (rememberPosition && isMounted) {
      const saved = localStorage.getItem(MODAL_LOCALSTORAGE_KEY);
      if (saved && !isMaximized) {
        try {
          const parsed = JSON.parse(saved);
          setPosition(parsed);
          return;
        } catch (e) {
          // Invalid saved data, ignore
        }
      }
    }

    // Default: center the window
    const windowWidth = windowSize.width;
    const windowHeight = windowSize.height;
    setPosition({
      x: (window.innerWidth - windowWidth) / 2,
      y: (window.innerHeight - windowHeight) / 2,
    });
  }, [
    MODAL_LOCALSTORAGE_KEY,
    isMaximized,
    isMounted,
    rememberPosition,
    setPosition,
    windowSize.height,
    windowSize.width,
  ]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Save position when dragging ends
  useEffect(() => {
    if (!isDragging && rememberPosition && isMounted && !isMaximized) {
      localStorage.setItem(MODAL_LOCALSTORAGE_KEY, JSON.stringify(position));
    }
  }, [
    isDragging,
    position,
    rememberPosition,
    isMounted,
    MODAL_LOCALSTORAGE_KEY,
    isMaximized,
  ]);

  // Drag handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Only drag from the header
      if (!(e.target as HTMLElement).closest(".window-header")) return;
      if (isMaximized) return; // Don't drag when maximized

      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    },
    [isMaximized, position, setDragOffset],
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      // Keep window within viewport
      const newX = Math.max(
        0,
        Math.min(
          e.clientX - dragOffset.x,
          window.innerWidth - windowSize.width,
        ),
      );
      const newY = Math.max(
        0,
        Math.min(
          e.clientY - dragOffset.y,
          window.innerHeight - windowSize.height,
        ),
      );

      setPosition({
        x: newX,
        y: newY,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, windowSize, setPosition]);

  // Handle window click - stop propagation to background
  const handleWindowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateZIndexToTop(modalKey);
  };

  // Handle maximize
  const handleMaximize = () => {
    if (disableMaximize) return;
    const bottomOffset = getMenuDockTopOffset();
    // Maximize to full screen (with some padding)
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight - (bottomOffset || 0) - 20,
    });
    setPosition({ x: 0, y: 0 });

    setIsMaximized(true);
  };

  // Handle minimize
  const handleMinimize = () => {
    // Restore to previous size
    setWindowSize({ width, height });
    const centerX = (window.innerWidth - width) / 2;
    const centerY = (window.innerHeight - height) / 2;
    setPosition({ x: centerX, y: centerY });

    setIsMaximized(false);
  };

  // Handle window resize on viewport change
  useEffect(() => {
    const handleResize = () => {
      if (isMaximized) {
        const bottomOffset = getMenuDockTopOffset();

        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight - (bottomOffset || 0) - 20,
        });
        setPosition({ x: 0, y: 0 });
      } else {
        // Keep window within viewport
        const maxX = window.innerWidth - windowSize.width;
        const maxY = window.innerHeight - windowSize.height;
        setPosition({
          x: Math.min(position.x, maxX),
          y: Math.min(position.y, maxY),
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [
    isMaximized,
    position.x,
    position.y,
    windowSize.width,
    windowSize.height,
    setPosition,
  ]);

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onCloseModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none "
          onClick={() => {}} // Capture clicks on background
          style={{
            zIndex: zIndex || 50,
          }}
        >
          {/* The Window */}
          <motion.div
            ref={windowRef}
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
              transition: { type: "spring", damping: 25, stiffness: 300 },
            }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            onClick={handleWindowClick}
            onMouseDown={handleMouseDown}
            className={`pointer-events-auto absolute bg-os-window rounded-2xl overflow-hidden shadow-2xl border border-os-window-border bg-os-desktop flex flex-col
              ${isDragging ? "cursor-grabbing" : "cursor-default"}
              ${isMaximized ? "rounded-none rounded-b-2xl" : "rounded-2xl"}
            `}
            style={{
              left: position.x,
              top: position.y,
              width: windowSize.width,
              height: windowSize.height,
              minWidth: minWidth,
              minHeight: minHeight,
            }}
          >
            {/* Window Header (Draggable Area) */}
            <div
              className={`window-header flex justify-between items-center px-4 py-3 border-b border-os-window-border ${isMaximized ? "cursor-default" : "cursor-grab active:cursor-grabbing"} ${isOnTop ? "bg-os-accent" : "bg-os-desktop"}`}
            >
              <div className="flex items-center gap-3">
                {/* Window Controls (traffic lights) */}

                {/* Title */}
                <h2
                  className={`text-sm font-semibold opacity-80 select-none ${isOnTop ? "text-white" : isDark ? "text-white" : "text-black"}`}
                >
                  {title}
                </h2>
              </div>

              <div>
                {!disableMaximize && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isMaximized) {
                        handleMinimize();
                      } else {
                        handleMaximize();
                      }
                    }}
                    className={`p-1.5 rounded-lg transition-all ${
                      isOnTop
                        ? "hover:bg-orange-400 hover:text-white"
                        : "hover:bg-orange-200 hover:text-black"
                    }`}
                    aria-label="Maximize"
                  >
                    {isMaximized ? (
                      <FiMinus
                        size={16}
                        className={`${isOnTop ? "text-white" : isDark ? "text-white" : "text-black"}`}
                      />
                    ) : (
                      <FiMaximize
                        size={16}
                        className={`${isOnTop ? "text-white" : isDark ? "text-white" : "text-black"}`}
                      />
                    )}
                  </button>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCloseModal();
                  }}
                  className={`p-1.5 rounded-lg transition-all ${
                    isOnTop
                      ? "hover:bg-red-400 hover:text-white"
                      : "hover:bg-red-200 hover:text-white"
                  }`}
                  aria-label="Close"
                >
                  <FiX
                    size={16}
                    className={`${isOnTop ? "text-white" : isDark ? "text-white" : "text-black"}`}
                  />
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 overflow-y-auto p-1">{children}</div>

            {/* Optional: Resize Handle (bottom-right corner) */}
            {/* <div
              className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-0 hover:opacity-40 transition-opacity"
              onMouseDown={(e) => {
                e.stopPropagation();
                // TODO: Implement resize if needed
                console.log("Resize");
              }}
            >
              <svg viewBox="0 0 10 10" className="w-full h-full">
                <path
                  d="M0 10L10 0V10H0Z"
                  fill="currentColor"
                  className="opacity-30"
                />
              </svg>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
