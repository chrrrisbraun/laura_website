import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-windSong font-bold text-orange-200 mb-9">
            Du und dein Baby
          </h1>
          <p className="text-2xl md:text-4xl text-white font-light">
            nur viel näher, egal wohin du gehst. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;