'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ErrorImage from '@/assets/error-404.png' 

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
    useEffect(() => {
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-50/50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100 p-8 text-center space-y-6">
                
                {/* Error Image Section */}
                <div className="flex justify-center">
                    <Image 
                        src={ErrorImage} 
                        width={180} 
                        height={180} 
                        alt="Error Occurred"
                        className="object-contain"
                    />
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-slate-800">কোথাও কোনো সমস্যা হয়েছে!</h1>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        দুঃখিত, পেজটি লোড করার সময় একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={() => reset()}
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-2xl shadow-md shadow-indigo-100 transition-all duration-200 cursor-pointer"
                    >
                        আবার চেষ্টা করুন
                    </button>

                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-6 py-3 rounded-2xl transition-all duration-200"
                    >
                        <span className="transform transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        <span>হোম পেজে ফিরে যান</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;