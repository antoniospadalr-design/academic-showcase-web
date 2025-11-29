import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Introduccion from "./pages/Introduccion";
import Objetivos from "./pages/Objetivos";
import Metodologia from "./pages/Metodologia";
import Desarrollo from "./pages/Desarrollo";
import Conclusiones from "./pages/Conclusiones";
import Bibliografia from "./pages/Bibliografia";
import Autores from "./pages/Autores";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/introduccion" element={<Introduccion />} />
          <Route path="/objetivos" element={<Objetivos />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/desarrollo" element={<Desarrollo />} />
          <Route path="/conclusiones" element={<Conclusiones />} />
          <Route path="/bibliografia" element={<Bibliografia />} />
          <Route path="/autores" element={<Autores />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
