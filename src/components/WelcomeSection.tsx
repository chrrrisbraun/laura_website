import React from "react";
import { FaBaby, FaHandsHelping, FaHeart, FaUsers, FaBook } from "react-icons/fa";

const WelcomeSection = () => {
    return (
        <div className="relative min-h-screen bg-[url('/public/mother.jpg')] bg-cover bg-center">
            {/* Normale Navigationsleiste */}
            <nav className="absolute top-20 right-20 flex flex-col space-y-1 py-8 z-50">
                {['Warum Tragen', 'Über mich', 'Kursangebot', 'Erfahrungsberichte', 'Kontakt'].map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-purpleaccent text-lg font-book relative py-0.5 border-b-2 border-peach
                                after:content-[''] after:absolute after:w-0 after:h-[15px] after:bg-peach 
                                after:left-0 after:-bottom-0 after:transition-all after:duration-300 
                                hover:after:w-full after:-z-10"
                    >
                        {item}
                    </a>
                ))}
            </nav>
            
            {/* Flower Pattern Bereich */}
            <div className="relative top-20 left-20 bg-cover bg-center rounded-2xl w-full max-w-4xl p-8">
                <h1 className="relative z-10 text-5xl font-bold text-gray">
                    <span className="tracking-[0.3em]">TRAGEKURS</span><br />
                    <span className="inline-block w-full text-left tracking-[0.45em] pt-3">MÜNCHEN</span>
                </h1>
                <h2 className="relative z-10 text-2xl text-gray font-light w-[500px] text-left tracking-[0.85em] py-2">
                    <span className="relative z-10">Laura Braun</span>
                    <span className="absolute inset-0 top-1/2 -translate-y-1/2 w-[200%] h-[150%] 
                                    bg-[url('/public/brush-peach.png')] bg-no-repeat bg-contain -z-10"></span>
                </h2>
            </div>
        </div>
    );
}

export default WelcomeSection;
