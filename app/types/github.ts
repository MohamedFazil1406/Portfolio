export interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface Month {
  firstDay: string;
  name: string;
  totalWeeks: number;
}

export interface ContributionCalendar {
  colors: string[];
  months: Month[];
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface GithubResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: ContributionCalendar;
      };
    };
  };
}
