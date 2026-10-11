import { toBengaliNumber } from "@/utils/formatNumber";
interface PriceStore {
    LowPrice: number;
    HighPrice: number;
    AveragePrice: number;
}

// Details page Price Store
const PriceStore = ({ LowPrice, HighPrice, AveragePrice }: PriceStore) => {

    return (
        <div>

            {/* Price Store */}
            <h2 className="text-lg font-bold text-slate-800">দামের সারসংক্ষেপ</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center space-y-1">
                    <span className="text-xs font-medium text-slate-500">সর্বনিম্ন দাম</span>
                    <p className="text-xl font-bold text-slate-800">
                        {toBengaliNumber(LowPrice)} <span className="text-sm font-normal text-slate-600">টাকা</span>
                    </p>
                    <span className="text-xs text-slate-400 block">সবচেয়ে কম দামের বাজার</span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center space-y-1">
                    <span className="text-xs font-medium text-slate-500">সর্বাধিক দাম</span>
                    <p className="text-xl font-bold text-slate-800">
                        {toBengaliNumber(HighPrice)} <span className="text-sm font-normal text-slate-600">টাকা</span>
                    </p>
                    <span className="text-xs text-slate-400 block">সবচেয়ে বেশি দামের বাজার</span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center space-y-1">
                    <span className="text-xs font-medium text-slate-500">গড় দাম</span>
                    <p className="text-xl font-bold text-slate-800">
                        {toBengaliNumber(AveragePrice)} <span className="text-sm font-normal text-slate-600">টাকা</span>
                    </p>
                    <span className="text-xs text-slate-400 block">প্রতি কেজি-এর হিসাবে</span>
                </div>
            </div>

        </div>
    );
};

export default PriceStore;