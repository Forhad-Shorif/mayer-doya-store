import MarqueeText from "react-fast-marquee";
import Link from "next/link";
import { showToast } from "@/toast";
import { translateUnit } from "@/utils/translateUnit";
import { toBengaliNumber } from "@/utils/formatNumber";

interface Types {
    id?: string | number;
    nameBn: string;
    today: string;
    categoryIcon: string;
    unit?: string;
    change?: {
        dir?: string;
        pct?: number;
    };
}

const FetchData = async (): Promise<Types[]> => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            return [];
        }

        const products: Types[] = await res.json();
        return Array.isArray(products) ? products : [];

    } catch (error) {

        showToast.error('ডেটা খুঁজে পাওয়া যায়নি!');
        return [];
    }
};

const Marquee = async () => {
    // Fetching Data
    const products: Types[] = await FetchData();

    if (!products.length) {
        return null;
    }

    return (
        <div className="sticky top-0 z-30 w-full backdrop-blur-md border-b border-slate-800 shadow-lg py-1">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center relative overflow-hidden">

                {/* Marquee Text */}
                <MarqueeText
                    gradient={false}
                    speed={45}
                    className="flex items-center gap-4 py-0.5"
                >
                    {products.map((item: Types, index: number) => {

                        const Bn = item?.unit ? translateUnit(item.unit) : "টা";
                        const BnNum = item.change?.pct ? toBengaliNumber(item.change.pct) : "০";
                        return (
                            <Link key={item.id || index} href={`/details/${item.id}`}>
                                <div
                                    key={item.id || index}
                                    className="flex items-center hover:border-b  gap-2.5 mx-3 px-3 py-0.5 rounded-full border-slate-700 hover:border-slate-600 transition-all duration-200 text-xs sm:text-sm font-medium whitespace-nowrap"
                                >

                                    {/* Kilo ways Batch*/}
                                    <span className="">{item.categoryIcon}</span>
                                    <span className=" text-blue-700 font-semibold">{item.nameBn}</span>
                                    <span className="text-amber-400 font-bold">{toBengaliNumber(item?.today)} টাকা/{Bn}</span>

                                    {/* Change */}
                                    {item.change && (
                                        <div
                                            className={`inline-flex items-center gap-1 border-none bg-slate-100 p-1 px-2 rounded-2xl text-xs font-semibold ${item.change?.dir === "up" ? "text-rose-400" : item.change?.dir === "down" ? "text-emerald-400" : "text-gray-800"
                                                }`}
                                        >
                                            <span>{item.change?.dir === "up" ? "▲" : item.change?.dir === "down" ? "▼" : <span>—</span>}</span>
                                            <span>
                                                {item.change?.dir === "up" ? <span>{BnNum}</span> : item.change?.dir === "flat" ? <span>০.{BnNum}</span> : item.change?.pct ? toBengaliNumber(item.change.pct * -1) : <span>০</span>}%
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;
