import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-black p-8">
      <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
        GitHub Activity
      </h2>

      <GitHubCalendar
        username="MohamedFazil1406"
        colorScheme="dark"
        fontSize={14}
      />
    </section>
  );
}