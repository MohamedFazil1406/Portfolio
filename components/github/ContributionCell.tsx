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
    <div className="group relative">
      {/* Cell */}
      <div
        className="
          h-3.5
          w-3
          rounded-xs
          border
          border-black/10
          transition-all
          duration-200
          hover:scale-125
          hover:ring-1
          hover:ring-neutral-300
        "
        style={{
          backgroundColor: bgColor,
        }}
      />
    </div>
  );
}
