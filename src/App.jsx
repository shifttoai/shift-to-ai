import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import Services from './components/Services';
import Demo from './components/Demo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import BillingPage from './pages/BillingPage';
import AgentsPage from './pages/AgentsPage';

function LandingPage() {
  return (
    <>
      <TopNavBar />
      <main className="relative pt-24">
        {/* Ambient Background Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary atmospheric-glow rounded-full"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary atmospheric-glow rounded-full"></div>
        
        <Hero />
        <DashboardPreview />
        <Services />
        <Demo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/agents" element={<AgentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
