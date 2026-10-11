const HomeLoading = () => {
    return (
        <div className="min-h-screen bg-slate-50/60 py-8 px-4 sm:px-6 lg:px-8 animate-pulse">
            <div className="max-w-6xl mx-auto space-y-8">
                
                {/* Hero / Header Section Skeleton */}
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm text-center space-y-4 max-w-2xl mx-auto">
                    <div className="w-3/4 h-8 bg-slate-200 rounded-xl mx-auto"></div>
                    <div className="w-1/2 h-4 bg-slate-200 rounded-lg mx-auto"></div>
                    <div className="w-40 h-10 bg-slate-200 rounded-2xl mx-auto pt-2"></div>
                </div>

                {/* Categories / Filter Section Skeleton */}
                <div className="space-y-4">
                    <div className="w-40 h-6 bg-slate-200 rounded-lg"></div>
                    
                    {/* Category Badges / Buttons Grid */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="w-28 h-10 bg-white border border-slate-100 rounded-2xl shrink-0 shadow-sm flex items-center justify-center gap-2 px-4">
                                <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                                <div className="w-12 h-3.5 bg-slate-200 rounded-md"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Grid / Cards Section Skeleton */}
                <div className="space-y-4 pt-2">
                    <div className="w-48 h-6 bg-slate-200 rounded-lg"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[1, 2, 3, 4, 5, 6].map((card) => (
                            <div key={card} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-200 shrink-0"></div>
                                    <div className="space-y-2 w-full">
                                        <div className="w-28 h-4 bg-slate-200 rounded-md"></div>
                                        <div className="w-20 h-3 bg-slate-200 rounded-md"></div>
                                    </div>
                                </div>
                                <div className="space-y-2 pt-2">
                                    <div className="w-full h-4 bg-slate-200 rounded-md"></div>
                                    <div className="w-2/3 h-4 bg-slate-200 rounded-md"></div>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                                    <div className="w-20 h-5 bg-slate-200 rounded-md"></div>
                                    <div className="w-16 h-8 bg-slate-200 rounded-xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeLoading;