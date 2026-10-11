const DetailsLoading = () => {
    
    return (
        <div className="min-h-screen bg-slate-50/60 py-6 px-3 sm:px-6 lg:px-8 animate-pulse">
            <div className="max-w-6xl mx-auto space-y-6">
                
                {/* Breadcrumb Skeleton */}
                <div className="flex items-center gap-2">
                    <div className="w-12 h-4 bg-slate-200 rounded-md"></div>
                    <div className="w-3 h-3 bg-slate-200 rounded-full"></div>
                    <div className="w-20 h-4 bg-slate-200 rounded-md"></div>
                    <div className="w-3 h-3 bg-slate-200 rounded-full"></div>
                    <div className="w-16 h-4 bg-slate-200 rounded-md"></div>
                </div>

                {/* Top Main Card Skeleton */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-14 h-14 rounded-full bg-slate-200 shrink-0"></div>
                        <div className="space-y-2.5 w-full">
                            <div className="w-40 sm:w-56 h-6 bg-slate-200 rounded-lg"></div>
                            <div className="w-28 sm:w-36 h-4 bg-slate-200 rounded-md"></div>
                            <div className="w-48 sm:w-64 h-3.5 bg-slate-200 rounded-md"></div>
                        </div>
                    </div>

                    {/* Summary Cards Skeleton */}
                    <div className="space-y-2 w-full sm:w-28 bg-slate-50 sm:bg-transparent p-4 sm:p-0 rounded-2xl">
                        <div className="w-16 h-3 bg-slate-200 rounded-md sm:ml-auto"></div>
                        <div className="w-24 h-8 bg-slate-200 rounded-lg sm:ml-auto"></div>
                        <div className="w-12 h-3 bg-slate-200 rounded-md sm:ml-auto"></div>
                    </div>
                </div>

                {/* Summary Cards Skeleton */}
                <div className="space-y-3">
                    <div className="w-32 h-5 bg-slate-200 rounded-md"></div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3 text-center flex flex-col items-center">
                                <div className="w-20 h-3 bg-slate-200 rounded-md"></div>
                                <div className="w-24 h-6 bg-slate-200 rounded-lg"></div>
                                <div className="w-32 h-3 bg-slate-200 rounded-md"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Market Prices Table Section Skeleton */}
                <div className="space-y-3 pt-2">
                    <div className="w-44 h-5 bg-slate-200 rounded-md"></div>

                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-4">
                        {/* Table Header */}
                        <div className="flex justify-between border-b border-slate-100 pb-3">
                            <div className="w-16 h-4 bg-slate-200 rounded-md"></div>
                            <div className="w-16 h-4 bg-slate-200 rounded-md"></div>
                            <div className="w-16 h-4 bg-slate-200 rounded-md"></div>
                            <div className="w-16 h-4 bg-slate-200 rounded-md"></div>
                            <div className="w-16 h-4 bg-slate-200 rounded-md"></div>
                        </div>

                        {/* Table Rows */}
                        {[1, 2, 3, 4, 5, 6].map((row) => (
                            <div key={row} className="flex justify-between items-center py-2.5 border-b border-slate-50 last:border-none">
                                <div className="w-24 h-4 bg-slate-200 rounded-md"></div>
                                <div className="w-20 h-4 bg-slate-200 rounded-md"></div>
                                <div className="w-14 h-4 bg-slate-200 rounded-md"></div>
                                <div className="w-14 h-4 bg-slate-200 rounded-md"></div>
                                <div className="w-16 h-4 bg-slate-200 rounded-md"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsLoading;