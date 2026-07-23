import { DesktopIcons } from "@/components/DesktopIcons";
import HomeDock from "@/components/HomeDock";
import { AllModals } from "@/modals/AllModals";

export const HomeScreen = () => {
  return (
    /* SCREEN 2: MAIN DESKTOP ENVIRONMENT */
    <div className="w-full h-full animate-fade-in flex flex-col justify-between p-4">
      <DesktopIcons />
      <HomeDock />
      <AllModals />
    </div>
  );
};
