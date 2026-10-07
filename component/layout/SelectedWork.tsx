import type { CSSProperties } from "react";
import { selectedWorks } from "@/data/selectedWork";

const CARD_WIDTH = 85;

export default function SelectedWork() {
    const n = selectedWorks.length;

    // Horizontal pinned scroll only from md up; mobile stacks the cards vertically.
    return (
        <div
            id="selected-work"
            data-scroll
            data-scroll-css-progress
            data-scroll-offset="100%,100%"
            className="md:h-(--h)"
            style={{ "--h": `${n * 100}dvh` } as CSSProperties}
        >
            <section className="py-24 md:py-0 md:pt-24 md:sticky md:top-0 md:h-dvh md:flex md:flex-col md:overflow-hidden">
                <p className="text-4xl md:text-5xl font-extrabold px-5 mb-12 md:mb-0">Selected Work</p>
                <div
                    className="flex flex-col md:flex-row md:flex-1 md:min-h-0 md:mt-6 md:translate-x-(--tx) px-5 md:px-0 border-b border-white/20 md:border-b-0"
                    style={{ "--tx": `calc(var(--progress, 0) * -${Math.max(0, (n * CARD_WIDTH + 5) - 100)}%)` } as CSSProperties}
                >
                    {selectedWorks.map((work, i) => (
                        <div
                            key={work.id}
                            data-scroll
                            className="md:shrink-0 md:w-(--w) md:pl-5 md:pb-5 transition duration-700 max-md:opacity-0 max-md:translate-y-8 max-md:[&.is-inview]:opacity-100 max-md:[&.is-inview]:translate-y-0"
                            style={{ "--w": `${CARD_WIDTH}%` } as CSSProperties}
                        >
                            <div className="md:h-full border-t md:border border-white/20 flex flex-col md:justify-between gap-6 py-10 px-2 md:p-12">
                                <div className="flex flex-wrap justify-between gap-x-4 text-sm font-light text-white/60">
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
