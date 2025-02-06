import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const ContactSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Kontakt
            </h2>
            <p className="text-lg text-gray-600">
            Erlebe eine individuelle Beratung oder nimm gemeinsam mit deinen Freunden am Kurs teil! Egal, ob du persönliche Begleitung bevorzugst oder lieber in der Gruppe lernst – wir sind da, um dich auf deiner Trage-Reise zu unterstützen!
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Dein Name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Deine Email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <textarea 
                  id="message" 
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Gib hier gerne bescheid ob du in einer Gruppe oder lieber alleine teilnehmen möchtest und wann du Zeit hast."
                />
              </div>
            </div>
            
            <Button className="w-full">
              Nachricht senden
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;