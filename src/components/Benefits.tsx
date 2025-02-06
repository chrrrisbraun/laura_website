import React from 'react';
import { Heart, Brain, Smile, Baby } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Stärkt die Bindung",
      description: "Fördert eine sichere Bindung und emotionale Verbindung",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Unterstützt die Entwicklung",
      description: "Verbessert die kognitive und körperliche Entwicklung",
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Komfort & Sicherheit",
      description: "Bietet eine sichere und beruhigende Umgebung",
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Freihändige Betreuung",
      description: "Freiheit, sich zu bewegen, während das Baby nah bleibt",
    },
  ];


  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Vorteile von Babytragetüchern
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;