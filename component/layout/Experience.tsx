import { experiences } from "@/data/experience";

export default function Experience() {
    return (
        <section id="experience" className="relative px-5 py-24">
            <p className="text-3xl md:text-5xl font-extrabold mb-12">Experience</p>
            <ul className="border-b border-white/20">
                {experiences.map((exp) => (
                    <li
                        key={exp.id}
                        data-scroll
                        className="border-t border-white/20 opacity-0 translate-y-8 transition duration-700 hover:bg-white/5 [&.is-inview]:opacity-100 [&.is-inview]:translate-y-0"
                    >
                        <div className="grid md:grid-cols-[14rem_1fr] gap-4 md:gap-12 py-10 px-2 md:px-6">
                            <div className="font-light text-white/60">
                                <p>{exp.period}</p>
                                <p className="text-sm">{exp.location}</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-4xl font-bold">{exp.company}</p>
                                <p className="mt-1 text-lg font-light">{exp.role}</p>
                                <ul className="mt-4 max-w-3xl space-y-2 list-disc pl-5 font-light text-white/80 marker:text-white/40">
                                    {exp.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {exp.stack.map((s) => (
                                        <span key={s} className="border border-white/30 rounded-full px-3 py-1 text-sm">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
