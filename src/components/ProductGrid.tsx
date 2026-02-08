import React, { useState } from "react";
import { ChevronDown, Heart, SlidersHorizontal } from "lucide-react";
import dogAdventurerImg from "../assets/products/dog-adventurer-dice.png";
import stormySeasImg from "../assets/products/stormy-seas-dice.png";
import terraformImg from "../assets/products/terraform-dice.png";
import sirensTearsImg from "../assets/products/sirens-tears-dice.png";
import celestialPaladinImg from "../assets/products/celestial-paladin-dice.png";
import voidWalkerImg from "../assets/products/void-walker-dice.png";
import rubyFireballImg from "../assets/products/ruby-fireball-dice.png";
import sapphireOceanImg from "../assets/products/sapphire-ocean-dice.png";

// Mock Data
const PRODUCTS = [
    {
        id: 1,
        name: "Dog Adventurer 7-Piece Iconic Dice Set",
        price: 85.00,
        image: dogAdventurerImg,
        isNew: true,
    },
    {
        id: 2,
        name: "Stormy Seas 7-Piece Liquid Core Set",
        price: 95.00,
        image: stormySeasImg,
        isNew: true,
    },
    {
        id: 3,
        name: "Alien Worlds 7-Piece Terraform Set",
        price: 85.00,
        image: terraformImg,
        isNew: false,
    },
    {
        id: 4,
        name: "Siren's Tears 7-Piece Iridescent Set",
        price: 70.00,
        image: sirensTearsImg,
        isNew: false,
    },
    // Duplicates for grid visuals
    { id: 5, name: "Celestial Paladin 7-Piece Set", price: 65.00, image: celestialPaladinImg, isNew: false },
    { id: 6, name: "Void Walker Sharp Edge Set", price: 75.00, image: voidWalkerImg, isNew: false },
    { id: 7, name: "Ruby Fireball Resin Set", price: 55.00, image: rubyFireballImg, isNew: false },
    { id: 8, name: "Sapphire Ocean Liquid Core", price: 95.00, image: sapphireOceanImg, isNew: true },
];

const FILTERS = [
    "Product Type", "Color", "Ink Color", "Dice Style", "Collection", "Dispel X"
];

const ProductGrid = ({ onProductClick }: { onProductClick: (id: number) => void }) => {
    // State for collapsible filters (tracking open indices)
    const [openFilters, setOpenFilters] = useState<number[]>([]);
    const toggleFilter = (index: number) => {
        setOpenFilters(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="font-sans text-foreground pb-20">

            {/* Top Bar */}
            <div className="border-b border-border py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between sticky top-[60px] md:top-[85px] z-30 bg-background/95 backdrop-blur-sm">
                <div className="w-full md:w-1/3"></div> {/* Spacer for alignment */}

                <span className="text-xs uppercase tracking-[0.15em] font-medium text-foreground/70">
                    {PRODUCTS.length} Products
                </span>

                <div className="w-full md:w-1/3 flex justify-end">
                    <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-foreground/70 transition-colors">
                        Sort By <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mt-10 flex gap-12 text-sm">

                {/* Left Sidebar */}
                <aside className="hidden lg:block w-64 shrink-0 space-y-8">

                    {/* In Stock Toggle */}
                    <div className="flex items-center gap-3 pb-8 border-b border-border/40">
                        <div className="w-9 h-5 bg-border rounded-full relative cursor-pointer hover:bg-muted transition-colors">
                            <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                        </div>
                        <span className="text-xs uppercase tracking-widest text-foreground/60">In stock only</span>
                    </div>

                    {/* Filter Categories */}
                    <div className="space-y-1">
                        {FILTERS.map((filter, idx) => (
                            <div key={filter} className="border-b border-border/40">
                                <button
                                    onClick={() => toggleFilter(idx)}
                                    className="w-full flex items-center justify-between py-4 text-[11px] uppercase tracking-[0.15em] font-medium text-foreground hover:text-foreground/70 transition-colors"
                                >
                                    {filter}
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-300 ${openFilters.includes(idx) ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {/* Collapsible Content */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFilters.includes(idx) ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-foreground/60 text-xs py-2">
                                        {/* Placeholder filter items */}
                                        <label className="flex items-center gap-2 mb-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="accent-foreground" /> Option 1</label>
                                        <label className="flex items-center gap-2 cursor-pointer hover:text-foreground"><input type="checkbox" className="accent-foreground" /> Option 2</label>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
                        {PRODUCTS.map((product) => (
                            <div key={product.id} onClick={() => onProductClick(product.id)} className="group cursor-pointer block">
                                {/* Image Container */}
                                <div className="relative aspect-square bg-[#F5F5F7] mb-6 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />

                                    {/* Heart Icon (Top Right) */}
                                    <button className="absolute top-3 right-3 text-foreground/40 hover:text-red-500 hover:fill-red-500 transition-colors opacity-0 group-hover:opacity-100 duration-300 z-10" onClick={(e) => e.stopPropagation()}>
                                        <Heart size={20} strokeWidth={1} />
                                    </button>

                                    {/* New Badge (Optional, inferred from context) */}
                                    {product.isNew && (
                                        <span className="absolute top-3 left-3 bg-white/90 text-[9px] font-bold uppercase tracking-widest px-2 py-1">New</span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="text-center px-2">
                                    <h3 className="text-[11px] uppercase tracking-[0.1em] leading-relaxed font-medium text-foreground mb-2 group-hover:text-foreground/70 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-[11px] tracking-widest text-foreground/60">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductGrid;
