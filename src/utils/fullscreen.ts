// utils/fullscreen.ts
export function toggleFullScreen() {
  if (typeof window === "undefined") return false;

  try {
    if (!document.fullscreenElement) {
      // Enter full screen
      return document.documentElement
        .requestFullscreen()
        .then(() => true)
        .catch((err) => {
          console.error("Error entering fullscreen:", err);
          return false;
        });
    } else {
      // Exit full screen
      return document
        .exitFullscreen()
        .then(() => true)
        .catch((err) => {
          console.error("Error exiting fullscreen:", err);
          return false;
        });
    }
  } catch (error) {
    console.error("Fullscreen error:", error);
    return false;
  }
}

export function isFullScreen() {
  if (typeof window === "undefined") return false;
  return !!document.fullscreenElement;
}

// Optional: Add fullscreen event listeners helper
export function onFullscreenChange(callback: (isFullscreen: boolean) => void) {
  if (typeof window === "undefined") return () => {};

  const handler = () => {
    callback(isFullScreen());
  };

  document.addEventListener("fullscreenchange", handler);
  return () => {
    document.removeEventListener("fullscreenchange", handler);
  };
}
