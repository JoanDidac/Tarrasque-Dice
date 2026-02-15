import { ArrowLeft } from "lucide-react";

export type CollaborationSlug =
    | "fallout-inspired"
    | "vox-machina"
    | "the-mighty-nein"
    | "hazbin-hotel"
    | "onyxstorm"
    | "malkavian"
    | "denia";

interface CollaborationData {
    title: string;
    description: string;
    instagramId: string;
    type: "reel" | "p";
}

const collaborations: Record<CollaborationSlug, CollaborationData> = {
    "fallout-inspired": {
        title: "Fallout Inspired",
        description: "Survive the nuclear wasteland in style. These custom artisan dice are forged from the remnants of the old world, perfect for your next post-apocalyptic campaign. Roll for survival, Vault Dweller.",
        instagramId: "DUWd0OrDmr5",
        type: "reel"
    },
    "vox-machina": {
        title: "Vox Machina",
        description: "Roll for initiative with the legendary heroes of Exandria. A collection inspired by the chaos, courage, and sheer audacity of Tal'Dorei's finest adventuring party.",
        instagramId: "DTdrRz0CLtW",
        type: "reel"
    },
    "the-mighty-nein": {
        title: "The Mighty Nein",
        description: "Leave your legacy in Wildemount. These finely crafted dice capture the essence of the Nein—complex, powerful, and bound together by destiny and a little bit of chaos.",
        instagramId: "DSlDwVtjsXm",
        type: "reel"
    },
    "hazbin-hotel": {
        title: "Hazbin Hotel",
        description: "Sinfully beautiful dice forged in the fires of the Pride Ring. Whether you're seeking redemption or just looking to cause a little mayhem, these dice are dressed to impress.",
        instagramId: "DSYOZFUDlvM",
        type: "reel"
    },
    "onyxstorm": {
        title: "OnyxStorm",
        description: "Channel the primal power of dragons and shadow magic. The OnyxStorm collection features deep, swirling patterns and striking contrasts designed for the most intense encounters.",
        instagramId: "DR2HGExiO5G",
        type: "reel"
    },
    "malkavian": {
        title: "Malkavian",
        description: "Embrace the madness. Shattered internal patterns and blood-red hues reflect the chaotic insight of the Clan of the Moon. Perfect for your next Vampire: The Masquerade chronicle.",
        instagramId: "DRNi2xrjgOy",
        type: "p"
    },
    "denia": {
        title: "Denia",
        description: "A collection of mystical elegance, capturing the serene beauty and ancient magic of untouched realms. Roll with the grace of the fae and the power of nature.",
        instagramId: "DRLFhRhCANe",
        type: "p"
    }
};

interface CollaborationPageProps {
    slug: CollaborationSlug;
    onBack: () => void;
}

const CollaborationPage = ({ slug, onBack }: CollaborationPageProps) => {
    const data = collaborations[slug];

    if (!data) {
        return (
            <div className="pt-32 pb-24 px-6 min-h-[70vh] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-cinzel mb-4">Collaboration Not Found</h1>
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="pt-[140px] lg:pt-[160px] pb-24 px-6 md:px-12 bg-background min-h-screen">
            <div className="container mx-auto max-w-6xl">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
                >
                    <ArrowLeft size={16} />
                    Back to Collections
                </button>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    {/* Left: Instagram Embed */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[400px] bg-white rounded-lg overflow-hidden shadow-2xl border border-border/20 relative" style={{ minHeight: '600px' }}>
                            <iframe
                                src={`https://www.instagram.com/${data.type}/${data.instagramId}/embed`}
                                width="400"
                                height="600"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency={true}
                                allow="encrypted-media"
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right: Product Details & Lore */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-12">
                        <div className="mb-2 inline-block">
                            <span className="text-xs tracking-[0.3em] uppercase text-muted border border-border/50 px-3 py-1 rounded-full">
                                Exclusive Collaboration
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel mb-8 text-foreground leading-tight mt-4">
                            {data.title}
                        </h1>

                        <div className="h-px w-24 bg-foreground/20 mb-8"></div>

                        <p className="text-muted/90 text-sm md:text-base leading-relaxed mb-12 font-light max-w-md">
                            {data.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                            <button className="flex-1 bg-foreground text-background py-4 px-8 text-sm uppercase tracking-widest font-medium hover:bg-foreground/90 transition-colors">
                                Shop Collection
                            </button>
                            <button className="flex-1 border border-border py-4 px-8 text-sm uppercase tracking-widest font-medium hover:bg-foreground/5 transition-colors">
                                View Details
                            </button>
                        </div>

                        <div className="mt-16 border-t border-border/30 pt-8 max-w-md">
                            <div className="flex justify-between text-xs tracking-widest uppercase text-muted mb-4">
                                <span>Material</span>
                                <span className="text-foreground">Artisan Resin</span>
                            </div>
                            <div className="flex justify-between text-xs tracking-widest uppercase text-muted mb-4">
                                <span>Includes</span>
                                <span className="text-foreground">Standard 7-Piece Set</span>
                            </div>
                            <div className="flex justify-between text-xs tracking-widest uppercase text-muted">
                                <span>Edition</span>
                                <span className="text-foreground">Limited Run</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollaborationPage;
