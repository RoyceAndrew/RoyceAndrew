import { certifications } from "@/data/certification";

export default function Certifications() {
    return (
        <section id="certifications" className="px-5 py-24">
            <p className="text-4xl md:text-5xl font-extrabold mb-12">Certifications</p>
            <div className="grid md:grid-cols-3 gap-5">
                {certifications.map((c, i) => (
                    <div
                        key={c.id}
                        data-scroll
                        className="flex flex-col border border-white/20 p-6 opacity-0 translate-y-8 transition duration-700 hover:bg-white/5 [&.is-inview]:opacity-100 [&.is-inview]:translate-y-0"
                        style={{ transitionDelay: `${i * 100}ms` }}
                    >
                        <p className="text-sm font-light text-white/60">{c.period}</p>
                        <p className="mt-6 text-xl md:text-2xl font-bold">{c.title}</p>
                        <p className="mt-1 font-light">{c.issuer}</p>
                        <p className="mt-4 text-sm font-light text-white/70">{c.note}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
