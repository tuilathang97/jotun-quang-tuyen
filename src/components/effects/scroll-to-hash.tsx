"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

const ScrollIntoViewEffect = () => {
    const params = useParams();
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.getElementById(hash.substring(1));
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                const fixedNavHeight = 80; // Adjust based on your navigation bar's height

                window.scrollTo({
                    top: offsetTop - fixedNavHeight,
                    behavior: 'smooth'
                });
            }
        }
    }, [params]);
    return(
        <></>
    )
}

export default ScrollIntoViewEffect;