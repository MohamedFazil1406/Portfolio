// app/api/github/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            user(login: "MohamedFazil1406") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  colors
                  months {
                    name
                    firstDay
                    totalWeeks
                  }
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      color
                    }
                  }
                }
              }
            }
          }
        `,
      }),
      cache: "no-store",
    });

    const json = await response.json();

    if (!response.ok || json.errors) {
      console.error(json);

      return NextResponse.json(
        {
          error: json.errors ?? "GitHub GraphQL Error",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      json.data.user.contributionsCollection.contributionCalendar,
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
