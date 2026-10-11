import Link from 'next/link';
import { showToast } from "@/toast";

interface Category {
    id?: string | number;
    nameBn: string;
    icon?: string;
}

const fetchData = async (): Promise<Category[]> => {

    // Fetching Data Try Catch
    try {
        const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories', {
            next: { revalidate: 60 }
        });

        if (!res.ok) throw new Error('Failed to fetch data');
        return await res.json();

    } catch (error) {
        showToast.error('ডেটা খুঁজে পাওয়া যায়নি!');
        return [];
    }
};

const CatLinks = async () => {
    const categories = await fetchData();

    if (!categories.length) {
        return <div className="text-slate-400 text-sm py-4">কোনো পণ্য পাওয়া যায়নি।</div>;
    }

    return (
        <div className="w-full backdrop-blur-md py-1.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Scrollbar Category List */}
                <div className="flex items-center justify-start gap-2.5 overflow-x-auto scrollbar-none py-1">
                    {categories.map((category, index) => (

                        // Categories to Cards Link
                        <Link
                            href={`/categories/${category.id}`}
                            key={category.id || index}
                        >
                            <button
                                className="group flex items-center justify-center gap-1 px-3 py-1 rounded-full border border-slate-200 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 shadow-sm hover:scale-[1.02]"
                            >
                                {category.icon && (
                                    <span className="text-xs sm:text-sm">
                                        {category.icon}
                                    </span>
                                )}
                                <span className="text-xs sm:text-sm font-medium transition-colors duration-200">
                                    {category.nameBn}
                                </span>
                            </button>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatLinks;