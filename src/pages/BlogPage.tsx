import { ArrowLeft, Sparkles, Wand2, Flame, Heart, Scroll } from "lucide-react";

interface BlogPageProps {
    onBack: () => void;
}

const BlogPage = ({ onBack }: BlogPageProps) => {
    return (
        <div className="pt-[140px] lg:pt-[160px] pb-32 px-6 md:px-12 bg-background min-h-screen relative overflow-hidden">

            {/* Playful magical background elements */}
            <div className="absolute top-40 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-40 right-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto max-w-4xl relative z-10">

                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12"
                >
                    <ArrowLeft size={16} />
                    Back to the Tavern
                </button>

                {/* Header Section */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center justify-center gap-3 text-amber-500 mb-4 animate-bounce-slow">
                        <Sparkles size={24} />
                        <span className="text-xs tracking-[0.3em] uppercase font-bold">A Tale of Two Artificers</span>
                        <Sparkles size={24} />
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500 leading-tight pb-2">
                        A Critical Roll at the Maker's Forge
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-foreground/80 italic max-w-2xl mx-auto">
                        "How two rival dice-smiths rolled a Natural 20 on love and forged the greatest adventuring party of all time."
                    </p>
                </div>

                {/* The Story Content */}
                <article className="prose prose-invert prose-lg max-w-none font-sans text-muted/90 leading-relaxed space-y-12">

                    <section className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-purple-500/30 transition-colors">
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Scroll size={120} className="text-purple-400 rotate-12" />
                        </div>
                        <h2 className="text-3xl font-cinzel text-purple-400 mb-6 flex items-center gap-4">
                            <span className="p-3 bg-purple-500/20 rounded-2xl"><Wand2 size={28} /></span>
                            The Grand Artificer's Tournament
                        </h2>
                        <p>
                            It was the year of the Great Gathering. Across the realms, the finest artisans, alchemists, and spell-casters convened for the prestigious <strong>Grand Artificer's Tournament</strong>—the ultimate gauntlet for dice-makers.
                        </p>
                        <p>
                            On one side of the forge stood <em>Angelica</em>, a master of celestial inclusions, whose dice were said to hold captured starlight and nebula dust. On the other stood <em>Alberto</em>, an elemental crafter known for casting liquid-core dice so volatile you could swear they contained bound fire elementals.
                        </p>
                        <p>
                            We were bitter rivals. We spent the first three days of the tournament shooting each other glaring looks across the crafting hall, silently judging each other’s polishing techniques and resin ratios. Classic enemies-to-lovers trope, but with more sandpaper and toxic fumes.
                        </p>
                    </section>

                    <section className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Flame size={120} className="text-amber-400 -rotate-12" />
                        </div>
                        <h2 className="text-3xl font-cinzel text-amber-500 mb-6 flex items-center gap-4">
                            <span className="p-3 bg-amber-500/20 rounded-2xl"><Flame size={28} /></span>
                            The Catastrophe of the Final Round
                        </h2>
                        <p>
                            The finals demanded something previously thought impossible: A perfectly balanced, razor-edged, multi-layered D20 containing both shifting liquid cores <em>and</em> suspended cosmic dust. A true artifact-level creation.
                        </p>
                        <p>
                            With hours left on the clock, disaster struck. A rogue imp (or perhaps just a clumsy goblin assistant) knocked over Alberto's stabilization rack. His liquid cores shattered across the workbench. Simultaneously, Angelica's pressure pot suffered a critical failure, venting magical steam into the atmosphere.
                        </p>
                        <p>
                            We locked eyes through the smoke. With only an hour left, neither of us had the materials to finish our solo projects. But together?
                        </p>
                    </section>

                    <section className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Heart size={120} className="text-emerald-400 pt-4" />
                        </div>
                        <h2 className="text-3xl font-cinzel text-emerald-400 mb-6 flex items-center gap-4">
                            <span className="p-3 bg-emerald-500/20 rounded-2xl"><Heart size={28} /></span>
                            Forging the Tarrasque
                        </h2>
                        <p>
                            We pushed our workbenches together. Alberto salvaged the remaining elemental fluid, while Angelica wove her celestial dust into the curing resin. We cast the spell, applied the pressure, and prayed to the Dice Gods.
                        </p>
                        <p>
                            When we popped the mold... there it was. A polyhedral masterpiece that shifted from abyssal black to cosmic nebula with a liquid core that glowed like dragon fire. It was terrifyingly beautiful. We named it the <strong>Tarrasque</strong>, for it was a beast that could not be stopped.
                        </p>
                        <p>
                            We didn't win the tournament that day. The judges disqualified us for unauthorized cross-bench collaboration. But as we packed up our gear, laughing over the absurdity of it all, we realized we had won something much better. We found our Player 2.
                        </p>
                        <p className="text-xl font-bold text-foreground mt-8 text-center italic">
                            And that's how Tarrasque Dice was born. Crafted with chaos, bound by love, and polished to perfection.
                        </p>
                    </section>

                </article>

                {/* Footer Signature */}
                <div className="mt-20 pt-10 border-t border-border/30 text-center">
                    <p className="text-sm tracking-widest uppercase text-muted mb-4">May all your hits be critical,</p>
                    <h3 className="text-3xl font-cinzel text-foreground">Alberto & Angelica</h3>
                    <p className="text-xs text-muted/60 mt-2">Founders & Chief Artificers</p>
                </div>

            </div>
        </div>
    );
};

export default BlogPage;
