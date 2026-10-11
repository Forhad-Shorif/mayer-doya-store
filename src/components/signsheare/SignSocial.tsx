'use client';
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { showToast } from "@/toast";

const SignUpSheare = () => {

    const SignInWithGoogle = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            showToast.error('গুগল লগইন ব্যর্থ হয়েছে! আবার চেষ্টা করুন।');
            return;
        }

        showToast.success('সফলভাবে গুগল লগইন সম্পন্ন হয়েছে!');
    };
    // GitHub Sign In
    const SignInWithGithub = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });

        if (error) {
            showToast.error('গিটহাব লগইন ব্যর্থ হয়েছে! আবার চেষ্টা করুন।',)
            return;
        }

        showToast.success('সফলভাবে গিটহাব লগইন সম্পন্ন হয়েছে!')
    };

    return (
        <div className="w-full">

            {/* Another Login section divider */}
            <div className="relative flex items-center justify-center my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                </div>
                <span className="relative bg-white px-4 text-xs uppercase tracking-wider text-slate-400 font-medium">
                    অথবা
                </span>
            </div>

            {/* Google and GitHub Buttons */}
            <div className="flex items-center gap-3 pt-3">

                {/* Google Button */}
                <Button
                    onClick={SignInWithGoogle}
                    className="w-full rounded-2xl bg-white border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 cursor-pointer flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.15v3.14C3.11 21.36 7.22 24 12 24z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.62H1.15C.42 8.09 0 9.75 0 11.5s.42 3.41 1.15 4.88l4.12-3.14z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.11 2.64 1.15 6.62l4.12 3.14c.95-2.85 3.6-4.96 6.73-4.96z"
                        />
                    </svg>
                    Google দিয়ে লগইন
                </Button>

                {/* GitHub Button */}
                <Button
                    onClick={SignInWithGithub}
                    className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-slate-100 transition-all hover:bg-slate-800 cursor-pointer flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub দিয়ে লগইন
                </Button>
            </div>

            {/* Sign In Link */}
            <p className="text-center text-sm text-slate-600 mt-5">
                অ্যাকাউন্ট আছে? {" "}
                <Link
                    href="/signin"
                    className="font-semibold text-lime-400 text-primary underline hover:underline transition-colors"
                >
                    সাইন ইন করুন
                </Link>
            </p>

        </div>
    );
};

export default SignUpSheare;