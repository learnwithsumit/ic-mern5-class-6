import { useEffect, useState } from "react";

// this hook calculates current window size and returns whether you are on small screen or not (true/false)
export default function useScreenSize(threshold) {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const screenSize = window.innerWidth;

            if (screenSize <= threshold) {
                setOnSmallScreen(true);
            } else {
                setOnSmallScreen(false);
            }
        };

        checkScreenSize();

        window.addEventListener("resize", checkScreenSize);

        // cleanup
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, [threshold]);

    return onSmallScreen;
}
