import { Heart, Brain, Smile, Baby } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { amount: 0.5 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxHeight = 200; // Beispielwert für die maximale Höhe eines Elements

  useEffect(() => {
    if (isInView) {
      controls.start((index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.3 },
      }));
    }
  }, [isInView, controls]);



  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-peach relative transition-all duration-500 ease-in-out"
      style={{ minHeight: 200}}
    >
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Vorteile von Babytragetüchern
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="relative bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 flex flex-col items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-center mb-4 text-darkgreen">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
              <motion.div
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
      </div>
    </motion.section>
  );
}

export default Benefits;