import { Manager, Match, Player, Team, TeamWithManager } from "./models/types";

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
