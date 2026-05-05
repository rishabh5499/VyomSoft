import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Privacy from "./pages/Privacy"
import TermsOfService from "./pages/TermsOfService"
import Contact from "./pages/Contact"
import About from "./pages/About"
import MitaVyayaPrivacy from "./pages/privacy/MitaVyayaPrivacy"
import VyomMutePrivacy from "./pages/privacy/VyomMutePrivacy"
import NotFound from "./pages/NotFound"
import JsonViewerPage from "./pages/JsonViewerPage"
import VyomJSONPrivacy from "./pages/privacy/VyomJsonPrivacy"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy/mitavyaya" element={<MitaVyayaPrivacy />} />
          <Route path="/privacy/VyomMute" element={<VyomMutePrivacy />} />
          <Route path="/privacy/VyomJson" element={<VyomJSONPrivacy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/jsonViewer" element={<JsonViewerPage />} />
          <Route path="/jsonViewer/:id" element={<JsonViewerPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
