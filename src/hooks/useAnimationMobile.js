import { useState, useEffect } from "react";

export const useAnimationMobile = (breakpoint = 768) => {
    const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(
        () => window.innerWidth < breakpoint
    );

    useEffect(() => {
        const handleResize = () => {
            setIsBelowBreakpoint(window.innerWidth < breakpoint);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [breakpoint]);

    return isBelowBreakpoint;
};