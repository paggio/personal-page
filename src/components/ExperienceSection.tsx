import { experience } from "@/data/cv";
import { Chip, SectionHeading, Window, renderBold } from "@/components/Window";
import { cn } from "@/lib/utils";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "_").replace(/^_|_$/g, "");

function Bullets({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("mt-4 space-y-2.5", className)}>
      {items.map((para, j) => (
        <li key={j} className="flex gap-3 text-[15px] leading-relaxed">
          <span className="mt-[0.45em] text-[10px] text-orange" aria-hidden>▶</span>
          <span>{renderBold(para)}</span>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceSection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="Experience" id="experience" />

        <ol className="relative">
          {experience.map((entry, i) => {
            const last = i === experience.length - 1;
            return (
              <li key={`${entry.company}-${entry.period}`} className="relative grid gap-4 pb-10 pl-10 md:grid-cols-[220px_1fr] md:gap-8 md:pl-12">
                {/* rail + node, Pixel-Poetry-style: filled = now, hollow = past */}
                {!last && <span className="absolute bottom-0 left-[11px] top-3 w-[2px] bg-ink" aria-hidden />}
                <span
                  className={cn(
                    "absolute left-0 top-1 h-6 w-6 rounded-full border-2 border-ink",
                    entry.current ? "bg-orange" : "bg-paper"
                  )}
                  aria-hidden
                />

                <div className="md:pt-0.5">
                  <p className={cn("font-pixel text-lg", entry.current ? "text-orange" : "text-ink")}>
                    {entry.period.replace("Present", "now")}
                  </p>
                  <p className="mt-1 text-sm text-mute">{entry.location}</p>
                </div>

                <Window
                  title={`${entry.id ?? slug(entry.company)}.exp`}
                  lit={entry.current ? 3 : 0}
                  icon={
                    <img
                      src={`${import.meta.env.BASE_URL}${entry.logo}`}
                      alt=""
                      className="h-5 w-5 border border-ink bg-white object-contain"
                    />
                  }
                  className={cn(
                    "transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1",
                    entry.current
                      ? "shadow-[6px_6px_0_0_hsl(var(--orange))] hover:shadow-[10px_10px_0_0_hsl(var(--orange))]"
                      : "hover:shadow-[8px_8px_0_0_hsl(var(--ink))]"
                  )}
                >
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide sm:text-2xl">{entry.title}</h3>
                  <p className="mt-0.5 font-semibold text-orange">{entry.company}</p>
                  {entry.description.length > 0 && <Bullets items={entry.description} />}
                  {entry.roles?.map((role, k) => (
                    <div key={role.title} className={cn("mt-5", k > 0 && "border-t-[1.5px] border-dashed border-ink/30 pt-4")}>
                      <p className="flex items-center gap-2 font-pixel text-[15px] text-teal">
                        <span className="h-2 w-2 bg-teal" aria-hidden />
                        {role.title}
                      </p>
                      <Bullets items={role.bullets} className="mt-2.5" />
                    </div>
                  ))}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </Window>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
