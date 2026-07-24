import { DesktopIcons } from "@/components/DesktopIcons";
import HomeDock from "@/components/HomeDock";
import { AllModals } from "@/modals/AllModals";
import Background1JPG from "../assets/bg2.jpg";

export const HomeScreen = () => {
  return (
    /* SCREEN 2: MAIN DESKTOP ENVIRONMENT */
    <div
      className="w-full h-full animate-fade-in flex flex-col justify-between p-4"
      style={{
        backgroundImage: `url(${Background1JPG.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(var(--background-rgb),1)",
      }}
    >
      <DesktopIcons />
      <HomeDock />
      <AllModals />
    </div>
  );
};
