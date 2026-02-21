import { useState } from "react";
import { ChevronDown, Heart } from "lucide-react";

// Product images — Real Instagram product photos
import blueStormImg from "../assets/products/blue-storm-dice.png";
import emeraldShadowImg from "../assets/products/emerald-shadow-dice.png";
import crimsonCoreImg from "../assets/products/crimson-core-dice.png";
import amberPercentileImg from "../assets/products/amber-percentile-dice.png";
import oceanDepthsImg from "../assets/products/ocean-depths-dice.png";
import forestGuardianImg from "../assets/products/forest-guardian-dice.png";
import crystalClarityImg from "../assets/products/crystal-clarity-dice.png";
import magentaGoldImg from "../assets/products/magenta-gold-dice.png";
import goldenEmberImg from "../assets/products/golden-ember-dice.png";
import shadowSmokeImg from "../assets/products/shadow-smoke-dice.png";
import arcaneSurgeImg from "../assets/products/arcane-surge-dice.png";
import darkForestImg from "../assets/products/dark-forest-dice.png";
import voidAmethystImg from "../assets/products/void-amethyst-dice.png";
import bloodRubyImg from "../assets/products/blood-ruby-dice.png";
import nebulaSparkImg from "../assets/products/nebula-spark-dice.png";
import infernoResinImg from "../assets/products/inferno-resin-dice.png";
import jadeWhisperImg from "../assets/products/jade-whisper-dice.png";
import obsidianFlameImg from "../assets/products/obsidian-flame-dice.png";
import midnightOilImg from "../assets/products/midnight-oil-dice.png";
import tealMysticImg from "../assets/products/teal-mystic-dice.png";
import violetStormImg from "../assets/products/violet-storm-dice.png";
import sapphireVeinsImg from "../assets/products/sapphire-veins-dice.png";
import royalPurpleImg from "../assets/products/royal-purple-dice.png";
import prismShiftImg from "../assets/products/prism-shift-dice.png";
import roseQuartzImg from "../assets/products/rose-quartz-dice.png";
import seafoamDreamImg from "../assets/products/seafoam-dream-dice.png";
import amethystGlowImg from "../assets/products/amethyst-glow-dice.png";
import stardustImg from "../assets/products/stardust-dice.png";
import frostedSilverImg from "../assets/products/frosted-silver-dice.png";

// Full product catalog — 29 artisan dice sets
const PRODUCTS = [
    { id: 1, name: "Blue Storm 7-Piece Sharp Edge Set", price: 85.00, image: blueStormImg, isNew: true },
    { id: 2, name: "Emerald Shadow 7-Piece Artisan Set", price: 95.00, image: emeraldShadowImg, isNew: true },
    { id: 3, name: "Crimson Core Liquid Center Die", price: 45.00, image: crimsonCoreImg, isNew: false },
    { id: 4, name: "Amber Glow Percentile Dice", price: 85.00, image: amberPercentileImg, isNew: false },
    { id: 5, name: "Ocean Depths 7-Piece Swirl Set", price: 78.00, image: oceanDepthsImg, isNew: false },
    { id: 6, name: "Forest Guardian Sharp Edge Set", price: 72.00, image: forestGuardianImg, isNew: false },
    { id: 7, name: "Crystal Clarity 7-Piece Resin Set", price: 68.00, image: crystalClarityImg, isNew: false },
    { id: 8, name: "Magenta & Gold 7-Piece Resin Set", price: 70.00, image: magentaGoldImg, isNew: false },
    { id: 9, name: "Golden Ember Inclusion Set", price: 88.00, image: goldenEmberImg, isNew: true },
    { id: 10, name: "Shadow Smoke 7-Piece Dark Set", price: 82.00, image: shadowSmokeImg, isNew: false },
    { id: 11, name: "Arcane Surge Metallic Edge Set", price: 90.00, image: arcaneSurgeImg, isNew: true },
    { id: 12, name: "Dark Forest 7-Piece Nature Set", price: 76.00, image: darkForestImg, isNew: false },
    { id: 13, name: "Void Amethyst 7-Piece Set", price: 65.00, image: voidAmethystImg, isNew: false },
    { id: 14, name: "Blood Ruby Sharp Edge Set", price: 92.00, image: bloodRubyImg, isNew: true },
    { id: 15, name: "Nebula Spark Resin Set", price: 55.00, image: nebulaSparkImg, isNew: false },
    { id: 16, name: "Inferno Resin Liquid Core", price: 98.00, image: infernoResinImg, isNew: true },
    { id: 17, name: "Jade Whisper 7-Piece Pastel Set", price: 60.00, image: jadeWhisperImg, isNew: false },
    { id: 18, name: "Obsidian Flame Sharp Edge Set", price: 88.00, image: obsidianFlameImg, isNew: false },
    { id: 19, name: "Midnight Oil 7-Piece Dark Set", price: 74.00, image: midnightOilImg, isNew: false },
    { id: 20, name: "Teal Mystic Sharp Edge Set", price: 75.00, image: tealMysticImg, isNew: true },
    { id: 21, name: "Violet Storm Artisan Set", price: 89.00, image: violetStormImg, isNew: true },
    { id: 22, name: "Sapphire Veins Liquid Core", price: 55.00, image: sapphireVeinsImg, isNew: false },
    { id: 23, name: "Royal Purple 7-Piece Artisan Set", price: 95.00, image: royalPurpleImg, isNew: true },
    { id: 24, name: "Prism Shift 7-Piece Rainbow Set", price: 82.00, image: prismShiftImg, isNew: true },
    { id: 25, name: "Rose Quartz Sharp Edge Set", price: 78.00, image: roseQuartzImg, isNew: false },
    { id: 26, name: "Seafoam Dream 7-Piece Pastel Set", price: 70.00, image: seafoamDreamImg, isNew: false },
    { id: 27, name: "Amethyst Glow Inclusion Set", price: 86.00, image: amethystGlowImg, isNew: false },
    { id: 28, name: "Stardust 7-Piece Cosmic Set", price: 92.00, image: stardustImg, isNew: true },
    { id: 29, name: "Frosted Silver Iridescent Set", price: 80.00, image: frostedSilverImg, isNew: false },
];

const FILTERS = [
    "Color", "Ink Color", "Collaboration", "Collection"
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
