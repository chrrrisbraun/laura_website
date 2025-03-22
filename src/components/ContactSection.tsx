import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_n86ucyq",
        "template_08tlehh",
        e.currentTarget,
        "ZM5oDED2aK3nD7dVi"
      )
      .then(
        () => {
          setStateMessage("Nachricht wurde versendet!");
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        },
        () => {
          setStateMessage("Nachricht konnte nicht versendet werden.");
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <section className="relative bg-gray-100">
      {/* Oberer Bereich mit Hintergrundfarbe */}
      <div className="bg-peach h-80 w-full px-12 flex flex-col items-start justify-center">
        <h2 className="text-3xl font-semibold text-white">Kontakt</h2>
        <h3 className="text-1xl font-light text-white w-80">Schreibe mir gerne eine Nachricht und wir können alle Fragen klären und einen passenden Termin finden! </h3>
      </div>

      {/* Unterer Bereich mit "Our Location" und "How Can We Help?" */}
      <div className="container mx-auto px-8 py-12 h-80 flex flex-col md:flex-row gap-12">
        <div className="flex-1 flex flex-col md:flex-row gap-12">
          <div>
            <h3 className="text-lg font-semibold">Wie kann ich dir helfen?</h3>
            <p className="text-gray-600">laura@tragekurs-braun.de</p>
            <p className="text-gray-600">0173 40922849</p>
          </div>
        </div>
      </div>

      {/* Kontaktformular (schwebend) */}
      <div className="absolute top-10 right-20 transform -translate-x-0 w-full max-w-lg bg-white shadow-lg rounded-lg p-8 my-10">
        <h3 className="text-xl font-semibold mb-4">Schreibe mir eine Nachricht</h3>
        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Dein Name" required className="border-0 border-b-2" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="Deine Email" required className="border-0 border-b-2"/>
          </div>
          <div>
            <Label htmlFor="message">Nachricht</Label>
            <textarea
              id="message"
              name="message"
              className="w-full min-h-[100px] border-b-2 rounded-md p-2"
              placeholder="Gib deine Nachricht hier ein"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-graygreen hover:bg-green" disabled={isSubmitting}>
            {isSubmitting ? "Sendet..." : "Nachricht senden"}
          </Button>
          {stateMessage && <p className="text-center text-sm mt-2">{stateMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
