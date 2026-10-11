import Link from 'next/link';
import { toBengaliNumber } from "@/utils/formatNumber";
import { translateUnit } from "@/utils/translateUnit";

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

const ProductsList = ({ products }: { products: Product[] }) => {

    // Empty Data
    if (!products || products.length === 0) {
        return <div className="text-slate-400 text-sm py-4">কোনো পণ্য পাওয়া যায়নি।</div>;
    }

    return (
        //  Cards products
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-3">
            {products.map((product: Product, index: number) => {

                const BnNum = product.change?.pct ? toBengaliNumber(product.change.pct) : 0;
                const BnText = product?.unit ? translateUnit(product.unit) : "টা";

                return (
                    // Details Link
                    <Link key={product.id || index} href={`/details/${product.id}`}>

                        <div
                            key={product.id || index}
                            className="p-4 rounded-2xl bg-white transition-all duration-200 flex flex-col justify-between gap-3 shadow-sm hover:shadow-md"
                        >

                            {/* Top section icon , name , price */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-lg shrink-0">
                                    {product.categoryIcon || "🍚"}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-base font-semibold text-gray-700 leading-snug">
                                        {product.nameBn || product.categoryNameBn}
                                    </h3>
                                    <span className="text-xs text-gray-700">
                                        প্রতি <span>{BnText}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Buttom section price and divi */}
                            <div className="pt-2 border-t border-slate-700/30 flex items-end justify-between">
                                <div>
                                    <span className="text-xs text-gray-700 block mb-0.5">আজকের দাম</span>
                                    <h4 className="text-xl font-bold text-black">
                                        {product.today} <span className="text-sm font-normal text-gray-800">টাকা</span>
                                    </h4>
                                </div>

                                {/* change */}
                                {product.change && (
                                    <div
                                        className={`inline-flex items-center gap-1 border-none bg-slate-100 p-1 px-2 rounded-2xl text-xs font-semibold ${product.change?.dir === "up" ? "text-rose-400" : product.change?.dir === "down" ? "text-emerald-400" : "text-gray-800"
                                            }`}
                                    >
                                        <span>{product.change?.dir === "up" ? "▲" : product.change?.dir === "down" ? "▼" : <span>—</span>}</span>
                                        <span>
                                            {product.change?.dir === "up"? <span>{BnNum}</span> : product.change?.dir === "flat"  ? <span>০.{toBengaliNumber(BnNum)}</span> : product.change?.pct ? toBengaliNumber(product.change.pct * -1) : 0}%
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProductsList;