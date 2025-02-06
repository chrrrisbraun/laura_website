import React from 'react';
import { BookOpen, Users, Clock } from 'lucide-react';

const CourseContent = () => {
  const contents = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Learning",
      description: "Master different sling techniques and positions for every age",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hands-on Practice",
      description: "Interactive sessions with experienced instructors",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "4-week course with both online and in-person options",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Course Contents
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