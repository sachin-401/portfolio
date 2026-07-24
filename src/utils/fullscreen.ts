export function toggleFullScreen() {
  if (!document?.fullscreenElement) {
    // Enter full screen on the entire page
    document?.documentElement.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen: ${err.message} (${err.name})`,
      );
    });
  } else {
    // Exit full screen
    document?.exitFullscreen();
  }
}
export function isFullScreen() {
  if (typeof window === "undefined") return false;
  return document?.fullscreenElement !== null;
}
