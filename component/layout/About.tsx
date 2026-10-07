import { statement, stats, marquee, toolkit } from "@/data/about";

const reveal = "opacity-0 translate-y-8 transition duration-700 [&.is-inview]:opacity-100 [&.is-inview]:translate-y-0";

export default function About() {
    const tools = marquee;

    return (
        <>
            <section id="about" className="px-5 py-24">
                <p className="text-4xl md:text-5xl font-extrabold mb-12">About</p>
                <p data-scroll className={`${reveal} max-w-5xl text-3xl md:text-5xl font-light leading-tight`}>
                    {statement.map((s, i) => (
                        <span key={i} className={s.muted ? "text-white/40" : ""}>{s.text}</span>
                    ))}
                </p>
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-10 border-t border-white/20 pt-10">
                    {stats.map((s) => (
                        <div key={s.label} data-scroll className={reveal}>
                            <p className="text-4xl md:text-7xl font-bold">{s.value}</p>
                            <p className="mt-2 text-sm text-white/60">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="toolkit" className="py-24">
                <p className="text-4xl md:text-5xl font-extrabold mb-12 px-5">Toolkit</p>
                <div className="overflow-hidden border-y border-white/20 py-6">
                    <div className="flex w-max animate-marquee motion-reduce:animate-none">
                        {[...tools, ...tools].map((t, i) => (
                            <span
                                key={i}
                                aria-hidden={i >= tools.length}
                                className="px-6 md:px-8 text-5xl md:text-8xl font-extrabold whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-16 px-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {toolkit.map((g) => (
                        <div key={g.group} data-scroll className={reveal}>
                            <p className="text-sm uppercase tracking-widest text-white/50 border-b border-white/20 pb-3">{g.group}</p>
                            <ul className="mt-4 space-y-2">
                                {g.items.map((item) => (
                                    <li key={item} className="text-xl font-light">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
