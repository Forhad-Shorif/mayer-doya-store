export const toBengaliNumber = (num: number | string): string => {
    const englishToBanglaDigits: { [key: string]: string } = {
        '0': '০',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
    };

    return num
        .toString()
        .replace(/[0-9]/g, (digit) => englishToBanglaDigits[digit] || digit);
};

// import { toBengaliNumber } from "@/src/utils/toBengaliNumber";

// <span>{toBengaliNumber(500)} টাকা</span> 
// {/* এটি আউটপুট দেখাবে: ৫০০ টাকা */}

// <p>মোট প্রোডাক্ট: {toBengaliNumber(12)}টি</p> 
// {/* এটি আউটপুট দেখাবে: মোট প্রোডাক্ট: ১২টি */}
