// Kode med inspiration fra Rasmus Cederdorff "react-cederdorff-headless-main"
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedText({ initialText, animatedTextArray }) {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: animatedTextArray,
            typeSpeed: 100,
            loop: true
        };

        typed.current = new Typed(el.current, options);

        return () => {

            typed.current.destroy();
        };
    }, [animatedTextArray]);

    return (
        <>
            {initialText} <span style={{ whiteSpace: "pre" }} ref={el} />
        </>
    );
}
