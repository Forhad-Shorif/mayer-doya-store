import {translateUnit} from "@/utils/translateUnit";
interface Product {
    
    nameBn?: string;
    categoryNameBn?: string;
    categoryIcon?: string;
    unit?: string;
}

const CategorySort = ({ product }: { product: Product }) => {

  const Bn = product?.unit ? translateUnit(product.unit) : "টা";
    return (
        <div>

            {/* Top section icon , name , price in category */}
            <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-xl shrink-0">
                    {product.categoryIcon || "🥬"}
                </div>
                <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-snug">
                        {product.nameBn || product.categoryNameBn}
                    </h3>
                    <span className="text-xs text-gray-500 mt-0.5">
                    প্রতি {Bn}
                    </span>
                </div>
            </div>

        </div>
    );
};

export default CategorySort;