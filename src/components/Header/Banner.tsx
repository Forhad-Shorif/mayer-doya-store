import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/bazar-hero.png';

const Banner = () => {

    // Today date
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });

    return (
        <section className="relative overflow-hidden  text-white py-12 lg:py-20">

            {/* Banner Section */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* Left side Text */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6">

                        {/* Today date */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md text-xs sm:text-sm text-slate-300 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>{date}</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-tight">
                            আজকের বাজারের দাম <br className="hidden sm:inline" />
                            <span className="text-blue-500">এক নজরে</span>
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                        </p>

                        {/* All Products Button */}
                        <div className="pt-2">
                            <Link href="/allproducts">
                                <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                                    সব পণ্য দেখুন →
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right side Logo */}
                    <div className="flex justify-center items-center relative">
                        <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] aspect-square">
                            {/* ছবির পেছনে গ্লো ইফেক্ট */}
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl transform scale-90" />

                            <Image
                                src={Logo}
                                alt="হিরো ব্যানার"
                                fill
                                priority
                                className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                                sizes="(max-w-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;