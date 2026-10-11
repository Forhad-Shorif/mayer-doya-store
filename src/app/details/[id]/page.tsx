import SheareDetails from "@/components/shearedetails/SheareDetails";
import PriceStore from "@/components/shearedetails/PriceStore";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { translateUnit } from "@/utils/translateUnit";
import { toBengaliNumber } from "@/utils/formatNumber";

interface Market {
    market: string;
    division: string;
    min: number;
    max: number;
}

interface Product {
    id: string | number;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon?: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    unit?: string;
    change?: {
        dir?: string;
        pct?: number;
    };
    markets: Market[];
}

interface props {
    params: Promise<{ id: string }>;
}

const DetailsPage = async ({ params }: props) => {

    const { id } = await params;

    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
        next: { revalidate: 60 }
    });

    if (!res.ok) throw new Error('Failed to fetch products');
    const products: Product[] = await res.json();

    const filteredProducts = products.filter((product) => String(product.id) === id);

    //   Empty Data
    if (!filteredProducts.length) {
        return (
            <div className="min-h-screen bg-slate-50/50 p-6 text-center text-slate-500">
                কোনো তথ্য পাওয়া যায়নি।
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50/60 py-6 px-3 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Details Product Card */}
                {filteredProducts.map((product, index: number) => {
                    const Price = [product.today, product.yesterday, product.lastWeek, product.lastMonth];
                    const LowPrice = Math.min(...Price);
                    const HighPrice = Math.max(...Price);
                    const AveragePrice = Math.round((HighPrice + LowPrice) / 2);
                    const MarketProducts = product.markets || [];

                    const Bn = product.unit ? translateUnit(product.unit) : "টা";
                    const BnNum = product.change?.pct ? toBengaliNumber(product.change.pct) : 0;
                    const priceDiff = Math.abs(product.today - product.yesterday);

                    return (
                        <div key={product.id || index} className="space-y-6">

                            {/* Breadcrumb Navigation */}
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                                <Link href="/" className="hover:text-slate-800 transition-colors">
                                    হোম
                                </Link>
                                <FiChevronRight className="text-slate-400 text-xs" />
                                <Link
                                    href={`/categories/${product.category}`}
                                    className="hover:text-slate-800 transition-colors"
                                >
                                    {product.categoryNameBn}
                                </Link>
                                <FiChevronRight className="text-slate-400 text-xs" />
                                <span className="text-slate-900 font-semibold">{product.nameBn}</span>
                            </div>

                            {/* Top Main Card */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-2xl shrink-0">
                                        {product.categoryIcon || "🍚"}
                                    </div>

                                    <div className="space-y-1">
                                        <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                                            {product.nameBn}
                                        </h1>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                            {product.unit ? `প্রতি ${Bn}` : "প্রতি কেজি"} • {product.categoryNameBn}
                                        </p>
                                        <p className="text-xs sm:text-sm font-medium text-slate-500">
                                            {product.today >= product.yesterday
                                                ? `গতকালের তুলনায় আজ দাম বেড়েছে ${toBengaliNumber(priceDiff)} টাকা`
                                                : `গতকালের তুলনায় আজ দাম কমেছে ${toBengaliNumber(priceDiff)} টাকা`}
                                        </p>
                                    </div>
                                </div>

                                {/* Change Price */}
                                <div className="text-left sm:text-right self-end sm:self-center bg-slate-50 sm:bg-transparent p-4 sm:p-0 rounded-2xl w-full sm:w-auto">
                                    <span className="text-xs text-slate-500 block mb-1">আজকের দাম</span>
                                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                        {toBengaliNumber(product.today)} <span className="text-sm font-semibold text-slate-600">টাকা /{Bn}</span>
                                    </div>

                                    <div
                                        className={`inline-flex items-center gap-1 border-none bg-slate-100 p-1 px-2 rounded-2xl text-xs font-semibold ${product.change?.dir === "up" ? "text-rose-400" : product.change?.dir === "down" ? "text-emerald-400" : "text-gray-800"
                                            }`}
                                    >
                                        <span>{product.change?.dir === "up" ? "▲" : product.change?.dir === "down" ? "▼" : <span>—</span>}</span>
                                        <span>
                                            {product.change?.dir === "up" ? <span>{BnNum}</span> : product.change?.dir === "flat" ? <span>০.{toBengaliNumber(BnNum)}</span> : product.change?.pct ? toBengaliNumber(product.change.pct * -1) : 0}%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Cards */}
                            <div className="space-y-3">
                                <PriceStore LowPrice={LowPrice} HighPrice={HighPrice} AveragePrice={AveragePrice} />
                            </div>

                            {/* Market Prices Table Section */}
                            <div className="space-y-3 pt-2">
                                <h2 className="text-lg font-bold text-slate-800">বাজারভিত্তিক আজকের দাম</h2>

                                <div className="w-full overflow-x-auto bg-white rounded-3xl border border-slate-100 shadow-sm">
                                    <table className="w-full text-left border-collapse min-w-[600px]">

                                        {/* Table Header */}
                                        <thead>
                                            <tr className="bg-slate-50/60 border-b border-slate-100 text-xs font-semibold text-slate-500">
                                                <th className="py-4 px-6">বাজার</th>
                                                <th className="py-4 px-6">বিভাগ</th>
                                                <th className="py-4 px-6">সর্বনিম্ন</th>
                                                <th className="py-4 px-6">সর্বাধিক</th>
                                                <th className="py-4 px-6">গড়</th>
                                            </tr>
                                        </thead>

                                        {/* Market Prices Table */}
                                        <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                                            {MarketProducts.map((market, mIdx: number) => {
                                                return (
                                                    <SheareDetails details={market} index={mIdx} key={mIdx} />
                                                )
                                            }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DetailsPage;