package com.asu.soccer.tournament.SoccerTournament.common.model;

import java.util.ArrayList;
import java.util.List;

import com.asu.soccer.tournament.SoccerTournament.common.entity.GameEntity;

public class ScheduleModelReturn {
	
	private List<GameEntity> scheduledMatches = new ArrayList<>();
	
	private List<String> teamList = new ArrayList<>();
	
	private int numberOfGroups;
	
	private int playersPerGroup;
	
	private int groudsRequired;

	public List<GameEntity> getScheduledMatches() {
		return scheduledMatches;
	}

	public void setScheduledMatches(List<GameEntity> scheduledMatches) {
		this.scheduledMatches = scheduledMatches;
	}

	public List<String> getTeamList() {
		return teamList;
	}

	public void setTeamList(List<String> teamList) {
		this.teamList = teamList;
	}

	public int getNumberOfGroups() {
		return numberOfGroups;
	}

	public void setNumberOfGroups(int numberOfGroups) {
		this.numberOfGroups = numberOfGroups;
	}

	public int getPlayersPerGroup() {
		return playersPerGroup;
	}

	public void setPlayersPerGroup(int playersPerGroup) {
		this.playersPerGroup = playersPerGroup;
	}

	public int getGroudsRequired() {
		return groudsRequired;
	}

	public void setGroudsRequired(int groudsRequired) {
		this.groudsRequired = groudsRequired;
	}
	
	
}
