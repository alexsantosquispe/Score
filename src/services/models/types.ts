export interface Team {
  id: number;
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
  teamId: number;
  teamName: string;
  managerFirstName: string;
  managerLastName: string;
  managerAge: number;
}

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
  squadNumber: number;
  age: number;
  teamId: number;
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
