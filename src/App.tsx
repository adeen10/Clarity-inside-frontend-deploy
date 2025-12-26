import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import DetailedResultV1 from '@/pages/DetailedResultV1';
import DetailedResultV2 from '@/pages/DetailedResultV2';
import AssessmentPage from '@/pages/Assessment';
import ThankYouPage from '@/pages/ThankYou';

import { Toaster } from "@/components/ui/toaster";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detailed-result" element={<DetailedResultV1 />} />
                <Route path="/detailed-result-v2" element={<DetailedResultV2 />} />
                <Route path="/assessment" element={<AssessmentPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
            </Routes>
            <Toaster />
        </Router>
    );
}

export default App;
