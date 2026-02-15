import { useState } from "react";
import { Heart, ChevronDown, ChevronUp, Share2, Info } from "lucide-react";

// Asset imports (reuse from ProductGrid to avoid duplication if possible, 
// but for now re-importing is safer to ensure we have access)
import dogAdventurerImg from "../assets/products/dog-adventurer-dice.png";
import stormySeasImg from "../assets/products/stormy-seas-dice.png";
import terraformImg from "../assets/products/terraform-dice.png";
import sirensTearsImg from "../assets/products/sirens-tears-dice.png";
import celestialPaladinImg from "../assets/products/celestial-paladin-dice.png";
import voidWalkerImg from "../assets/products/void-walker-dice.png";
import rubyFireballImg from "../assets/products/ruby-fireball-dice.png";
import sapphireOceanImg from "../assets/products/sapphire-ocean-dice.png";

const PRODUCTS = [
    { id: 1, name: "Dog Adventurer 7-Piece Iconic Dice Set", price: 85.00, image: dogAdventurerImg },
    { id: 2, name: "Stormy Seas 7-Piece Liquid Core Set", price: 95.00, image: stormySeasImg },
    { id: 3, name: "Alien Worlds 7-Piece Terraform Set", price: 85.00, image: terraformImg },
    { id: 4, name: "Siren's Tears 7-Piece Iridescent Set", price: 70.00, image: sirensTearsImg },
    { id: 5, name: "Celestial Paladin 7-Piece Set", price: 65.00, image: celestialPaladinImg },
    { id: 6, name: "Void Walker Sharp Edge Set", price: 75.00, image: voidWalkerImg },
    { id: 7, name: "Ruby Fireball Resin Set", price: 55.00, image: rubyFireballImg },
    { id: 8, name: "Sapphire Ocean Liquid Core", price: 95.00, image: sapphireOceanImg },
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
