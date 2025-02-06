import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/Laura.jpeg"
              alt="Course Leader"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Eure Kursleiterin
            </h2>
            <h3 className="text-xl text-primary font-semibold">
              Laura Braun
            </h3>
            <p className="text-gray-600 leading-relaxed">
            Als  Krankenschwester mit über 10 Jahren Erfahrung in der Betreuung von Müttern und Säuglingen liegt mir am Herzen, 
            Eltern dabei zu helfen, durch sicheres Tragen eine starke Bindung zu ihrem Baby aufzubauen. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Zusätzliche Erfahrung:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Zertifizierte Trageberaterin (CBC)</li>
            <li>International Board Certified Lactation Consultant (IBCLC) – Internationale Stillberaterin</li>
            <li>Examinierte Krankenschwester mit Spezialisierung auf Mutter-Kind-Gesundheit</li>
            <li>Erweiterte Zertifizierung als Tragepädagogin</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
            Ich glaube, dass jeder Elternteil individuelle Unterstützung auf seiner Trage-Reise verdient.  
            In meinen Kursen kombiniere ich medizinisches Wissen mit praktischer Erfahrung,  
            damit du dich sicher und selbstbewusst fühlst, wenn du dein Baby trägst.  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;