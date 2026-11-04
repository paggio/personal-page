import { ArrowUpRight } from "lucide-react";
import { publications } from "@/data/cv";
import { SectionHeading, Window } from "@/components/Window";

export function PublicationsSection() {
  return (
    <div>
      <SectionHeading index="04" kicker="Library" title="Papers" id="publications" />
      <div className="space-y-6">
        {publications.map((p) => (
          <Window key={p.url} title="arxiv_1906.01270.pdf" lit={1} className="shadow-[6px_6px_0_0_hsl(var(--teal))]">
            <p className="font-pixel text-mute">
              {p.institution} · {p.year}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold leading-snug">{p.title}</h3>
            <p className="mt-3 text-[15px] text-mute">
              On the actual role of electron-phonon coupling in high-T<sub>c</sub> superconductors.
            </p>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border-2 border-ink px-4 py-2 font-pixel transition-colors hover:bg-ink hover:text-cream"
            >
              Read on arXiv <ArrowUpRight size={16} />
            </a>
          </Window>
        ))}
      </div>
    </div>
  );
}
