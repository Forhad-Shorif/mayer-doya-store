'use client';

import Link from "next/link";
import { useState } from "react";
import CategorySort from "../shearecategory/CategorySort";
import { toBengaliNumber } from "@/utils/formatNumber";

export interface Product {
    id?: string | number;
    nameBn?: string;
    categoryNameBn?: string;
    categoryIcon?: string;
    category?: string;
    unit?: string;
    today: number | string;
    change?: {
        dir?: string;
        pct?: number;
    };
}

interface CategoryProductListProps {
    productsData: Product[];
}

const CategoryProductList = ({ productsData }: CategoryProductListProps) => {
    const [item, setItem] = useState<"default" | "High" | "Low">("default");

    if (!productsData || productsData.length === 0) {
        return <div className="text-slate-400 text-sm py-4">কোনো পণ্য পাওয়া যায়নি।</div>;
    }

    // Sorting Method
    const priceProduct = (Items: Product[]) => {
        const SortItems = [...Items];
        if (item === "High") {
            return SortItems.sort((a, b) => Number(b.today) - Number(a.today));
        } else if (item === "Low") {
            return SortItems.sort((a, b) => Number(a.today) - Number(b.today));
        } else {
            return SortItems;
        }
    };

    const products = priceProduct(productsData);

    return (
        <div className="space-y-4 w-full">

            {/* Top side */}
            <div className="flex flex-col gap-4 pb-3 px-1">

                {/* Select Box */}
                <div className="flex justify-end w-full bg-white p-4 sm:p-3 rounded-2xl">
                    <fieldset className="fieldset bg-base-100 p-3 rounded-xl shadow-sm border border-base-200">
                        <div className="flex flex-row items-center gap-2">
                            <legend className="fieldset-legend text-slate-600 font-medium text-sm sm:text-base mb-0">
                                সাজান
                            </legend>
                            <select
                                value={item}
                                onChange={(e) => setItem(e.target.value as "default" | "High" | "Low")}
                                className="select select-bordered select-sm sm:select-md bg-base-200/50 focus:bg-base-100 transition-all">
                                <option disabled={true}>দাম সাজান</option>
                                <option value="default">সব পণ্য</option>
                                <option value="High">দাম: বেশি থেকে কম</option>
                                <option value="Low">দাম: কম থেকে বেশি</option>
                            </select>
                        </div>
                    </fieldset>
                </div>

                <div className="text-xs sm:text-sm font-medium text-slate-700">
                    মোট <span className="font-bold text-[15px] text-slate-900">{toBengaliNumber(products.length)}</span> টি পণ্য দেখানো হচ্ছে
                </div>
            </div>

            {/* Product List Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 py-2">
                {/* Product Maping */}

                {products.map((product, index) => {

                    const Bn = product.change?.pct ? toBengaliNumber(product.change.pct) : 0;
                    // Up or Down
                    return (
                        <Link
                            key={product.id || index}
                            href={`/details/${product.id}`}
                            className="block group"
                        >
                            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-3 min-h-[150px]">

                                {/* Top side Icon and Name */}

                                <CategorySort product={product} />

                                {/* Bottom side Price and Change */}
                                <div className="pt-2.5 border-t border-slate-100 flex items-end justify-between">

                                    <div>
                                        <span className="text-[11px] text-gray-500 block mb-0.5">আজকের দাম</span>
                                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                                            {toBengaliNumber(product.today)} <span className="text-sm font-normal text-gray-600">টাকা</span>
                                        </h4>
                                    </div>

                                    {/* Change */}
                                    {product.change && (
                                        <div
                                            className={`inline-flex items-center gap-1 border-none bg-slate-100 p-1 px-2 rounded-2xl text-xs font-semibold ${product.change?.dir === "up" ? "text-rose-400" : product.change?.dir === "down" ? "text-emerald-400" : "text-gray-800"
                                                }`}
                                        >
                                            <span>{product.change?.dir === "up" ? "▲" : product.change?.dir === "down" ? "▼" : <span>—</span>}</span>
                                            <span>
                                                {product.change?.dir === "up" ? <span>{Bn}</span> : product.change?.dir === "flat" ? <span>০.{toBengaliNumber(Bn)}</span> : product.change?.pct ? toBengaliNumber(product.change.pct * -1) : 0}%
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryProductList;