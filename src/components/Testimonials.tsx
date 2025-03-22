import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // FontAwesome Icons nutzen

const Testimonials = () => {
  const testimonials = [
    {
      text: "Der Tragekurs war eine absolute Bereicherung für mich und mein Baby! Ich war mir vorher unsicher, welches Tragesystem für uns das richtige ist, aber dank der geduldigen und fachkundigen Anleitung konnte ich verschiedene Modelle ausprobieren und die perfekte Lösung für uns finden. Besonders schön fand ich, dass auf meine individuellen Bedürfnisse eingegangen wurde. Jetzt kann ich meinen kleinen Schatz bequem und ergonomisch tragen – und er liebt es!",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      name: "Anna Morian",
    },
    {
      text: "Ich hatte schon eine Babytrage, aber irgendwie saß mein Kind nie richtig bequem darin. Im Kurs habe ich gelernt, wie ich die Trage optimal einstelle, damit sie sowohl für mein Baby als auch für meinen Rücken angenehm ist. Die Atmosphäre war entspannt, und es gab genug Zeit für Fragen. Besonders toll fand ich, dass auch auf verschiedene Trageweisen eingegangen wurde. Jetzt fühle ich mich viel sicherer beim Tragen!",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp",
      name: "Teresa May",
    },
    {
      text: "Der Tragekurs war super! Ich hatte immer Angst, dass ich mein Baby falsch trage und ihm schade. Die Kursleiterin hat mir alles genau gezeigt und mich ermutigt, verschiedene Varianten auszuprobieren. Jetzt genieße ich die Nähe zu meinem Baby noch mehr und kann den Alltag viel flexibler gestalten. Ich kann den Kurs jeder Mama (und jedem Papa!) nur empfehlen!",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      name: "Kate Allise",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Erfahrungsberichte</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={4000}
        transitionTime={500}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              className="absolute -left-4 top-1/2 transform translate-y-7 text-gray p-3 rounded-full hover:shadow-lg transition z-10"
              aria-label={label}
            >
              <FaChevronLeft size={24} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              className="absolute -right-4 top-1/2 transform translate-y-7 text-gray p-3 rounded-full hover:shadow-lg transition"
              aria-label={label}
            >
              <FaChevronRight size={24} />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index) => (
            <button
              key={index}
              onClick={onClickHandler}
              className={`mx-1 h-3 w-3 rounded-full transition ${
                isSelected ? "bg-gray w-3 h-3" : "bg-gray-400 hover:bg-gray-500"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          )}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-6 py-4">
            <p className="text-lg italic mb-4">"{testimonial.text}"</p>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full mx-auto max-w-[100px] max-h-[100px] object-contain"
            />
            <p className="mt-2 font-semibold pb-8">{testimonial.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
