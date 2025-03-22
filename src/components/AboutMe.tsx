import React from 'react';
import TiltedCard from './TiltedCard';

const AboutMe = () => {
  return (
    <section className="pb-40 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <TiltedCard
              imageSrc="/Laura.jpeg"
              altText="Laura Braun"
              containerHeight="400px"
              containerWidth="w-full max-w-md mx-auto"
              imageHeight="500px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              
            />
  
            {/* <img
              src="/Laura.jpeg"
              alt="Course Leader"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            /> */}
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Über mich
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Hi, ich bin <h2L className="text-xl text-orange font-semibold">Laura</h2L> und freue mich sehr euch und euer Baby durch die Welt des Tragens zu begleiten!
            Seit 7 Jahren betreue ich bereits Familien auf einer neonatologischen Intensivstation und konnte dabei 
            die vielen positiven Auswirkungen von Tragen der Früh- und Neugeborenen mit ihren Bezugspersonen beobachten. 
            <br></br><br></br>Jetzt möchte ich gerne mein Wissen und meine Erfahrungen zu euch nach Hause bringen um mit einer individuellen 
            Trageberatung nicht nur euren Alltag zu erleichtern, sondern auch die Entwicklung eures Kindes optimal zu unterstützen! 

            </p>
            <p className="text-xl text-orange font-semibold">
              Qualifikationen 
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>⁠Gesundheits- und Kinderkrankenpflegerin für pädiatrische Intensiv- und Anästhesiepflege</li> 
            <li>⁠EFIB®-Zertifizierung (Entwicklungsfördernde Inddividuelle Familienzentrierte Betreuung Früh- und Neugeborener)</li> 
            <li>⁠Zertifizierte Trageberaterin nach Akompani</li> 
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;