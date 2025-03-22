import React from "react";
import { FaUser, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className="py-12 bg-graygreen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Tragekurs – Unsere Angebote
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Einzelkurs */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <FaUser className="text-5xl text-peach" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Einzelberatung
            </h3>
            <p className="text-gray-600 mb-4 h-12">
              Individueller Kurs bei dir zu Hause – perfekt auf euch abgestimmt.
            </p>
            <p className="text-3xl font-bold text-gray mb-2">80€ / Stunde</p>
            <p className="text-sm text-gray-500 mb-6">Dauer: ca. 1,5 Stunden</p>
            <div className="flex items-center justify-center text-gray-700 text-sm">
              <FaMapMarkerAlt className="mr-2" />
              <p>Außerhalb Münchens: Anfahrtskosten-Pauschale</p>
            </div>
            <button className="mt-6 bg-graygreen text-white px-6 py-3 rounded-lg hover:bg-green transition">
              Jetzt Buchen
            </button>
          </div>

          {/* Gruppenkurs */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <FaUsers className="text-5xl text-peach" />
            </div>
            <h3 className="text-2xl font-semibold text-gray mb-4">
              Gruppenkurs
            </h3>
            <p className="text-gray-600 mb-4 h-12">
              Buche mit befreundeten Eltern und spart gemeinsam.
            </p>
            <p className="text-3xl font-bold text-gray mb-2">100€ / Stunde</p>
            <p className="text-sm text-gray-500 mb-6">Dauer: ca. 1,5 Stunden</p>
            <div className="flex items-center justify-center text-gray-700 text-sm">
              <FaMapMarkerAlt className="mr-2" />
              <p>Außerhalb Münchens: Anfahrtskosten-Pauschale</p>
            </div>
            <button className="mt-6 bg-graygreen text-white px-6 py-3 rounded-lg hover:bg-green transition">
              Jetzt Buchen
            </button>
          </div>
        </div>
        <div className="shadow-lg w-full rounded-lg p-8 text-center">
            <p className="text-white">Sollte die Beratung auch mal 20 Minuten länger dauert, müsst ihr euch keine Sorgen machen, dass jede Minute mitgezählt wird. Uns ist wichtig, dass ihr selbstbewusst aus der Beratung geht.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
