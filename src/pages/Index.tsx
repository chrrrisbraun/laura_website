import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseContent from '../components/CourseContent';
import Benefits from '../components/Benefits';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CourseContent />
      <Benefits />
    </div>
  );
};

export default Index;