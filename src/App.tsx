import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '@/pages/Landing';
import GAD7Home from '@/pages/GAD7Home';
import GAD7Assessment from '@/pages/GAD7Assessment';
import ADHDHome from '@/pages/ADHDHome';
import ADHDAssessment from '@/pages/ADHDAssessment';
import AutismHome from '@/pages/AutismHome';
import AutismAssessment from '@/pages/AutismAssessment';
import AutismResult from '@/pages/AutismResult';
import GAD7ResultV1 from '@/pages/GAD7ResultV1';
import GAD7ResultV2 from '@/pages/GAD7ResultV2';
import ThankYouPage from '@/pages/GAD7ThankYou';
import HowItWorks from '@/pages/HowItWorks';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import About from '@/pages/About';

import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/scroll-to-top";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Landing />} />

                {/* Info Pages */}
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />

                {/* GAD-7 Anxiety Test Routes */}
                <Route path="/gad-7" element={<GAD7Home />} />
                <Route path="/gad-7/:assessmentId" element={<GAD7Assessment />} />
                <Route path="/gad-7/:assessmentId/result" element={<GAD7ResultV1 />} />
                <Route path="/gad-7/:assessmentId/result-v2" element={<GAD7ResultV2 />} />
                <Route path="/gad-7/:assessmentId/thank-you" element={<ThankYouPage />} />

                {/* ADHD Test Routes */}
                <Route path="/adhd" element={<ADHDHome />} />
                <Route path="/adhd/:assessmentId" element={<ADHDAssessment />} />
                <Route path="/adhd/:assessmentId/result" element={<GAD7ResultV1 />} />
                <Route path="/adhd/:assessmentId/result-v2" element={<GAD7ResultV2 />} />
                <Route path="/adhd/:assessmentId/thank-you" element={<ThankYouPage />} />

                {/* Autism Test Routes */}
                <Route path="/autism" element={<AutismHome />} />
                <Route path="/autism/:assessmentId" element={<AutismAssessment />} />
                <Route path="/autism/:assessmentId/result" element={<AutismResult />} />
                <Route path="/autism/:assessmentId/result-v2" element={<GAD7ResultV2 />} />
                <Route path="/autism/:assessmentId/thank-you" element={<ThankYouPage />} />
            </Routes>
            <Toaster />
        </Router>
    );
}

export default App;
