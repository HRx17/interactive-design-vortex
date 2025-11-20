import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HealthyRCaseStudy from "./pages/projects/HealthyRCaseStudy";
import RITShiftMateCaseStudy from "./pages/projects/RITShiftMateCaseStudy";
import ParkEaseCaseStudy from "./pages/projects/ParkEaseCaseStudy";
import ARCaseStudy from "./pages/projects/ARCaseStudy";
import WeatherAppCaseStudy from "./pages/projects/WeatherAppCaseStudy";
import FoodZapCaseStudy from "./pages/projects/FoodZapCaseStudy";
import UXProbeCaseStudy from "./pages/projects/UXProbeCaseStudy";
import DailygramCaseStudy from "./pages/projects/DailygramCaseStudy";
import InfiniteMindsCaseStudy from "./pages/projects/InfiniteMindsCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/healthyr" element={<HealthyRCaseStudy />} />
          <Route path="/projects/rit-shiftmate" element={<RITShiftMateCaseStudy />} />
          <Route path="/projects/parkease" element={<ParkEaseCaseStudy />} />
          <Route path="/projects/ar-vr" element={<ARCaseStudy />} />
          <Route path="/projects/weather-app" element={<WeatherAppCaseStudy />} />
          <Route path="/projects/foodzap" element={<FoodZapCaseStudy />} />
          <Route path="/projects/uxprobe" element={<UXProbeCaseStudy />} />
          <Route path="/projects/dailygram" element={<DailygramCaseStudy />} />
          <Route path="/projects/infinite-minds" element={<InfiniteMindsCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
