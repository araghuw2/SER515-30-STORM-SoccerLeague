package com.asu.soccer.tournament.SoccerTournament.common.model;

import java.util.List;

public class TeamCreateModel {
	
	private String team_name;
	
	private Integer coach_id;
	
	private List<PlayerModel> playerList;

	public String getTeam_name() {
		return team_name;
	}

	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}

	public Integer getCoach_id() {
		return coach_id;
	}

	public void setCoach_id(Integer coach_id) {
		this.coach_id = coach_id;
	}

	public List<PlayerModel> getPlayerList() {
		return playerList;
	}

	public void setPlayerList(List<PlayerModel> playerList) {
		this.playerList = playerList;
	}
	
	
}
