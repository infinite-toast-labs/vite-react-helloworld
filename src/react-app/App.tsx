import { useMemo, useState } from "react";
import "./App.css";

function App() {
        const [ornaments, setOrnaments] = useState(6);
        const [northPoleName, setNorthPoleName] = useState("the elves");

        const ornamentIcons = useMemo(() => ["🎄", "🎁", "⭐", "🍪", "❄️", "🦌", "🧤", "🧣"], []);

        return (
                <main className="page">
                        <div className="twinkles" aria-hidden />
                        <div className="snow" aria-hidden />

                        <header className="hero">
                                <p className="eyebrow">Festive Hello World</p>
                                <h1>
                                        Merry &amp; Bright <span className="highlight">Hello, World!</span>
                                </h1>
                                <p className="intro">
                                        Welcome to a cozy corner of the internet where the console smells like
                                        cinnamon and every build is wrapped with a bow. Spread some cheer by hanging
                                        ornaments and saying hello to the North Pole API!
                                </p>
                        </header>

                        <section className="garland" aria-label="Sparkling ornament garland">
                                {Array.from({ length: ornaments }).map((_, index) => (
                                        <span className="ornament" key={`ornament-${index}`}>
                                                {ornamentIcons[index % ornamentIcons.length]}
                                        </span>
                                ))}
                        </section>

                        <div className="grid">
                                <article className="card action">
                                        <p className="card-title">Deck the Tree</p>
                                        <p className="card-body">
                                                Add more ornaments to keep the garland sparkling. Each click sprinkles a
                                                little extra joy across the page.
                                        </p>
                                        <button
                                                className="cta"
                                                onClick={() => setOrnaments((current) => current + 1)}
                                                aria-label="Add ornament"
                                        >
                                                Hang another ornament
                                        </button>
                                </article>

                                <article className="card action">
                                        <p className="card-title">Postcard from the North Pole</p>
                                        <p className="card-body">
                                                Fetch a greeting from the worker API and see who&apos;s signing the holiday
                                                card today.
                                        </p>
                                        <button
                                                className="cta"
                                                onClick={() => {
                                                        fetch("/api/")
                                                                .then((res) => res.json() as Promise<{ name: string }>)
                                                                .then((data) => setNorthPoleName(data.name));
                                                }}
                                                aria-label="Fetch greeting"
                                        >
                                                Say hello to the North Pole
                                        </button>
                                        <p className="signature">Warm wishes from {northPoleName} ❄️</p>
                                </article>
                        </div>

                        <footer className="footer">
                                <p>Built with Vite, React, Hono, and a sleigh full of holiday spirit.</p>
                        </footer>
                </main>
        );
}

export default App;
