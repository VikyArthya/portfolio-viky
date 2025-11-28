import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievmentsSection";
import ErrorBoundary from "./components/ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
          <ErrorBoundary>
            <HeroSection/>
          </ErrorBoundary>
          <ErrorBoundary>
            <AchievementsSection/>
          </ErrorBoundary>
          <ErrorBoundary>
            <AboutSection/>
          </ErrorBoundary>
          <ErrorBoundary>
            <ProjectsSection/>
          </ErrorBoundary>
          <ErrorBoundary>
            <EmailSection/>
          </ErrorBoundary>
          <ErrorBoundary>
            <Footer/>
          </ErrorBoundary>
        </div>
      </div>
    </ErrorBoundary>
  );
}
