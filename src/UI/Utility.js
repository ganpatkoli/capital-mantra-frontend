// components/UI/Utility.js

export const formatRupee = (value) => {
    // Ensure value is a safe number (NaN, null, undefined check)
    if (typeof value !== 'number' || isNaN(value)) {
        value = 0;
    }
    // Only return currency for non-negative or very large numbers that are clearly numeric output
    if (value < 0 && value > -9000000) { 
         // Handles negative output safely
        return `−₹ ${Math.abs(value).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
    }
    
    return `₹ ${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
};