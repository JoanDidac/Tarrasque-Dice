import { Facebook, Instagram, Twitter, ChevronDown } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-white pt-16 pb-8 font-sans">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                    {/* Column 1: Newsletter */}
                    <div className="md:col-span-5 space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white">Newsletter</h4>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Sign up for our newsletter and you're guaranteed a crit roll for products, deals, and <span className="italic">VIP Early Access!</span>
                        </p>

                        <form className="flex flex-col gap-4 max-w-sm">
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="bg-transparent border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors w-full"
                            />
                            <button
                                type="button"
                                className="bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors w-32 text-center"
                            >
                                Subscribe
                            </button>
                        </form>

                        <div className="flex items-center gap-6 pt-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Policies */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white">Policies</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Return & Refund Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Become A Distributor</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Partnered Distributors</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Need Help */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white">Need Help?</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Please take a moment to read our <a href="#" className="underline font-medium text-white decoration-1 underline-offset-2">FAQ</a>, but if there are any unanswered questions or concerns, please reach out to <a href="mailto:support@dispeldice.com" className="font-bold text-white hover:underline decoration-1 underline-offset-2">support@dispeldice.com</a>!
                        </p>

                        {/* Shop Pay Button Mockup */}
                        <button className="bg-[#5A31F4] hover:bg-[#4c29cc] text-white rounded-full px-6 py-2 flex items-center gap-2 text-sm font-bold transition-all w-fit">
                            <span>Follow on</span>
                            <span className="font-black italic">shop</span>
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">

                    {/* Left: Country & Copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-gray-500">
                        <button className="flex items-center gap-2 hover:text-white transition-colors">
                            <span>🇺🇸 UNITED STATES (USD $)</span>
                            <ChevronDown size={12} />
                        </button>
                        <span>© 2025 TARRASQUE DICE</span>
                    </div>

                    {/* Right: Payment Icons (CSS placeholders) */}
                    <div className="flex flex-wrap justify-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                        {/* Simple divs to represent cards */}
                        {['Amex', 'Apple', 'Diners', 'Discover', 'Google', 'Meta', 'Mastercard', 'Shop'].map((card) => (
                            <div key={card} className="h-6 px-1.5 bg-white rounded-[2px] flex items-center justify-center min-w-[32px]">
                                <span className="text-[6px] font-bold text-black uppercase tracking-tighter">{card}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
