import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseContent from '../components/CourseContent';
import Benefits from '../components/Benefits';
import ContactSection from '../components/ContactSection';
import AboutMe from '../components/AboutMe';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Benefits />
      <CourseContent />
      <AboutMe />
      <ContactSection />
    </div>
  );
};

export default Index;