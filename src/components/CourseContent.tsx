import React from 'react';
import { BookOpen, Users, Clock } from 'lucide-react';

const CourseContent = () => {
  const contents = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Umfassendes Lernen",
      description: "Meistere verschiedene Trage-Techniken und Positionen für jedes Alter",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Praktische Übungen",
      description: "Interaktive Sitzungen mit erfahrenen Instruktoren",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexibler Zeitplan",
      description: "4-wöchiger Kurs mit Online- und Präsenzoptionen",
    },
  ];


  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Kursinhalte
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contents.map((item, index) => (
            <div 
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300 rounded-lg"
            >
              <div className="flex justify-center mb-4 text-primary">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;