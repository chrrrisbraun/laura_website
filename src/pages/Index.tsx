import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseContent from '../components/CourseContent';
import Benefits from '../components/Benefits';
import ContactSection from '../components/ContactSection';
import AboutMe from '../components/AboutMe';
import WelcomeSection from '../components/WelcomeSection';
import Testimonals from '../components/Testimonials';
import PricingSection from '../components/Pricing'; 
import Fact from '../components/Fact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <WelcomeSection />
      {/* <HeroSection /> */}
      <Fact />
      {/* <Benefits /> */}
      <CourseContent />
      <AboutMe />
      <PricingSection />
      <Testimonals />
      <ContactSection />
      
    </div>
  );
};

export default Index;