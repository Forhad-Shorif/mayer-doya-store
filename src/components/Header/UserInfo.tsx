'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { showToast } from "@/toast";

const UserInfo = () => {
    
    const { data: session } = authClient.useSession();
    const user = session?.user;

    // Dropdown state
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        setIsOpen(false);
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
             showToast.success('সফলভাবে লগআউট সম্পন্ন হয়েছে!');
                },
            },
        });
    };

    return (
        <div className="flex items-center justify-end w-auto shrink-0">
            {user ? (

                /* Logged In State with Dropdown */
                <div className="relative" ref={dropdownRef}>

                    {/* User Profile Trigger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
                        aria-label="User menu"
                    >
                        <img
                            src={user?.image || '/default-avatar.png'}
                            alt={user?.name || 'User Avatar'}
                            className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
                        />
                        <span className="hidden sm:block text-sm font-semibold text-gray-700 max-w-[120px] truncate">
                            {user?.name}
                        </span>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                            {/* User Header Info in Dropdown */}
                            <div className="px-4 py-2 border-b border-gray-100">
                                <p className="text-sm font-semibold text-gray-800 truncate">{user?.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                            </div>

                            {/* Dropdown Links */}
                            <Link
                                href="/profile"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            >
                                Your Profile
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="w-full text-left flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100 font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                /* Logged Out State */
                <div className="flex items-center gap-2">
                    <Link href="/signup">
                        <button className="px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 active:scale-95 transition-all duration-200 whitespace-nowrap">
                            সাইন আপ
                        </button>
                    </Link>
                    <Link href="/signin">
                        <button className="px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 rounded-full shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 active:scale-95 transition-all duration-200 whitespace-nowrap">
                            সাইন ইন
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;