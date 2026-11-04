import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Three window "lights". `lit` = how many are filled (0–3), the last ones in orange. */
export function WindowDots({ lit = 1, className }: { lit?: number; className?: string }) {
  return (
    <span className={cn("flex items-center gap-1", className)} aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            "h-2.5 w-2.5 rounded-full border-[1.5px] border-current",
            i >= 3 - lit && "bg-orange border-orange"
          )}
        />
      ))}
    </span>
  );
}

interface WindowProps {
  title: ReactNode;
  icon?: ReactNode;
  lit?: number;
  className?: string;
  bodyClassName?: string;
  dark?: boolean;
  children: ReactNode;
}

/** A framed panel with a pixel-type title bar — the site's main building block. */
export function Window({ title, icon, lit = 1, className, bodyClassName, dark, children }: WindowProps) {
  return (
    <div
      className={cn(
        "border-2 border-ink",
        dark ? "bg-lunar text-cream" : "bg-paper-hi text-ink",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-3 border-b-2 border-ink px-3 py-1.5 sm:px-4",
          dark ? "bg-cream text-ink" : "bg-paper-lo"
        )}
      >
        <span className="flex min-w-0 items-center gap-2 font-pixel text-sm sm:text-base">
          {icon}
          <span className="truncate">{title}</span>
        </span>
        <WindowDots lit={lit} />
      </div>
      <div className={cn("p-4 sm:p-5", bodyClassName)}>{children}</div>
    </div>
  );
}

export function SectionHeading({ index, kicker, title, id }: { index: string; kicker: string; title: string; id: string }) {
  return (
    <div className="mb-8 flex items-end gap-4 sm:mb-10">
      <div className="shrink-0">
        <p className="font-pixel text-sm text-orange">
          {index} <span className="text-mute">/ {kicker}</span>
        </p>
        <h2 id={id} className="font-display text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mb-2 h-[2px] flex-1 bg-ink" />
    </div>
  );
}

/** Render **bold** markers in data strings. */
export function renderBold(text: string, strongClass = "font-semibold") {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={strongClass}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block border-[1.5px] border-ink bg-paper px-2 py-0.5 font-pixel text-[13px] leading-5",
        className
      )}
    >
      {children}
    </span>
  );
}
