import { useEffect, useMemo, useState, MutableRefObject } from "react";

export const useIsInViewport = (
    ref: MutableRefObject<Element | null>
): boolean => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            }),
        []
    );

    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, observer]);

    return isIntersecting;
};
