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

    
    const cleanUnit = unit.trim().toLowerCase();
    
    return unitDictionary[cleanUnit] || unit; 
};
