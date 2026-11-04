import { skills } from "@/data/cv";
import { Chip, SectionHeading, Window } from "@/components/Window";

const ACCENT = ["bg-mustard", "bg-orange", "bg-teal"];

export function SkillsSection() {
  return (
    <section className="border-y-2 border-ink bg-paper-lo/60 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" kicker="Amenities" title="Skills" id="skills" />
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, i) => (
            <Window
              key={group.category}
              title={group.category.toLowerCase().replace(/[^a-z]+/g, "_").replace(/_$/, "")}
              lit={i + 1}
              icon={<span className={`h-3 w-3 ${ACCENT[i % 3]} border border-ink`} aria-hidden />}
            >
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </Window>
          ))}
        </div>
      </div>
    </section>
  );
}
