import { showToast } from "@/toast";
import ProductsList from "./ProductsList";
import { toBengaliNumber } from "@/utils/formatNumber";

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

const fetchData = async (): Promise<Product[]> => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', {
            next: { revalidate: 60 }
        });

        if (!res.ok) throw new Error('Failed to fetch');

        const products: Product[] = await res.json();
        return Array.isArray(products) ? products : [];

    } catch (error) {
        showToast.error('ডেটা খুঁজে পাওয়া যায়নি!');
        return [];
    }
};

const Body = async () => {
    const products = await fetchData();

    // Today low price and high price filtering
    const priceUpProducts = products.filter((product) => product?.change?.dir === "up");
    const priceDownProducts = products.filter((product) => product?.change?.dir === "down");

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

            {/* Today High Price */}
            {priceUpProducts.length > 0 && (
                <section>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                        <h2 className="text-xl sm:text-2xl font-bold text-black">আজ দাম বেড়েছে</h2>
                    </div>
                    <ProductsList products={priceUpProducts} />
                </section>
            )}

            {/* Today Low Price */}
            {priceDownProducts.length > 0 && (
                <section>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <h2 className="text-xl sm:text-2xl font-bold text-black">আজ দাম কমেছে</h2>
                    </div>
                    <ProductsList products={priceDownProducts} />
                </section>
            )}

            {/* All Products */}
            <section>
                <div className="mb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-black">সব পণ্য</h2>
                    <p className="text-sm text-gray-800 mt-0.5">
                        মোট {toBengaliNumber(products.length)} টি পণ্য দেখানো হচ্ছে
                    </p>
                </div>
                <ProductsList products={products} />
            </section>
        </div>
    );
};

export default Body;