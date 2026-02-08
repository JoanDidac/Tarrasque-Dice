import React from "react";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
    return (
        <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden font-sans">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 animate-slow-zoom"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
            >
                {/* Subtle overlay to Ensure text readability on both light/dark images */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center mt-20">

                <span className="text-white text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium mb-3 md:mb-5 drop-shadow-md">
                    Final Drop of the Year
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal text-white uppercase tracking-[0.15em] mb-10 drop-shadow-lg">
                    Holiday 2025
                </h1>

                <button className="bg-white text-black px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors shadow-lg">
                    Show Me The Dice
                </button>
            </div>

            {/* Instagram Link */}
            <a
                href="https://instagram.com/terrasquedice"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-8 right-8 z-20 text-white/60 hover:text-white flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] transition-colors"
            >
                <span>@TerrasqueDice</span>
                <div className="w-px h-3 bg-white/40"></div>
                <span>Follow Us</span>
            </a>

        </section>
    );
};

export default Hero;
