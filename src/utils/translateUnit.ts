export const translateUnit = (unit: string): string => {
    const unitDictionary: { [key: string]: string } = {
        'litre': 'লিটার',
        'liter': 'লিটার',
        'dozne': 'ডজন',
        'dozen': 'ডজন',
        'kg': 'কেজি',
        'kilo': 'কেজি',
        'pice': 'পিস',
        'piece': 'পিস',
        'pcs': 'পিস',
        'gm': 'গ্রাম',
        'gram': 'গ্রাম',
        'kg.': 'কেজি',
    };

    // ছোট হাতের অক্ষরে রূপান্তর করে চেক করা যাতে বানান বা কেসের কোনো সমস্যা না হয়
    const cleanUnit = unit.trim().toLowerCase();
    
    return unitDictionary[cleanUnit] || unit; // অভিধানে না পেলে ইংরেজিটাই দেখাবে
};

// import { translateUnit } from "@/src/utils/translateUnit"; // আপনার পাথ অনুযায়ী ঠিক করে নেবেন

// // ব্যবহারের উদাহরণ:
// <span className="text-slate-600">
//     {translateUnit('kg')} {/* আউটপুট দেখাবে: কেজি */}
// </span>

// <span className="text-slate-600">
//     {translateUnit('litre')} {/* আউটপুট দেখাবে: লিটার */}
// </span>