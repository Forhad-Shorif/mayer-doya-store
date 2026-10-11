import { toBengaliNumber } from "@/utils/formatNumber";
import ProductsList from '@/components/home/ProductsList';
import Link from 'next/link';
import { showToast } from "@/toast";

interface Product {
    id?: string | number;
    nameBn?: string;
    categoryNameBn?: string;
    categoryIcon?: string;
    unit?: string;
    today: string | number;
    change?: {
        dir?: string;
        pct?: number;
    };
}

const FetchData = async (): Promise<Product[]> => {
    try {
        const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            return [];
        }

        const products: Product[] = await res.json();
        return Array.isArray(products) ? products : [];
    } catch (error) {
       
        showToast.error('ডেটা খুঁজে পাওয়া যায়নি!');
        return [];
    }
};

const AllProducts = async () => {

    const products = await FetchData();

    return (
        <div className='mx-5 sm:mx-10 md:mx-15 lg:mx-20 xl:mx-24 mt-10'>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6">

                {/* Top side Titlllellele */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        সব পণ্য
                    </h1>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                        মোট <span className="font-bold text-indigo-600">{toBengaliNumber(products.length)}</span> টি পণ্য দেখানো হচ্ছে
                    </p>
                </div>

                {/* Home page link */}
                <div className="text-center mt-6">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-all duration-200 bg-white px-5 py-2.5 rounded-full border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                        <span className="transform transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        <span>হোম পেজে ফিরে যান</span>
                    </Link>
                </div>

                {/* Products List */}
                <div>
                    <ProductsList products={products} />
                </div>
            </div>

        </div>
    );
};

export default AllProducts;

