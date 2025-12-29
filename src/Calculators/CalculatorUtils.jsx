// components/Calculators/CalculatorUtils.jsx
import React from 'react';

// Helper component for the Doughnut Chart visual representation
export const DoughnutChart = ({ invested, returns, investedColor, returnsColor }) => {
    const total = invested + returns;
    const investedPercent = total > 0 ? (invested / total) * 100 : 50;
    const returnsPercent = total > 0 ? (returns / total) * 100 : 50;

    const baseInvestedColor = investedColor || '#10B981'; // Default Emerald
    const baseReturnsColor = returnsColor || '#06B6D4'; // Default Cyan
    const emptyColor = '#475569'; // Slate 600

    const style = {
        background: `conic-gradient(
            ${baseInvestedColor} 0% ${investedPercent}%,
            ${baseReturnsColor} ${investedPercent}%,
            ${emptyColor} ${investedPercent + returnsPercent}% 100%
        )`,
    };

    return (
        <div className="flex flex-col items-center">
            <div className="relative h-40 w-40">
                <div style={style} className="h-full w-full rounded-full" />
                {/* Inner hole for the doughnut effect */}
                <div className="absolute inset-4 rounded-full bg-slate-50 dark:bg-slate-900" />
            </div>
            <div className="mt-4 flex space-x-4 text-xs font-medium">
                <div className="flex items-center text-slate-700 dark:text-slate-400">
                    <span className="mr-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: baseInvestedColor }}></span>
                    Invested
                </div>
                <div className="flex items-center text-slate-700 dark:text-slate-400">
                    <span className="mr-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: baseReturnsColor }}></span>
                    Returns
                </div>
            </div>
        </div>
    );
};

// Reusable Input Group with Slider
export const InputGroup = ({ label, value, setter, min, max, unit, accentColor, step = 1, placeholder = '' }) => (
    <div className="space-y-1">
        <div className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300">
            <label htmlFor={label}>{label}</label>
            <span className={accentColor}>
                <input
                    type="number"
                    id={label}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    placeholder={placeholder || min}
                    className="w-20 text-right bg-transparent border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-emerald-500"
                    min={min}
                    max={max}
                    step={step}
                />
                {unit}
            </span>
        </div>
        {/* Range Slider for better UX */}
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value || min}
            onChange={(e) => setter(e.target.value)}
            className={`w-full h-2 rounded-full appearance-none cursor-pointer range-slider-${label.replace(/\s/g, '-')}`}
            style={{
                '--range-color': accentColor.includes('emerald') ? '#10B981' :
                                 accentColor.includes('cyan') ? '#06B6D4' :
                                 accentColor.includes('fuchsia') ? '#D946EF' :
                                 accentColor.includes('purple') ? '#A855F7' :
                                 accentColor.includes('indigo') ? '#4F46E5' :
                                 accentColor.includes('orange') ? '#F97316' :
                                 accentColor.includes('pink') ? '#EC4899' :
                                 accentColor.includes('teal') ? '#14B8A6' :
                                 accentColor.includes('red') ? '#EF4444' :
                                 accentColor.includes('amber') ? '#F59E0B' :
                                 '#10B981' 
            }}
        />
    </div>
);