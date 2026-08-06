"use client";

import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { FaCodeBranch } from "react-icons/fa";

type PullRequest = {
  title: string;
  number: number;
  url: string;
  state: "MERGED" | "OPEN" | "CLOSED";
  createdAt: string;
  repository: string;
  avatar: string;
};

interface Props {
  pr: PullRequest;
}

export default function ContributionCard({ pr }: Props) {
  const formattedDate = new Date(pr.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const badge = {
    MERGED: {
      text: "Merged",
      className: "bg-purple-500/15 text-purple-300 border border-purple-500/30",
    },
    OPEN: {
      text: "Open",
      className: "bg-green-500/15 text-green-300 border border-green-500/30",
    },
    CLOSED: {
      text: "Closed",
      className: "bg-red-500/15 text-red-300 border border-red-500/30",
    },
  };

  return (
    <a
      href={pr.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/5 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)]">
        <div className="flex items-start justify-between gap-6">
          {/* Left */}
          <div className="flex gap-4">
            <Image
              src={pr.avatar}
              alt={pr.repository}
              width={52}
              height={52}
              className="rounded-full border border-white/10"
            />

            <div>
              <h3 className="text-lg font-semibold text-white transition group-hover:text-blue-400">
                {pr.title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <FaCodeBranch />
                  {pr.repository}
                </span>

                <span>•</span>

                <span>PR #{pr.number}</span>
              </div>

              <p className="mt-3 text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>

          {/* Right */}

          <div className="flex flex-col items-end gap-3">
            <span
              className={`rounded-full px-4 py-1 text-xs font-semibold ${badge[pr.state].className}`}
            >
              {badge[pr.state].text}
            </span>

            <FiExternalLink className="text-xl text-gray-500 transition group-hover:text-blue-400" />
          </div>
        </div>
      </div>
    </a>
  );
}
