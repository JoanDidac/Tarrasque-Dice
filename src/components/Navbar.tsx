import React, { useState } from "react";
import { Search, ShoppingBag, User, Heart, ChevronDown, Menu, X } from "lucide-react";

import logo from "../assets/terrasque-logo.png";

const Navbar = ({ onLogoClick }: { onLogoClick: () => void }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "New Releases", href: "#", hasDropdown: false },
        {
            name: "Dice",
            href: "#",
            hasDropdown: true,
            items: [
                "Standard", "Iconic", "Iridescent", "Chonk", "Jewel",
                "Liquid Core", "Palette", "Glow In The Dark", "Terraform", "All Dice"
            ]
        },
        {
            name: "Accessories & More",
            href: "#",
            hasDropdown: true,
            items: ["Clothing", "Gaming", "View All"]
        },
        { name: "Collaborations", href: "#", hasDropdown: true },
        {
            name: "By Collection",
            href: "#",
            hasDropdown: true,
            items: [
                "Holiday 2025", "Black Friday 2025", "Something Wicked", "Gen Con 2025",
                "Anime Gourmet", "Sea Creatures", "Dark Fairytale", "Year of the Snake",
                "Winter 2024", "Black Friday 2024", "Into The Feywild", "Death by Ooze",
                "Cosmic", "All Collections"
            ]
        },
        { name: "Blog", href: "#", hasDropdown: false },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
            {/* Top Promo Bar */}
            <div className="bg-promo text-foreground/80 text-[10px] md:text-[11px] font-medium tracking-widest uppercase py-2.5 text-center px-4 w-full">
                Free Shipping Over $35 USD (US) & $225 USD (International)
            </div>

            {/* Main Navbar */}
            <nav className="bg-background border-b border-border/40 py-5 px-6 md:px-12 transition-colors duration-300">
                <div className="container mx-auto flex items-center justify-between">

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-foreground hover:text-foreground/70 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo (Left-aligned) */}
                    <div onClick={onLogoClick} className="flex flex-col items-center group cursor-pointer justify-center relative">
                        <img
                            src={logo}
                            alt="Terrasque Logo"
                            className="w-[60px] h-auto mb-[-2px] opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="text-sm tracking-[0.25em] font-light uppercase opacity-80 mt-[-2px] text-[#545454]" style={{ fontFamily: "'Uncial Antiqua', cursive", transform: "scaleX(0.75)" }}>TERRASQUE</span>
                    </div>

                    {/* Desktop Navigation (Center) */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group h-full flex items-center">
                                <a
                                    href={link.href}
                                    className="flex items-center gap-1.5 text-[11px] xl:text-xs font-light uppercase tracking-widest text-[#A9A9A9] hover:text-black transition-colors py-4 relative"
                                >
                                    {link.name}
                                    <span className="absolute bottom-2 left-0 w-0 h-[0.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                                    {link.hasDropdown && (
                                        <ChevronDown size={10} className="text-muted group-hover:text-foreground transition-colors" />
                                    )}
                                </a>

                                {/* Dropdown Menu */}
                                {link.items && (
                                    <div className="absolute top-full left-0 w-48 bg-background border border-border shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-3 mt-0">
                                        {link.items.map((item) => (
                                            <a
                                                key={item}
                                                href="#"
                                                className="text-[13px] text-foreground/80 hover:text-foreground hover:bg-foreground/5 py-2.5 px-6 text-left transition-colors font-sans normal-case tracking-normal block"
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-5 md:gap-6 text-foreground">
                        <button className="hover:text-foreground/60 transition-colors">
                            <User size={20} strokeWidth={1.5} />
                        </button>
                        <button className="hover:text-foreground/60 transition-colors">
                            <Search size={20} strokeWidth={1.5} />
                        </button>
                        <button className="hover:text-foreground/60 transition-colors hidden sm:block">
                            <Heart size={20} strokeWidth={1.5} />
                        </button>
                        <button className="hover:text-foreground/60 transition-colors relative">
                            <ShoppingBag size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div >

                {/* Mobile Menu Overlay */}
                {
                    isMobileMenuOpen && (
                        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-6 lg:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 h-[100vh]">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center justify-between text-sm uppercase tracking-widest font-light text-[#A9A9A9] hover:text-black py-3 border-b border-border/20"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </a>
                            ))}
                        </div>
                    )
                }
            </nav >
        </div >
    );
};

export default Navbar;
