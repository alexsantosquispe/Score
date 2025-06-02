import { Match, Player, TeamWithManager } from "./models/types";

import { supabaseClient } from "./supabase";

export const fetchMatches = async (): Promise<Match[] | null> => {
  const response = await supabaseClient.rpc("get_matches");
  return response.data;
};

export const fetchTeams = async (): Promise<TeamWithManager[] | null> => {
  const response = await supabaseClient.rpc("get_teams");
  return response.data;
};

export const fetchPlayers = async (): Promise<Player[] | null> => {
  const response = await supabaseClient.rpc("get_players");
  return response.data;
};

export const addTeamWithManager = async (
  teamName: string,
  managerFirstName: string,
  managerLastName: string,
  managerAge: number
): Promise<TeamWithManager[] | null> => {
  const response = await supabaseClient.rpc("add_team_with_manager", {
    team_name: teamName,
    manager_first_name: managerFirstName,
    manager_last_name: managerLastName,
    manager_age: managerAge
  });
  return response.data;
};
