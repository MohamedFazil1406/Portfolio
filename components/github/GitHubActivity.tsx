"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
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
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-5 w-44 rounded bg-white/10" />
          <div className="h-4 w-72 rounded bg-white/10" />
          <div className="h-40 rounded-xl bg-white/10" />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 text-center">
        <p className="text-red-400">Failed to load GitHub activity.</p>
      </div>
    );
  }

  return (
    <a
      href="https://github.com/MohamedFazil1406"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-500/15 p-4 text-3xl text-blue-400">
              <FaGithub />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">GitHub Activity</h2>

              <p className="text-sm text-gray-400">
                Contributions over the last 12 months
              </p>
            </div>
          </div>

          <FiExternalLink className="text-2xl text-gray-500 transition hover:text-blue-400" />
        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="rounded-xl bg-blue-500/10 px-5 py-3">
            <p className="text-3xl font-bold text-blue-400">
              {data.totalContributions.toLocaleString()}
            </p>
            <p className="text-sm text-gray-400">Contributions</p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-green-500/10 px-5 py-3 text-green-400">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
            Active Open Source Contributor
          </div>
        </div>

        {/* Calendar */}
        <div className="mt-8 overflow-x-auto pb-16">
          <GitHubCalendar
            weeks={data.weeks}
            months={data.months}
            colors={data.colors}
          />
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <p className="text-sm text-gray-500">github.com/MohamedFazil1406</p>

          <span className="text-sm font-medium text-blue-400">
            View Profile →
          </span>
        </div>
      </div>
    </a>
  );
}
