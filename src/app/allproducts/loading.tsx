const AllProductsLoading = () => {
    return (
        <div className="min-h-screen bg-slate-50/60 py-8 px-4 sm:px-6 lg:px-8 animate-pulse">
            <div className="max-w-6xl mx-auto space-y-6">
                
                {/* Header Section Skeleton*/}
                <div className="space-y-2">
                    <div className="w-32 h-8 bg-slate-200 rounded-xl"></div>
                    <div className="w-48 h-4 bg-slate-200 rounded-md"></div>
                </div>

                {/* Products Grid Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (

                        <div key={item} className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                            {/* Product Image / Icon Skeleton */}
                            <div className="w-full h-40 rounded-2xl bg-slate-200"></div>

                            {/* Product Info Skeleton */}
                            <div className="space-y-2">
                                <div className="w-3/4 h-5 bg-slate-200 rounded-md"></div>
                                <div className="w-1/2 h-3.5 bg-slate-200 rounded-md"></div>
                            </div>

                            {/* Price & Action Button Skeleton */}
                            <div className="flex justify-between items-center pt-2 border-t border-slate-50">
                                <div className="w-20 h-5 bg-slate-200 rounded-md"></div>
                                <div className="w-24 h-9 bg-slate-200 rounded-xl"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllProductsLoading;