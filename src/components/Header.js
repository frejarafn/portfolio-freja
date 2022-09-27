import AnimatedText from "./AnimatedText";

export default function Header() {
    return (
        <header className="header">
            <article className="vertical-center">
                <h1>
                    <AnimatedText
                        initialText="Jeg er"
                        animatedTextArray={[
                            "Freja van Gilst.",
                            "multimediedesigner.",
                            "frontend developer.",
                            "kreativ & nysgerrig.",
                            "god til at udvikle løsninger."

                        ]}
                    />
                </h1>
                <p>Mulltimediedesigner | 3. semester</p>
            </article>
        </header>
    );
}
