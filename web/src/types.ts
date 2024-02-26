export interface UserInfo {
  [key: string]: number;
}

export interface Contributor {
  id: number;
  login: string;
  contributions: number;
  years: number[];
  repositories: string[];
  first_contribution: {
    number?: number;
    sha?: string;
    kind: ContributionKind;
    owner: string;
    repository: string;
    title: string;
    ts: number;
  };
}

export enum ContributionKind {
  COMMIT = 'commit',
  ISSUE = 'issue',
  PR = 'pull_request',
}