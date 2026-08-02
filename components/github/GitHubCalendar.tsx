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
  const monthNames = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <div className="no-scrollbar overflow-x-auto overflow-y-visible pb-2">
      <div className="relative inline-block min-w-max">
        {/* Month Labels */}
        <div className="mb-3 flex pl-8">
          {months.map((month) => (
            <div
              key={`${month.name}-${month.firstDay}`}
              className="text-xs font-medium text-gray-400"
              style={{
                width: `${month.totalWeeks * 16}px`,
              }}
            >
              {month.name}
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="flex">
          {/* Weekday Labels */}
          <div className="mr-2 flex flex-col justify-between text-[11px] text-gray-500">
            {monthNames.map((day, index) => (
              <div key={index} className="flex h-4 items-center">
                {day}
              </div>
            ))}
          </div>

          {/* Contribution Grid */}
          <div className="flex gap-0.75">
            {weeks.map((week, index) => (
              <div key={index} className="flex flex-col gap-0.75">
                {week.contributionDays.map((day) => (
                  <ContributionCell key={day.date} day={day} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
          <span>Learn how we count contributions</span>

          <div className="flex items-center gap-2">
            <span>Less</span>

            <div className="flex gap-1">
              {["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"].map(
                (color) => (
                  <div
                    key={color}
                    className="h-3 w-3 rounded-sm border border-white/5"
                    style={{
                      backgroundColor: color,
                    }}
                  />
                ),
              )}
            </div>

            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
