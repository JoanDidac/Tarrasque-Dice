import { useState } from "react";
import { Heart, ChevronDown, ChevronUp, Share2, Info } from "lucide-react";

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

const PRODUCTS = [
    { id: 1, name: "Blue Storm 7-Piece Sharp Edge Set", price: 85.00, image: blueStormImg },
    { id: 2, name: "Emerald Shadow 7-Piece Artisan Set", price: 95.00, image: emeraldShadowImg },
    { id: 3, name: "Crimson Core Liquid Center Die", price: 45.00, image: crimsonCoreImg },
    { id: 4, name: "Amber Glow Percentile Dice", price: 85.00, image: amberPercentileImg },
    { id: 5, name: "Ocean Depths 7-Piece Swirl Set", price: 78.00, image: oceanDepthsImg },
    { id: 6, name: "Forest Guardian Sharp Edge Set", price: 72.00, image: forestGuardianImg },
    { id: 7, name: "Crystal Clarity 7-Piece Resin Set", price: 68.00, image: crystalClarityImg },
    { id: 8, name: "Magenta & Gold 7-Piece Resin Set", price: 70.00, image: magentaGoldImg },
    { id: 9, name: "Golden Ember Inclusion Set", price: 88.00, image: goldenEmberImg },
    { id: 10, name: "Shadow Smoke 7-Piece Dark Set", price: 82.00, image: shadowSmokeImg },
    { id: 11, name: "Arcane Surge Metallic Edge Set", price: 90.00, image: arcaneSurgeImg },
    { id: 12, name: "Dark Forest 7-Piece Nature Set", price: 76.00, image: darkForestImg },
    { id: 13, name: "Void Amethyst 7-Piece Set", price: 65.00, image: voidAmethystImg },
    { id: 14, name: "Blood Ruby Sharp Edge Set", price: 92.00, image: bloodRubyImg },
    { id: 15, name: "Nebula Spark Resin Set", price: 55.00, image: nebulaSparkImg },
    { id: 16, name: "Inferno Resin Liquid Core", price: 98.00, image: infernoResinImg },
    { id: 17, name: "Jade Whisper 7-Piece Pastel Set", price: 60.00, image: jadeWhisperImg },
    { id: 18, name: "Obsidian Flame Sharp Edge Set", price: 88.00, image: obsidianFlameImg },
    { id: 19, name: "Midnight Oil 7-Piece Dark Set", price: 74.00, image: midnightOilImg },
    { id: 20, name: "Teal Mystic Sharp Edge Set", price: 75.00, image: tealMysticImg },
    { id: 21, name: "Violet Storm Artisan Set", price: 89.00, image: violetStormImg },
    { id: 22, name: "Sapphire Veins Liquid Core", price: 55.00, image: sapphireVeinsImg },
    { id: 23, name: "Royal Purple 7-Piece Artisan Set", price: 95.00, image: royalPurpleImg },
    { id: 24, name: "Prism Shift 7-Piece Rainbow Set", price: 82.00, image: prismShiftImg },
    { id: 25, name: "Rose Quartz Sharp Edge Set", price: 78.00, image: roseQuartzImg },
    { id: 26, name: "Seafoam Dream 7-Piece Pastel Set", price: 70.00, image: seafoamDreamImg },
    { id: 27, name: "Amethyst Glow Inclusion Set", price: 86.00, image: amethystGlowImg },
    { id: 28, name: "Stardust 7-Piece Cosmic Set", price: 92.00, image: stardustImg },
    { id: 29, name: "Frosted Silver Iridescent Set", price: 80.00, image: frostedSilverImg },
];

const ProductPage = ({ id, onBack }: { id: number | null, onBack: () => void }) => {
    const product = PRODUCTS.find(p => p.id === id);
    const [openAccordion, setOpenAccordion] = useState<string | null>("shipping");

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    // Determine button text based on price or availability logic (mocked)
    const isSoldOut = false; // Toggle this to test logic if needed

    return (
        <section className="font-sans text-foreground pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-foreground/70 transition-colors"
            >
                <ChevronDown className="rotate-90" size={16} /> Back to Shop
            </button>

            <div className="flex flex-col lg:flex-row gap-16">

                {/* Left Column: Image Gallery */}
                <div className="w-full lg:w-3/5">
                    <div className="bg-[#F5F5F7] aspect-square w-full rounded-sm overflow-hidden mb-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover mix-blend-multiply"
                        />
                    </div>
                    {/* Thumbnail placeholder */}
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`w-24 h-24 bg-[#F5F5F7] shrink-0 cursor-pointer border ${i === 1 ? 'border-foreground' : 'border-transparent'}`}>
                                <img src={product.image} className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="w-full lg:w-2/5 space-y-8">

                    {/* Title & Price */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-medium tracking-widest uppercase leading-snug mb-4">
                            {product.name}
                        </h1>
                        <p className="text-xl tracking-widest font-light text-foreground/80">
                            ${product.price.toFixed(2)}
                        </p>
                        <p className="text-xs text-foreground/50 mt-2">
                            Pay in 4 interest-free installments of ${(product.price / 4).toFixed(2)} with <span className="font-bold">shop</span>
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4">
                        <button className="w-full bg-foreground text-background py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-foreground/90 transition-colors">
                            {isSoldOut ? "Sold Out" : "Add to Cart"}
                        </button>

                        <div className="flex gap-4">
                            <button className="flex-1 border border-border py-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest hover:bg-muted transition-colors">
                                <Heart size={16} /> Add to Wishlist
                            </button>
                            <button className="flex-1 border border-border py-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest hover:bg-muted transition-colors">
                                <Share2 size={16} /> Share
                            </button>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="text-sm leading-relaxed text-foreground/70 space-y-4">
                        <p>
                            Like a storm brewing on the horizon, this set captures the raw power of nature.
                            Swirling resins dance with light, creating a depth that draws the eye and holds it captive.
                            Perfect for your next campaign where the stakes are high and the rolls matter.
                        </p>

                        <div className="bg-muted/30 p-6 rounded-sm border border-border/50 mt-6">
                            <h4 className="uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-2">
                                <Info size={14} /> Product Features
                            </h4>
                            <ul className="list-disc pl-4 space-y-2 text-xs">
                                <li>Sharp-edge resin dice for precise rolling.</li>
                                <li>Hand-polished to a mirror finish.</li>
                                <li>Includes signature velvet carrying pouch.</li>
                                <li>Standard 7-piece RPG set (D4, D6, D8, D10, D12, D20, D%).</li>
                            </ul>
                        </div>

                        <div className="bg-red-50/50 border border-red-100 p-4 text-xs text-red-800/70 mt-4">
                            <span className="font-bold">WARNING:</span> Choking Hazard - Small Parts. Not for children under 3 years. Sharp edges - handle with care.
                        </div>
                    </div>

                    {/* Accordions */}
                    <div className="border-t border-border pt-2">
                        {['Shipping Information', 'Returns & Refunds'].map((item) => (
                            <div key={item} className="border-b border-border">
                                <button
                                    onClick={() => setOpenAccordion(openAccordion === item ? null : item)}
                                    className="w-full flex items-center justify-between py-4 text-[10px] uppercase tracking-[0.15em] font-bold hover:text-foreground/70"
                                >
                                    {item}
                                    {openAccordion === item ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === item ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-xs text-foreground/60 leading-relaxed">
                                        Standard shipping takes 5-7 business days. International options available at checkout.
                                        We accept returns within 30 days of delivery in original condition.
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

export default ProductPage;
