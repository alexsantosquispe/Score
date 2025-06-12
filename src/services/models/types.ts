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
  id: number;
  firstName: string;
  lastName: string;
  position: "Portero" | "Defensa" | "Centrocampista" | "Delantero";
  squadNumber: number;
  age: number;
  teamId: number;
  teamName: string;
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
