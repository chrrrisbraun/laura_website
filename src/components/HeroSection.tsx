import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517246375798-51698eaa8f88?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your baby and you,
          </h1>
          <p className="text-2xl md:text-4xl text-white font-light">
            just closer wherever you go
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;