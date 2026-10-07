import { selectedWorks } from "@/data/selectedWork";

const CARD_WIDTH = 85;

export default function SelectedWork() {
    const n = selectedWorks.length;

    return (
        <div
            id="selected-work"
            data-scroll
            data-scroll-css-progress
            data-scroll-offset="100%,100%"
            style={{ height: `${n * 100}dvh` }}
        >
            <section className="sticky top-0 h-dvh flex flex-col overflow-hidden pt-20 md:pt-24">
                <p className="text-4xl md:text-5xl font-extrabold px-5">Selected Work</p>
                <div
                    className="flex flex-1 mt-6"
                    style={{ transform: `translateX(calc(var(--progress, 0) * -${Math.max(0, (n * CARD_WIDTH + 5) - 100)}%))` }}
                >
                    {selectedWorks.map((work, i) => (
                        <div key={work.id} className="shrink-0 pl-5 pb-5" style={{ width: `${CARD_WIDTH}%` }}>
                            <div className="h-full border border-white/20 flex flex-col justify-between gap-4 md:gap-6 p-5 md:p-12">
                                <div className="flex justify-between text-sm font-light text-white/60">
                                    <span>{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
                                    <span>{work.type} · {work.role} · {work.year}</span>
                                </div>
                                <div>
                                    <p className="text-3xl md:text-6xl font-bold">{work.title}</p>
                                    <p className="mt-3 md:mt-4 max-w-xl md:text-lg font-light text-white/80">{work.description}</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                                    <div>
                                        <p className="text-sm uppercase tracking-widest text-white/50">Challenge</p>
                                        <p className="mt-2 text-sm md:text-base font-light text-white/80">{work.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-widest text-white/50">Solution</p>
                                        <p className="mt-2 text-sm md:text-base font-light text-white/80">{work.solution}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {work.stack.map((s) => (
                                        <span key={s} className="border border-white/30 rounded-full px-3 py-1 text-sm">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
