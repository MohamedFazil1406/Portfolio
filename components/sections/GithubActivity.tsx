"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ArrowUpRight } from "lucide-react";
import { getGithubContributions } from "../api/github";

export default function GitHubActivity() {
  const [count, setCount] = useState<number>();

  useEffect(() => {
    getGithubContributions("MohamedFazil1406").then(setCount);
  }, []);

  return (
    <a
      href="https://github.com/MohamedFazil1406"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <section className="rounded-3xl border border-zinc-800 bg-black p-6 hover:border-zinc-700 transition-all">
        <div className="mb-6 flex justify-between items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              GitHub Activity
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              {count ?? "..."}
              <span className="ml-2 text-lg font-normal text-zinc-400">
                contributions in the last year
              </span>
            </h2>
          </div>

          <ArrowUpRight className="h-5 w-5 text-zinc-500" />
        </div>

        <div className="overflow-x-auto">
          <GitHubCalendar
            username="MohamedFazil1406"
            colorScheme="dark"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </section>
    </a>
  );
}
