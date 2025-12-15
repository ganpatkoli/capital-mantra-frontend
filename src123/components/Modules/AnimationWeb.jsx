import React, { useEffect, useRef, useState } from 'react'

const AnimatedSection = ({ children, animationClass, rootMargin = '-100px 0px' }) => {

    // --- Custom Hook for Scroll Animations ---
    const useIntersectionObserver = (options) => {
        const [isVisible, setIsVisible] = useState(false);
        const elementRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally stop observing once visible (for fade-in effects)
                    observer.unobserve(entry.target);
                }
            }, options);

            if (elementRef.current) {
                observer.observe(elementRef.current);
            }

            return () => {
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            };
        }, [options]);

        return [elementRef, isVisible];
    };


    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, rootMargin });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${animationClass}`}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection
