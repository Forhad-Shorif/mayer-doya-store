"use client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import React from "react";
import SignUpSheare from "@/components/signsheare/SignSocial";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { showToast } from "@/toast";


const SignupPage = () => {

    const router = useRouter();
    const HandleonSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as {
            email: string;
            image: string;
            password: string;
            name: string;
        };

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        });

        if (error) {
            showToast.error('সাইন আপ ব্যর্থ হয়েছে! আবার চেষ্টা করুন।');
            return;
        }

        showToast.success('সফলভাবে সাইন আপ সম্পন্ন হয়েছে!');
        router.push("/");
        router.refresh();
    }

    return (
        <div className="min-h-screen bg-slate-50/50 flex items-center flex-col justify-center py-10 px-4 sm:px-6 lg:px-8">

            {/* Sign Up Page Title */}
            <div className="text-center space-y-1 mb-2">
                <h1 className="text-2xl font-bold text-slate-800">অ্যাকাউন্ট তৈরি করুন</h1>
                <p className="text-xs sm:text-sm text-slate-500">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </div>

            {/* Sign Up Form */}
            <Form
                className="w-full max-w-md space-y-5 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-100"
                onSubmit={HandleonSubmit}
            >
                <TextField
                    isRequired
                    className="flex flex-col gap-1.5"
                >
                    <Label className="text-xs sm:text-sm font-semibold text-slate-700">Name</Label>
                    <Input
                        name="name"
                        type="text"
                        placeholder="আপনার নাম লিখুন"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                    <FieldError className="text-xs font-medium text-rose-500" />
                </TextField>

                <TextField
                    isRequired
                    className="flex flex-col gap-1.5"
                >
                    <Label className="text-xs sm:text-sm font-semibold text-slate-700">Image URL</Label>
                    <Input
                        name="image"
                        type="url"
                        placeholder="আপনার ছবির লিংক দিন"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                    <FieldError className="text-xs font-medium text-rose-500" />
                </TextField>

                <TextField
                    isRequired
                    className="flex flex-col gap-1.5"
                >
                    <Label className="text-xs sm:text-sm font-semibold text-slate-700">Email</Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                    <FieldError className="text-xs font-medium text-rose-500" />
                </TextField>

                <TextField
                    isRequired
                    className="flex flex-col gap-1.5"
                >
                    <Label className="text-xs sm:text-sm font-semibold text-slate-700">Password</Label>
                    <Input
                        name="password"
                        type="password"
                        minLength={8}
                        placeholder="পাসওয়ার্ড দিন (কমপক্ষে ৮ অক্ষর)"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                    <Description className="text-[11px] text-slate-400 leading-relaxed">
                        কমপক্ষে ৮ অক্ষর, ১টি বড় হাতের অক্ষর এবং ১টি সংখ্যা থাকতে হবে।
                    </Description>
                    <FieldError className="text-xs font-medium text-rose-500" />
                </TextField>

                <TextField
                    isRequired
                    className="flex flex-col gap-1.5"
                >
                    <Label className="text-xs sm:text-sm font-semibold text-slate-700">Confirm Password</Label>
                    <Input
                        name="confirmPassword"
                        type="password"
                        minLength={8}
                        placeholder="পাসওয়ার্ডটি আবার লিখুন"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                    <Description className="text-[11px] text-slate-400 leading-relaxed">
                        দয়া করে আপনার পাসওয়ার্ডটি পুনরায় নিশ্চিত করুন।
                    </Description>
                    <FieldError className="text-xs font-medium text-rose-500" />
                </TextField>

                {/* Sign Up Buttons */}
                <div className="flex items-center gap-3 pt-3">
                    <Button
                        type="submit"
                        className="w-full rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all hover:bg-indigo-500 cursor-pointer"
                    >
                        রেজিস্ট্রেশন করুন
                    </Button>
                    <Button
                        type="reset"
                        variant="secondary"
                        className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                    >
                        রিসেট
                    </Button>
                </div>
                <div>
                    <SignUpSheare />
                </div>

            </Form>
            {/* Wow Link Section to Home Page */}
            <div className="text-center mt-6">
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-all duration-200 bg-white px-5 py-2.5 rounded-full border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                    <span className="transform transition-transform duration-200 group-hover:-translate-x-1">←</span>
                    <span>হোম পেজে ফিরে যান</span>
                </Link>
            </div>
        </div>
    );
};

export default SignupPage;