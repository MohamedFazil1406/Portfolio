"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaCodeBranch,
  FaCheckCircle,
  FaTimesCircle,
  FaCircle,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ContributionCard from "./ContributionCard";

type PullRequest = {
  title: string;
  number: number;
  url: string;
  state: "MERGED" | "OPEN" | "CLOSED";
  createdAt: string;
  repository: string;
  avatar: string;
};

type Response = {
  total: number;
  merged: number;
  open: number;
  closed: number;
  prs: PullRequest[];
};

export default function OpenSource() {
  const [data, setData] = useState<Response | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchPRs() {
      try {
        const res = await fetch("/api/github-prs");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPRs();
  }, []);

  if (loading) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="animate-pulse space-y-5">
            <div className="h-6 w-56 rounded bg-white/10" />
            <div className="h-4 w-80 rounded bg-white/10" />

            {[1, 2, 3].map((i) => (
              <div key={i} className="h-28 rounded-xl bg-white/10" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-500/15 p-4 text-3xl text-blue-400">
              <FaGithub />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                Open Source Contributions
              </h2>

              <p className="text-gray-400">
                Recent pull requests across GitHub
              </p>
            </div>
          </div>

          <FiExternalLink className="text-2xl text-gray-500" />
        </div>

        {/* Stats */}

        <div className="mt-8 flex flex-wrap gap-5">
          <div className="flex items-center gap-2 rounded-xl bg-blue-500/10 px-5 py-3">
            <FaCodeBranch className="text-blue-400" />

            <span className="font-semibold text-white">{data.total}</span>

            <span className="text-gray-400">Total</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-purple-500/10 px-5 py-3">
            <FaCheckCircle className="text-purple-400" />

            <span className="font-semibold text-white">{data.merged}</span>

            <span className="text-gray-400">Merged</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-green-500/10 px-5 py-3">
            <FaCircle className="text-green-400 text-xs" />

            <span className="font-semibold text-white">{data.open}</span>

            <span className="text-gray-400">Open</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-red-500/10 px-5 py-3">
            <FaTimesCircle className="text-red-400" />

            <span className="font-semibold text-white">{data.closed}</span>

            <span className="text-gray-400">Closed</span>
          </div>
        </div>

        {/* PR Cards */}

        <div className="mt-10 space-y-5">
          {(showAll ? data.prs : data.prs.slice(0, 5)).map((pr) => (
            <ContributionCard key={pr.url} pr={pr} />
          ))}
        </div>

        {data.prs.length > 7 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 px-6 py-3 font-medium text-blue-400 transition-all hover:bg-blue-500/20 hover:scale-105"
            >
              {showAll ? "Show Less" : `Show ${data.prs.length - 5} More`}

              <span
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
