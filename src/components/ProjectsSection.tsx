import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/cv";
import { Chip, SectionHeading, Window, renderBold } from "@/components/Window";

function RepoLink({ url, dark }: { url: string; dark?: boolean }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        dark
          ? "inline-flex items-center gap-2 border-2 border-cream px-4 py-2 font-pixel transition-colors hover:bg-cream hover:text-ink"
          : "inline-flex items-center gap-2 border-2 border-ink px-4 py-2 font-pixel transition-colors hover:bg-ink hover:text-cream"
      }
    >
      <Github size={16} /> View repo <ArrowUpRight size={16} />
    </a>
  );
}

function Featured({ p }: { p: Project }) {
  return (
    <Window
      title={`${p.name}.git`}
      lit={3}
      dark
      className="shadow-[8px_8px_0_0_hsl(var(--orange))]"
      bodyClassName="p-5 sm:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2 font-pixel text-sm text-mustard">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange" aria-hidden />
            Featured · AI
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-wide sm:text-3xl">
            {p.name}
          </h3>
          <p className="mt-2 font-display text-lg text-mustard">{p.tagline}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-cream/85">
            {renderBold(p.description, "font-semibold text-cream")}
          </p>
          <div className="mt-6">
            <RepoLink url={p.url} dark />
          </div>
        </div>
        <div>
          {p.highlights && (
            <ul className="space-y-3">
              {p.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-cream/85">
                  <span className="mt-[0.45em] text-[10px] text-orange" aria-hidden>▶</span>
                  <span>{renderBold(h, "font-semibold text-cream")}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Chip key={t} className="border-cream/60 bg-lunar-2 text-cream">
                {t}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

const SHADOW = ["shadow-[6px_6px_0_0_hsl(var(--mustard))]", "shadow-[6px_6px_0_0_hsl(var(--teal))]", "shadow-[6px_6px_0_0_hsl(var(--orange))]"];

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <Window
      title={`${p.name}.git`}
      lit={(i % 3) + 1}
      className={`flex flex-col ${SHADOW[i % 3]}`}
      bodyClassName="flex flex-1 flex-col"
    >
      <h3 className="font-display text-lg font-bold uppercase leading-snug tracking-wide">{p.name}</h3>
      <p className="mt-1 font-semibold text-orange">{p.tagline}</p>
      <p className="mt-3 text-[15px] leading-relaxed">{renderBold(p.description)}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <RepoLink url={p.url} />
      </div>
    </Window>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section className="border-t-2 border-ink px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Projects" id="projects" />
        <div className="space-y-10">
          {featured.map((p) => (
            <Featured key={p.name} p={p} />
          ))}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Card key={p.name} p={p} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
