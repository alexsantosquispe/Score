import { Manager, Match, Player, Team } from "./models/types";
import { supabaseClient } from "./supabase";

export const fetchMatches = async (): Promise<Match[] | null> => {
  const response = await supabaseClient.rpc("get_matches");
  return response.data;
};

export const fetchManagers = async (): Promise<Manager[] | null> => {
  const response = await supabaseClient.from("managers").select();
  return response.data;
};

export const fetchTeams = async (): Promise<Team[] | null> => {
  const response = await supabaseClient.from("teams").select();
  return response.data;
};

export const fetchPlayers = async (): Promise<Player[] | null> => {
  const response = await supabaseClient.from("players").select();
  return response.data;
};
