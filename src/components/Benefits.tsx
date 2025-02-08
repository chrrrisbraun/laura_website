import React, { useState, useRef, useEffect } from "react";
import { Heart, Brain, Smile, Baby } from "lucide-react";
import { motion } from "framer-motion";
import { Table } from "./ui/table";

const benefits = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Stärkt die Bindung",
    description: "Fördert eine sichere Bindung und emotionale Verbindung",
    expandedText:
      "Mit einem Tragetuch trägst du dein Baby nicht nur körperlich, sondern auch emotional ganz nah bei dir. Die Nähe beruhigt, stärkt das Urvertrauen und sorgt für eine engere Bindung.",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Unterstützt die Entwicklung",
    description: "Verbessert die kognitive und körperliche Entwicklung",
    expandedText:
      "Das Tragetuch unterstützt die natürliche Anhock-Spreiz-Haltung, was die gesunde Hüftentwicklung fördert. Gleichzeitig stimulieren Bewegung und Nähe die Sinneswahrnehmung.",
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Komfort & Sicherheit",
    description: "Bietet eine sichere und beruhigende Umgebung",
    expandedText:
      "Ein Tragetuch gibt dir Bewegungsfreiheit, während dein Baby sicher und geborgen ist. Es sorgt für eine ergonomische Haltung und beugt Rückenschmerzen vor.",
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Freihändige Betreuung",
    description: "Freiheit, sich zu bewegen, während das Baby nah bleibt",
    expandedText:
      "Mit freien Händen kannst du dich um den Haushalt kümmern, spazieren gehen oder einkaufen – dein Baby bleibt dabei sicher und nah an deinem Körper.",
  },
];

const Benefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const contentRefs = useRef([]);

  // Berechnet die maximale Höhe aller Boxen
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (contentRefs.current.length > 0) {
      const heights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
      setMaxHeight(Math.max(...heights) + 100); // Zusätzlicher Platz für Komfort
    }
  }, []);

  return (
    <motion.section
      className="py-20 bg-secondary relative transition-all duration-500 ease-in-out"
      style={{ minHeight: maxHeight + 350 }} // Feste Höhe der Section
    >
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Vorteile von Babytragetüchern
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 flex flex-col items-center"
              animate={{
                scale: hoveredIndex === index ? 1.05 : 1,
              }}
              layout
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ minHeight: maxHeight }} // Fixierte Höhe für alle Boxen
            >
              <div className="flex justify-center mb-4 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>

              <motion.div
                ref={(el) => (contentRefs.current[index] = el)}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 10,
                }}
                className={`mt-4 text-gray-700 text-sm text-center overflow-hidden ${
                  hoveredIndex === index ? "h-auto" : "h-0"
                }`}
                layout
              >
                {benefit.expandedText}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <Table />
      </div>
    </motion.section>
  );
};

export default Benefits;
