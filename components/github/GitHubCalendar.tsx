"use client";

import ContributionCell from "./ContributionCell";

type ContributionDay = {
  contributionCount: number;
  date: string;
  color: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

type Month = {
  name: string;
  firstDay: string;
  totalWeeks: number;
};

interface Props {
  weeks: Week[];
  months: Month[];
  colors: string[];
}

export default function GitHubCalendar({ weeks, months }: Props) {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        {/* Month Labels */}
        <div className="mb-2 flex pl-10">
          {months.map((month, index) => (
            <div
              key={index}
              className="font-semibold text-white"
              style={{
                width: `${month.totalWeeks * 14}px`,
              }}
            >
              {month.name}
            </div>
          ))}
        </div>

        <div className="flex">
          {/* Weekday Labels */}
          <div className="mr-2 flex flex-col justify-between py-0 font-semibold text-white">
            <span></span>
            <span>Mon</span>
            <span></span>
            <span>Wed</span>
            <span></span>
            <span>Fri</span>
            <span></span>
          </div>

          {/* Contribution Grid */}
          <div className="flex gap-0.5">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-0.5">
                {week.contributionDays.map((day) => (
                  <ContributionCell key={day.date} day={day} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
          <span>Less</span>

          <div className="flex gap-0.5">
            <div className="h-2.5 w-2.5 rounded-sm bg-[#161b22]" />
            <div className="h-2.5 w-2.5  rounded-sm bg-[#0e4429]" />
            <div className="h-2.5 w-2.5  rounded-sm bg-[#006d32]" />
            <div className="h-2.5 w-2.5  rounded-sm bg-[#26a641]" />
            <div className="h-2.5 w-2.5  rounded-sm bg-[#39d353]" />
          </div>

          <span>More</span>
        </div>
      </div>
    </div>
  );
}
