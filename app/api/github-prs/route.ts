import { NextResponse } from "next/server";

const query = `
query($login: String!) {
  user(login: $login) {
    pullRequests(
      first: 20
      orderBy: {field: CREATED_AT, direction: DESC}
    ) {
      totalCount

      nodes {
        title
        number
        url
        createdAt
        state
        merged

        repository {
          nameWithOwner

          owner {
            avatarUrl
            login
          }
        }
      }
    }
  }
}
`;

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          login: process.env.GITHUB_USERNAME,
        },
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("GitHub request failed");
    }

    const json = await res.json();

    if (json.errors) {
      return NextResponse.json({ error: json.errors }, { status: 500 });
    }

    const prs = json.data.user.pullRequests.nodes.map((pr: any) => ({
      title: pr.title,
      number: pr.number,
      url: pr.url,
      createdAt: pr.createdAt,
      state: pr.merged ? "MERGED" : pr.state,
      repository: pr.repository.nameWithOwner,
      avatar: pr.repository.owner.avatarUrl,
    }));

    const total = prs.length;
    const merged = prs.filter((pr: any) => pr.state === "MERGED").length;
    const open = prs.filter((pr: any) => pr.state === "OPEN").length;
    const closed = prs.filter((pr: any) => pr.state === "CLOSED").length;

    return NextResponse.json({
      total,
      merged,
      open,
      closed,
      prs,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({ error: "Failed to fetch PRs" }, { status: 500 });
  }
}
