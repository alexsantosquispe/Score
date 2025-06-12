export const POSITION = {
  GOALKEEPER: "Goalkeeper",
  DEFENDER: "Defender",
  MIDFIELDER: "Midfielder",
  FORWARD: "Forward"
} as const;

export type Position = (typeof POSITION)[keyof typeof POSITION];

export interface Team {
  id: string;
  name: string;
}

export interface Manager {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  teamId: number;
}

export interface TeamWithManager {
  teamId: string;
  teamName: string;
  teamCountry: string;
  teamLogo: string;
  managerFirstName: string;
  managerLastName: string;
  managerAge: number;
  managerCountry: string;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  position: Position;
  squadNumber: number;
  age: number;
  teams: Team;
}

export interface Match {
  id: number;
  matchDate: string;
  homeScore: number;
  awayScore: number;
  homeTeamId: number;
  homeTeamName: string;
  awayTeamId: number;
  awayTeamName: string;
}
