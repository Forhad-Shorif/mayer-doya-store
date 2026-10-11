import Image from 'next/image';
import Logo from '@/assets/App-Error.png'
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100 p-8 text-center space-y-6">
                
                {/* 404 Image */}
                <div className="flex justify-center">
                    <Image 
                        src={Logo} 
                        width={250} 
                        height={250} 
                        alt="404 Not Found"
                        className="object-contain"
                    />   
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-slate-800">পেজটি পাওয়া যায়নি!</h1>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        আপনি যে পেজটি খুঁজছেন তা হয়তো সরানো হয়েছে অথবা ভুল লিংকে প্রবেশ করেছেন।
                    </p>
                </div>

                {/* Back to Home Button */}
                <div>
                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-2xl shadow-md shadow-indigo-100 transition-all duration-200"
                    >
                        <span className="transform transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        <span>হোম পেজে ফিরে যান</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;