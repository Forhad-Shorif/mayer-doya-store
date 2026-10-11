import { toBengaliNumber } from "@/utils/formatNumber";
interface Market {
    market: string;
    division: string;
    min: number;
    max: number;
}

const SheareDetails = ({ details, index }: { details: Market; index: number }) => {
    
    // Market Devetion and even or odd
    const market = details;
    const MarketDevetion = ((market.max + market.min) / 2);
    const EvenNumber  = index % 2 === 0;
   
    return (

        <tr className={`transition-colors ${EvenNumber ? 'bg-slate-300' : 'bg-slate-100'} hover:bg-slate-200/50`}>
            <td className="py-4 px-6 font-semibold text-slate-800 whitespace-nowrap">
                {market.market}
            </td>
            <td className="py-4 px-6 text-slate-600 whitespace-nowrap">
                {market.division}
            </td>
            <td className="py-4 px-6 font-medium text-slate-700 whitespace-nowrap">
                {toBengaliNumber(market.min)} টাকা
            </td>
            <td className="py-4 px-6 font-medium text-slate-700 whitespace-nowrap">
                {toBengaliNumber(market.max)} টাকা
            </td>
            <td className="py-4 px-6 font-bold text-slate-900 whitespace-nowrap">
                {toBengaliNumber(MarketDevetion)} টাকা
            </td>
        </tr>
    );
};

export default SheareDetails;