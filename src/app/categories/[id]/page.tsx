import CategoryProductList from "@/components/home/CategoryProductList";
import { toBengaliNumber } from "@/utils/formatNumber";

interface Product {
    id?: string | number;
    nameBn?: string;
    categoryNameBn?: string;
    categoryIcon?: string;
    category?: string;
    unit?: string;
    today: string | number;
    change?: {
        dir?: string;
        pct?: number;
    };
}

interface CategoryProps {
    params: Promise<{ id: string }>;
}

const CategoriesPage = async ({ params }: CategoryProps) => {

    const { id } = await params;
    
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
        next: { revalidate: 60 }
    });

    if (!res.ok) throw new Error('Failed to fetch products');
    const products = await res.json();
    
    const filteredProducts: Product[] = products.filter(
        (product: Product) => String(product.category) === id
    );

    return (
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-6">
            <section>
                
                {/* Product top List Title */}
                <div className="flex items-center gap-3 mb-5 px-1">
                    <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-2xl shrink-0">
                        {filteredProducts[0]?.categoryIcon || "🥬"}
                    </span>
                    <div className="flex flex-col">
                        <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                            {filteredProducts[0]?.categoryNameBn || "ক্যাটাগরি"}
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-500">
                            {toBengaliNumber(filteredProducts.length)} টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>

                {/* Product List */}
                {filteredProducts.length > 0 ? (
                    <CategoryProductList productsData={filteredProducts} />
                ) : (
                    <div className="text-slate-500 py-10 text-center">
                        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                    </div>
                )}
            </section>
        </div>
    );
};

export default CategoriesPage;