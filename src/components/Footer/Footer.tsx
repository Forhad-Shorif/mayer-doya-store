const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    
                    {/* Logo Band Toggle */}
                    <p className="text-sm sm:text-base font-medium text-slate-800 flex items-center justify-center md:justify-start gap-2">
                        <span className="font-bold text-indigo-600">বাজার দর</span>
                        <span className="text-slate-300">—</span>
                        <span className="text-slate-600">প্রয়োজনীয় পণ্যের দাম এক নজরে।</span>
                    </p>

                    {/* Disclaimer */}
                    <p className="text-xs sm:text-sm text-pink-600 mt-1">
                        সকল দাম সম্ভাব্য; <span className="font-semibold text-blue-600/100"> ওপর নির্ভর করে পরিবর্তিত হয়।</span>
                    </p>

                </div>   
            </div>
        </footer>
    );
};

export default Footer;