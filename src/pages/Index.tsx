import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseContent from '../components/CourseContent';
import Benefits from '../components/Benefits';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CourseContent />
      <Benefits />
      <ContactSection />
    </div>
  );
};

export default Index;