"use client";
import { DesktopIcons } from "@/components/DesktopIcons";
import HomeDock from "@/components/HomeDock";
import ScreenHeader from "@/components/ScreenHeader";
import { bgImages } from "@/constants/backgroundImages";
import { AllModals } from "@/modals/AllModals";
import { useThemeStore } from "@/store/themeStore";

export const HomeScreen = () => {
  const { mode, theme } = useThemeStore();

  const backgroundImage = bgImages[mode][theme];

  return (
    /* SCREEN 2: MAIN DESKTOP ENVIRONMENT */
    <div
      className="w-full h-full animate-fade-in flex flex-col justify-between p-4"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(var(--background-rgb),1)",
      }}
    >
      <ScreenHeader />
      <DesktopIcons />
      <HomeDock />
      <AllModals />
    </div>
  );
};
