import { education } from "@/data/cv";
import { SectionHeading, Window } from "@/components/Window";

export function EducationSection() {
  return (
    <div>
      <SectionHeading index="03" kicker="Archive" title="Education" id="education" />
      <div className="space-y-6">
        {education.map((e) => (
          <Window key={e.degree} title={`${e.degree.split(" ")[0].toLowerCase()}.diploma`} lit={0}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">{e.degree}</h3>
              <span className="font-pixel text-mute">{e.period}</span>
            </div>
            <p className="mt-0.5 font-semibold text-orange">{e.institution}</p>
            {e.note && <p className="mt-2 text-[15px]">{e.note}</p>}
            <p className="mt-3 inline-block border-[1.5px] border-ink bg-mustard px-2 font-pixel text-sm">
              Final grade {e.grade}
            </p>
          </Window>
        ))}
      </div>
    </div>
  );
}
