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
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Get the individual experience or join the course with your friends! Whether you prefer one-on-one guidance or learning in a group setting, we're here to support your baby-wearing journey.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about your preferences (individual/group session)"
                />
              </div>
            </div>
            
            <Button className="w-full">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;