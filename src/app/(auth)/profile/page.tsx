'use client';
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import React from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { showToast } from "@/toast";

const ProfilePage = () => {

  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;


  const HandleonSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedUser = Object.fromEntries(formData.entries()) as {
      image: string;
      name: string;
    };

    const { data, error } = await authClient.updateUser({
      ...updatedUser,
    });

    if (error) {
      showToast.error('প্রোফাইল আপডেট ব্যর্থ হয়েছে! আবার চেষ্টা করুন।');
      return;
    }

    showToast.success('প্রোফাইল সফলভাবে আপডেট করা হয়েছে!');

    router.refresh();
  };

  // Logout and back to Sign In Page
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {

          //toast LOgOut
          showToast.success('সফলভাবে লগআউট সম্পন্ন হয়েছে!');
          router.push("/signin");
          router.refresh();
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8 space-y-6">

      {/* Profile and Title Section */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800">আমার প্রোফাইল</h1>
        <p className="text-xs sm:text-sm text-slate-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </div>

      {/* Profile Image */}
      <div className="max-w-3xl mx-auto space-y-6">
        {user ? (
          <div className="space-y-6">

            {/* Profile and Title Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

              <div className="flex items-center gap-4">
                {user?.image ? (
                  <img
                    src={user?.image || '/default-avatar.png'}
                    alt={user?.name || 'User Avatar'}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-600 shrink-0">
                    {user?.name?.[0] || "U"}
                  </div>
                )}

                {/* Profile Name and Email */}
                <div className="space-y-1">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                    {user?.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {user?.email}
                  </p>
                  <p className="text-xs text-slate-400">
                    আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                  </p>
                </div>
              </div>

              {/* Sign Out Button */}
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>সাইন আউট</span>
              </button>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <form
                className="max-w-xl mx-auto space-y-5"
                onSubmit={HandleonSubmit}
              >
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h2 className="text-lg font-bold text-slate-800">প্রোফাইল তথ্য আপডেট করুন</h2>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700">Name</label>
                  <input
                    name="name"
                    defaultValue={user?.name || ""}
                    type="text"
                    required
                    placeholder="আপনার নাম দিন"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700">Image URL</label>
                  <input
                    name="image"
                    defaultValue={user?.image || ""}
                    type="url"
                    required
                    placeholder="ছবির লিংক (URL) দিন"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>

                {/* Update and Logout Buttons */}
                <div className="flex items-center gap-3 pt-3">
                  <Button
                    type="submit"
                    className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 cursor-pointer"
                  >
                    আপডেট করুন
                  </Button>
                  <Button
                    type="reset"
                    variant="secondary"
                    className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 cursor-pointer"
                  >
                    রিসেট
                  </Button>
                </div>
              </form>
            </div>

          </div>
        ) : (
          // Not Logged In
          <div className="text-center py-20 text-slate-400 text-sm">
            লগইন করা নেই। অনুগ্রহ করে সাইন ইন করুন।
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;