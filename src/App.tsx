import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import MakersStudioPage from "./pages/MakersStudioPage";
import HealthyRCaseStudy from "./pages/projects/HealthyRCaseStudy";
import RITShiftMateCaseStudy from "./pages/projects/RITShiftMateCaseStudy";
import ParkEaseCaseStudy from "./pages/projects/ParkEaseCaseStudy";
import ARCaseStudy from "./pages/projects/ARCaseStudy";
import WeatherAppCaseStudy from "./pages/projects/WeatherAppCaseStudy";
import FoodZapCaseStudy from "./pages/projects/FoodZapCaseStudy";
import UXProbeCaseStudy from "./pages/projects/UXProbeCaseStudy";
import DailygramCaseStudy from "./pages/projects/DailygramCaseStudy";
import InfiniteMindsCaseStudy from "./pages/projects/InfiniteMindsCaseStudy";
import TravelMissionCaseStudy from "./pages/projects/TravelMissionCaseStudy";
import BioDataPage from "./pages/BioDataPage";
import AdminPage from "./pages/AdminPage";
import PasswordGate from "./components/PasswordGate";

const queryClient = new QueryClient();

function ProtectedPortfolio() {
  return (
    <PasswordGate>
      <Outlet />
    </PasswordGate>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route element={<ProtectedPortfolio />}>
            <Route path="/" element={<Index />} />
            <Route path="/work-experience" element={<WorkExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/makers-studio" element={<MakersStudioPage />} />
            <Route path="/projects/healthyr" element={<HealthyRCaseStudy />} />
            <Route path="/projects/rit-shiftmate" element={<RITShiftMateCaseStudy />} />
            <Route path="/projects/parkease" element={<ParkEaseCaseStudy />} />
            <Route path="/projects/ar-vr" element={<ARCaseStudy />} />
            <Route path="/projects/weather-app" element={<WeatherAppCaseStudy />} />
            <Route path="/projects/foodzap" element={<FoodZapCaseStudy />} />
            <Route path="/projects/uxprobe" element={<UXProbeCaseStudy />} />
            <Route path="/projects/dailygram" element={<DailygramCaseStudy />} />
            <Route path="/projects/infinite-minds" element={<InfiniteMindsCaseStudy />} />
            <Route path="/projects/travel-mission" element={<TravelMissionCaseStudy />} />
            <Route path="/bio-data" element={<BioDataPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
