"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "./GitHubCalendar";

type GitHubData = {
  totalContributions: number;
  colors: string[];
  months: {
    name: string;
    firstDay: string;
    totalWeeks: number;
  }[];
  weeks: {
    contributionDays: {
      contributionCount: number;
      date: string;
      color: string;
    }[];
  }[];
};

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch("/api/github");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-neutral-800 bg-black p-6">
        <p className="text-sm text-neutral-500">Loading GitHub activity...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-2xl border border-neutral-800 bg-black p-6">
        <p className="text-sm text-red-400">Failed to load GitHub activity.</p>
      </div>
    );
  }

  return (
    <a
      href="https://github.com/MohamedFazil1406"
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="rounded-2xl max-w-215 border border-neutral-800 bg-black p-6 shadow-lg">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
            GitHub Activity
          </h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-neutral-500 transition group-hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H9M17 7v8"
            />
          </svg>
        </div>

        {/* Total Contributions */}
        <p className="mb-6 text-lg">
          <span className="font-bold text-white">
            {data.totalContributions.toLocaleString()}
          </span>{" "}
          <span className="text-neutral-400">
            contributions in the last year
          </span>
        </p>

        {/* Calendar */}
        <GitHubCalendar
          weeks={data.weeks}
          months={data.months}
          colors={data.colors}
        />
      </div>
    </a>
  );
}
