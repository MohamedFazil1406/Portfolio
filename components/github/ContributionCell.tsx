"use client";

type ContributionDay = {
  contributionCount: number;
  date: string;
  color: string;
};

interface ContributionCellProps {
  day: ContributionDay;
}

export default function ContributionCell({ day }: ContributionCellProps) {
  const bgColor = day.contributionCount === 0 ? "#161b22" : day.color;

  const tooltipDate = new Date(day.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group/cell relative">
      {/* Contribution Cell */}
      <div
        className="
          h-3.5
          w-3.5
          cursor-pointer
          rounded-xs
          border
          border-white/10
          transition-all
          duration-200
          group-hover/cell:scale-125
          group-hover/cell:ring-2
          group-hover/cell:ring-blue-400
        "
        style={{ backgroundColor: bgColor }}
      />

      {/* Tooltip */}
      <div
        className="
            pointer-events-none
            absolute
            top-full
            left-1/2
            z-999
            mt-2
            -translate-x-1/2
            whitespace-nowrap

            rounded-lg
            border
            border-white/10
            bg-neutral-900
            px-3
            py-2
            text-xs
            text-white
            shadow-xl

            invisible
            opacity-0
            scale-95

            transition-all
            duration-150

            group-hover/cell:visible
            group-hover/cell:opacity-100
            group-hover/cell:scale-100
          "
      >
        <p className="font-semibold">
          {day.contributionCount} contribution
          {day.contributionCount !== 1 ? "s" : ""}
        </p>

        <p className="mt-1 text-neutral-400">{tooltipDate}</p>
      </div>
    </div>
  );
}
